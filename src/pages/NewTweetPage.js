import React from "react";
import Nav from "../components/Nav";
import NewTweet from "../components/NewTweet";
import TweetContainer from "../components/TweetContainer";

export default function NewTweetPage() {
  return (
    <>
      <Nav />
      <TweetContainer>
        <NewTweet />
      </TweetContainer>
    </>
  );
}
