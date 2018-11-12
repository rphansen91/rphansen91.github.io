import { combineReducers } from "redux";
import { navbar } from "./navbar";
import { packages } from "./packages";
import { resume } from "./resume";
import { posts } from "./blog";
import { contact } from "./contact";

export default combineReducers({
  navbar,
  packages,
  resume,
  posts,
  contact
});
