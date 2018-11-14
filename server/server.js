import "fetch-everywhere";
import path from "path";
import express from "express";
import serverRenderer from "./renderer";

const app = express();
const port = Number(process.env.PORT) || 3000;
const publicPath = process.env.PUBLIC_PATH || "../build";
const staticPath = path.resolve(__dirname, publicPath);
const App = require(publicPath + "/App").default;
const { default: createStore, bootStore } = require(publicPath + "/store");
const renderer = serverRenderer(App, staticPath, () => {
  const store = createStore({});
  return bootStore(store).then(() => {
    return store;
  });
});

app.use("^/$", renderer);
app.use(express.static(staticPath));
app.use("*", renderer);

app.listen(port, e => {
  console.log(`${port} we have liftoff \u{1F680}`);
});
