import React, { Component } from "react";
import Config from "../Variable";
import LoadingScreen from "./LoadingScreen";

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      item: []
    };
  }

  componentDidMount(props) {
    fetch(
      `${Config.BASE_URL}posts?slug=${
        this.props.match.params.id
      }`
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoading: true,
          item: result
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { isLoading, item } = this.state;

    if (!isLoading) {
      return <LoadingScreen />;
    } else {
      return (
        <div className="post-page">
          <h1>{item[0].title.rendered}</h1>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: item[0].content.rendered }}
          />
        </div>
      );
    }
  }
}

export default PostPage;
