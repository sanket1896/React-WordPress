import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Posts from "./components/Posts";
import PostPage from "./components/PostPage";
import NormalHeader from "./components/NormalHeader";
import StickyHeader from "./components/StickyHeader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <NormalHeader />
          <StickyHeader containerTop={50} />
          <Switch>
            <Route path="/" component={Posts} exact={true} />
            <Route path="/post/:id" component={PostPage} />
            <Route component={() => <div>404 not found</div>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
