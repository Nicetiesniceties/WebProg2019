import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Page";
import Post from "./Blog/PostFirst";
import PostFirst from "./Blog/PostFirst";
import PostSecond from "./Blog/PostSecond";
import PostThird from "./Blog/PostThird";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/home/first"
            classN="wrapper-post-bg-img1"
            component={PostFirst}
          />
          <Route
            exact
            path="/home/Second"
            classN="wrapper-post-bg-img2"
            component={PostSecond}
          />
          <Route
            exact
            path="/home/Third"
            classN="wrapper-post-bg-img3"
            component={PostThird}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
