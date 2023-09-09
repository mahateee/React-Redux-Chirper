import React from "react";
import Tweet from "../components/Tweet";
import NewTweet from "../components/NewTweet";
import Nav from "../components/Nav";
import TweetContainer from "../components/TweetContainer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};
function TweetPage(props) {
  return (
    <>
      <Nav />
      <TweetContainer>
        <Tweet id={props.id} />
        <NewTweet id={props.id} />
        {props.replies.length !== 0 && (
          <div class="flex items-center">
            <h3 class="inline-flex items-center mr-3 text-md text-gray-900 dark:text-white font-semibold">
              Replies
            </h3>
          </div>
        )}

        <ul>
          {props.replies.map((replyId) => (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          ))}
        </ul>
      </TweetContainer>
    </>
  );
}

const mapStateToProps = ({ authedUser, tweets, users }, props) => {
  const { id } = props.router.params;

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        ),
  };
};

export default withRouter(connect(mapStateToProps)(TweetPage));
