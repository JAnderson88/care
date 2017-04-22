import React, { Component } from 'react';
import Bubble from './components/bubble.js';
//import Picbubble from './components/picBubble.js';
import Navbar from './components/navbar.js';
import './App.css';


class App extends Component {

  render() {
    return (
      <div id="main">
        <div className="bubble_cont" id="bubble_contain"></div>
        <Bubble />
        <Navbar />
        <div className="body_cont">
          <div className="margin" id="mrg-lft"></div>
          <div className="bdy"></div>
          <div className="margin" id="mrg-rgt"></div>
        </div>
      </div>
    );
  }

}

export default App;
