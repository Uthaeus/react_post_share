import React, { Component } from 'react';
import './App.css';

import Post from './containers/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Header</h1>
        <Post />
      </div>
    );
  }
}

export default App;
