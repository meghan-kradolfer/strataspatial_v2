import React from "react";
import { Route, Link } from "react-router-dom"
import Home from "../home/HomeView"
import BlogView from "../blog/BlogView"
import BlogPost from "../blog/BlogPost"
import tracker from "../../utils/google-analytics";

const App = () => (
  <div>
    <Route exact path="/" component={tracker(Home)} />
    <Route exact path="/blog" component={tracker(BlogView)} />
      <Route exact path="/blog-post/:postId" component={tracker(BlogPost)} />
    <Link to="/" className="nav-item top-left">
      <span className="fa fa-home" />
      <span className="link-text">
        Home
      </span>
    </Link>
    <Link to="/blog" className="nav-item top-right">
    <span className="link-text">
        Blog
      </span>
      <span className="fa fa-rss" />
    </Link>
    <Link to="/enquire" className="nav-item bottom-right">
    <span className="link-text">
        Enquire
      </span>
      <span className="fa fa-envelope" />
    </Link>
  </div>
);

export default App
