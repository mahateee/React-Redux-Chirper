import React from "react";
import Tweet from "../components/Tweet";
import NewTweet from "../components/NewTweet";
import Nav from "../components/Nav";
import TweetsList from "../components/TweetsList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard(props) {
  console.log(props);
  return (
    <>
      <Nav />
      <TweetsList>
        <ul className="dashboard-list">
          {props.tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </TweetsList>
    </>
  );
}
const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});
export default connect(mapStateToProps)(Dashboard);
