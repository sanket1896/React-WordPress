import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="">
          <img src="https://via.placeholder.com/300x150" alt=""></img>
          <Link to={`/post/${this.props.data.slug}`} style={{textDecoration: 'none'}}>
            <h3 className="post-title" >{this.props.data.title.rendered}</h3>
          </Link>
          <div className="">
            {this.props.data.cats.map((cat,index) => (
              <span className="category-tag" key={index}>{cat.name}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Post;