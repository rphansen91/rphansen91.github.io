import { navSideEffects } from "./navbar";
import { loadResume } from "./resume";
import { loadPackages } from "./packages";

export default function({ dispatch, getState } = {}) {
  navSideEffects(dispatch, getState);
  return Promise.all([dispatch(loadResume()), dispatch(loadPackages())]);
}
