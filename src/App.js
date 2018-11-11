import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './components/Posts';
import PostPage from './components/PostPage';
import NormalHeader from './components/NormalHeader';
import StickyHeader from './components/StickyHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NormalHeader />
          <StickyHeader containerTop={50}/>
          <Route path="/" component={Posts} exact={true}/>
          <Route path="/post/:id" component={PostPage} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
