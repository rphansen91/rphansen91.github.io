const activePortfolio = paths => pathname => {
  for (let path in paths) {
    if (pathname.includes(path) && typeof paths[path] === "function")
      return paths[path]();
  }
};

export const activePortfolioName = activePortfolio({
  applications: () => "Applications",
  "open-source": () => "Open Source",
  experience: () => "Experience",
  skills: () => "Skills",
  education: () => "Education"
});

export const activePortfolioColor = activePortfolio({
  applications: () => "is-primary",
  "open-source": () => "is-warning",
  experience: () => "is-success",
  education: () => "is-primary",
  skills: () => "is-info"
});
