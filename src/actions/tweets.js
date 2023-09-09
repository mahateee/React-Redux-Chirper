import { saveLikeToggle, saveTweet } from "../utils/api";
import { RECEIVE_TWEET, TOGGLE_TWEET, ADD_TWEET } from "./types";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function receive_tweet(tweets) {
  return {
    type: RECEIVE_TWEET,
    tweets,
  };
}
export function toggle_tweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}

export function handleToggle(info) {
  return (dispatch) => {
    dispatch(toggle_tweet(info));
    return saveLikeToggle(info).catch((e) => {
      console.log("ERROR: Save Like Toggle", e);
      dispatch(toggle_tweet(info));
      alert("The was an error liking the tweet. Try again.");
    });
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      text,
      author: authedUser,
      replyingTo,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}
