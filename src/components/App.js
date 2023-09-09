import Nav from "./Nav";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
import Dashboard from "../pages/Dashboard";
import TweetPage from "../pages/TweetPage";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewTweetPage from "../pages/NewTweetPage";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <BrowserRouter>
      {props.loading === true ? null : (
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/tweet/:id" element={<TweetPage />} />
          <Route path="/new" element={<NewTweetPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});
export default connect(mapStateToProps)(App);
