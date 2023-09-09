import { combineReducers } from "redux";
import { authedUser } from "./authedUser";
import { users } from "./users";
import { tweets } from "./tweets";
import { loadingBarReducer } from "react-redux-loading-bar";
export const rootReducer = combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer,
});
