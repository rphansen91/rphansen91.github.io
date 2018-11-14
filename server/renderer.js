import React from "react";
import { hydrate } from "emotion";
import { extractCritical } from "emotion-server";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import path from "path";
import fs from "fs";

export default (App, htmlPath, createStore = v => v) => {
  const filePath = path.resolve(htmlPath, "index.html");
  const htmlData = fs.readFileSync(filePath, "utf8");

  return (req, res, next) => {
    const context = {};
    const location = req.originalUrl || req.url;

    Promise.resolve()
      .then(() => createStore(req, res, next))
      .then(store => {
        const { html, ids, css } = extractCritical(
          renderToString(
            <StaticRouter location={location} context={context}>
              <Provider store={store}>
                <App />
              </Provider>
            </StaticRouter>
          )
        );
        const helmet = Helmet.renderStatic();
        const state = store.getState();
        return { html, ids, css, helmet, state };
      })
      .then(({ html, ids, css, helmet, state }) => {
        return htmlData
          .replace("<html>", `<html ${helmet.htmlAttributes.toString()}>`)
          .replace("<body>", `<body ${helmet.bodyAttributes.toString()}>`)
          .replace("</head>", `${helmet.title.toString()}\n</head>`)
          .replace("</head>", `${helmet.meta.toString()}\n</head>`)
          .replace("</head>", `${helmet.link.toString()}\n</head>`)
          .replace(
            "window.__EMOTION_IDS__=[]",
            `window.__EMOTION_IDS__=${JSON.stringify(ids)}`
          )
          .replace(
            "window.__PRELOADED_STATE__={}",
            `window.__PRELOADED_STATE__=${JSON.stringify(state)}`
          )
          .replace("</head>", `<style>${css}</style>\n</head>`)
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
      })
      .then(html => res.send(html))
      .catch(err => {
        console.log(err);
        res.send(htmlData);
      });
  };
};
