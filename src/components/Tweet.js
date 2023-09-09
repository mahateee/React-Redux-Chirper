import React from "react";
import NewTweet from "./NewTweet";
import { connect } from "react-redux";
import { formatDate, formatTweet } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";
import { handleToggle } from "../actions/tweets";
import { useNavigate, Link } from "react-router-dom";
function Tweet(props) {
  // console.log(props);
  const navigate = useNavigate();
  if (props.tweet === null) {
    return <div>tweet does not exist</div>;
  }
  const {
    name,
    id,
    timestamp,
    text,
    avatar,
    likes,
    replies,
    hasLiked,
    parent,
  } = props.tweet;
  //handling
  const handleLike = (e) => {
    e.preventDefault();
    const { dispatch, tweet, authedUser } = props;

    dispatch(
      handleToggle({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser,
      })
    );
  };
  const toParent = (e, id) => {
    e.preventDefault();
    navigate(`/tweet/${id}`);
  };
  return (
    <>
      <Link to={`/tweet/${id}`}>
        <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
              <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  class="mr-2 w-8 h-8 rounded-full"
                  src={avatar}
                  alt="Michael Gough"
                />
                {name}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                  {formatDate(timestamp)}
                </time>
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span class="sr-only">Comment settings</span>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownComment1"
              class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          {parent && (
            <button
              className="replying-to"
              class="text-sm text-gray-600 dark:text-gray-400"
              onClick={(e) => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}

          <p class="text-gray-500 dark:text-gray-400">{text}</p>
          <div class="flex items-center mt-4 space-x-4">
            {/* replies */}
            <div class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
              <TiArrowBackOutline className="tweet-icon" />
              <span>{replies !== 0 && replies}</span>
            </div>
            {/* likes */}
            <div class="flex items-center">
              <button
                className="heart-button"
                class=" text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                onClick={handleLike}
              >
                {hasLiked === true ? (
                  <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                ) : (
                  <TiHeartOutline className="tweet-icon" />
                )}
              </button>
              <span>{likes !== 0 && likes}</span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};
export default connect(mapStateToProps)(Tweet);
