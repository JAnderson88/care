import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

class picBubble extends Component {
  constructor(props){
    super(props);
    this.state = {
      style:{
        position:"relative",
        width: "100%",
        height: "100%",
        zindex: 0
      }
    };
  }

  render(){
    return(
      <div className="circle" id={this.props.id}><img src={this.props.image} className='img-circle' alt='picture' width='100%' height='100%'/></div>
    );
  }
}

export default picBubble;
