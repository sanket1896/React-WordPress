import React, { Component } from 'react';
import Post from './Post';
import LoadingScreen from './LoadingScreen';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : false,
      item : []
    };
  }

  componentDidMount(){
    fetch("https://thundery-rescue.000webhostapp.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoading : true,
          items : result
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { isLoading, items } = this.state;
    if (!isLoading) {
      return <LoadingScreen />
    } else {
      return (
        <div className="container">
        {
          items.map((item, index) => (
            <Post key={index} data={item} />
          ))
        }
        </div>
      );
    }
  }
}

export default Posts;
