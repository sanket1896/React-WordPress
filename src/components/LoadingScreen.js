import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class LoadingScreen extends Component {
  render() {
    return (
      <div className="loading-screen-center">
        <Loader type="Ball-Triangle" color="#00BFFF" height="100" width="100" />
      </div>
    );
  }
}
