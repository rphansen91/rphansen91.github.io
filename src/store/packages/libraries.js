const travis = ({ username, project }) => ({
  src: `https://img.shields.io/travis/${username}/${project}.svg?style=flat-square`,
  url: `https://travis-ci.org/${username}/${project}`
});

const codecov = ({ username, project }) => ({
  src: `https://img.shields.io/codecov/c/github/${username}/${project}.svg?style=flat-square`,
  url: `https://travis-ci.org/${username}/${project}`
});

const npm = ({ project }) => ({
  src: `https://img.shields.io/npm/v/${project}.svg?style=flat-square`,
  url: `https://www.npmjs.com/package/${project}`
});

const downloads = ({ project }) => ({
  src: `https://img.shields.io/npm/dw/${project}.svg?style=flat-square`,
  url: `https://www.npmjs.com/package/${project}`
});

export default [
  {
    src:
      "https://raw.githubusercontent.com/rphansen91/redux-delta/master/assets/redux-delta.svg?sanitize=true",
    uri: "https://www.npmjs.com/package/redux-delta",
    git_uri: "",
    readme_uri: "",
    name: "Redux Delta",
    project: "redux-delta",
    username: "rphansen91",
    description:
      "Helper methods and cli to remove the boilerplate of Redux project setup and development.",
    shields: [
      travis({ username: "rphansen91", project: "redux-delta" }),
      codecov({ username: "rphansen91", project: "redux-delta" }),
      npm({ project: "redux-delta" }),
      downloads({ project: "redux-delta" })
    ]
  },
  {
    uri: "https://www.npmjs.com/package/redux-rtc",
    git_uri: "",
    readme_uri: "",
    name: "Redux RTC",
    project: "redux-rtc",
    username: "rphansen91",
    description: "Peer 2 Peer connected states using Redux and WebRTC",
    shields: [
      travis({ username: "rphansen91", project: "redux-rtc" }),
      codecov({ username: "rphansen91", project: "redux-rtc" }),
      npm({ project: "redux-rtc" }),
      downloads({ project: "redux-rtc" })
    ]
  },
  {
    uri: "https://www.npmjs.com/package/route-to",
    git_uri: "",
    readme_uri: "",
    name: "Route To",
    project: "route-to",
    username: "rphansen91",
    description: "Fast and simple http router.",
    shields: [
      travis({ username: "rphansen91", project: "route-to" }),
      codecov({ username: "rphansen91", project: "route-to" }),
      npm({ project: "route-to" }),
      downloads({ project: "route-to" })
    ]
  },
  {
    uri: "https://www.npmjs.com/package/react-form-controls",
    git_uri: "",
    readme_uri: "",
    name: "React Form Controls",
    project: "react-form-controls",
    username: "rphansen91",
    description: "Controls to make working with forms simple.",
    shields: [
      travis({ username: "rphansen91", project: "react-form-controls" }),
      codecov({ username: "rphansen91", project: "react-form-controls" }),
      npm({ project: "react-form-controls" }),
      downloads({ project: "react-form-controls" })
    ]
  }
];
