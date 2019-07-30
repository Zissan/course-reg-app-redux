import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiStatusCallsInProgess from "./apiStatusReducer";
const rootReducer = combineReducers({
  courses,
  authors,
  apiStatusCallsInProgess
});

export default rootReducer;
