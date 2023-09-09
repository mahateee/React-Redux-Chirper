import React, { useState } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";
function NewTweet({ dispatch, id }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const text = e.target.value;

    setText(text);
    // if (!id) {
    //   navigate("/");
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTweet(text, id));

    setText("");
  };
  const tweetLeft = 280 - text.length;
  return (
    <>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion (20)
        </h2>
      </div>
      <form class="mb-6" onSubmit={handleSubmit}>
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label for="comment" class="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            value={text}
            onChange={handleChange}
            rows="6"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
            maxLength={280}
          ></textarea>
        </div>
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button
          type="submit"
          disabled={text === ""}
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
    </>
  );
}
export default connect()(NewTweet);
