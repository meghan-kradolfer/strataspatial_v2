import React from "react";
import { Route, Link } from "react-router-dom"
import Home from "../home/HomeView"
import BlogView from "../blog/BlogView"
import BlogPost from "../blog/BlogPost"
import FooterNav from "../../components/FooterNav"
import tracker from "../../utils/google-analytics";


const App = () => (
  <div>
    <Route exact path="/" component={tracker(Home)} />
    <Route exact path="/blog" component={tracker(BlogView)} />  
    <FooterNav />
  </div>
);

export default App
