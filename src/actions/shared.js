import { getInitialData } from "../utils/api";
import { receive_tweet } from "./tweets";
import { receive_users } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
const AUTHED_ID = "tylermcginnis";
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receive_users(users));
      dispatch(receive_tweet(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
