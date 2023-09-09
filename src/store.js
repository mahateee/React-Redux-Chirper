// import { configureStore } from "@reduxjs/toolkit";
import { authedUser } from "./reducers/authedUser";
import { users } from "./reducers/users";
import { tweets } from "./reducers/tweets";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers";
import middleware from "./middleware/index";
export const store = createStore(rootReducer, middleware);
