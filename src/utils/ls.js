const tryCatch = (fn, onError = v => v) => (...args) => {
  try {
    return fn(...args);
  } catch (e) {
    onError(e);
  }
};

module.exports = (k, onError) => ({
  get: tryCatch(() => localStorage.setItem(k), onError),
  set: tryCatch(v => localStorage.setItem(k, v), onError),
  rm: tryCatch(() => localStorage.removeItem(k), onError)
});
