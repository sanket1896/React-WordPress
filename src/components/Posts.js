import React, { Component } from "react";
import Config from "../Variable";
import Post from "./Post";
import LoadingScreen from "./LoadingScreen";
import Pagination from "./Pagination";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      totalPages: "",
      currentPage: "",
      prevPage: "",
      nextPage: "",
      item: []
    };
    this.getPosts = this.getPosts.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
  }

  componentDidMount() {
    // First time load
    this.getPosts(1);
  }

  getPosts(pageNumber) {
    //show loading
    this.setState({
      isLoading: false,
    });

    // start fetching data
    let totalPages = "";
    const per_page = 6;
    fetch(`${Config.BASE_URL}Posts?per_page=${per_page}&page=${pageNumber}`)
      .then(res => {
        totalPages = res.headers.get("X-WP-TotalPages");
        return res.json();
      })
      .then(result => {
        // set new state and page numbers
        const prevPage = pageNumber <= 1 ? null : pageNumber - 1;
        const nextPage = totalPages == pageNumber ? null : pageNumber + 1;

        this.setState({
          isLoading: true,
          totalPages: totalPages,
          currentPage: pageNumber,
          prevPage: prevPage,
          nextPage: nextPage,
          items: result
        });

        window.scrollTo(0, 0);
      })
      .catch(err => console.log(err));
  }

  getNextPage() {
    if (this.state.nextPage) this.getPosts(this.state.nextPage);
  }
  getPrevPage() {
    if (this.state.prevPage) this.getPosts(this.state.prevPage);
  }

  render() {
    const { isLoading, items } = this.state;

    if (!isLoading) {
      return <LoadingScreen />;
    } else {
      return (
        <div className="container">
          <div className="post-list">
            {items.map((item, index) => (
              <Post key={index} data={item} />
            ))}
          </div>
          <Pagination
            nextPage={this.getNextPage}
            prevPage={this.getPrevPage}
            buttonState={{
              prev: this.state.prevPage,
              next: this.state.nextPage
            }}
          />
        </div>
      );
    }
  }
}

export default Posts;
