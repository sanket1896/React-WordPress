import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <img src="https://via.placeholder.com/300x150" alt="" />
        <Link
          to={`/post/${this.props.data.slug}`}
          style={{ textDecoration: "none" }}
        >
          <h3 className="post-title">{this.props.data.title.rendered}</h3>
        </Link>
        {/* <div className="">
            {this.props.data.cats.map((cat,index) => (
              <span className="category-tag" key={index}>{cat.name}</span>
            ))}
          </div> */}
      </div>
    );
  }
}

export default Post;
