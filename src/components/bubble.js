import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import Picbubble from './picBubble.js';
import '../App.css';

class Bubble extends Component {
  constructor(props){
    super(props);
    this.logoAnimStart = this.logoAnimStart.bind(this);
    this.logoAnimReturn = this.logoAnimReturn.bind(this);
    this.toggleViewer = this.toggleViewer.bind(this);
    this.state = {
      logo: false,
      picCont: false,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      contWidth: 0,
      contLeft: 0,
      images:['picB1.png', 'picB2.png', 'picB3.png', 'picB4.png']
    };
  }

  updateDimensions()
  {
    var object = document.querySelectorAll(".bubble_cont")[0];
    var wdth = this.state.screenWidth * 0.9;
    var lft = -Math.round(wdth);
    wdth = Math.round(wdth);
    if(this.state.screenWidth > 750){
      object.style.width = wdth + "px";
      object.style.left = lft + "px";
      this.setState({contWidth: wdth, contLeft: lft}, function(){

      });
    } else {
      null
    }
  }

  componentDidMount()
  {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount()
  {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  animate(obj, pos, posEnd, interv, frm, dir, setSt, mov, degB, degE)
  {
    var id = setInterval(frame.bind(this), frm);
    function frame(){
      switch(dir){
        case "horizontal":
          //horizontal(obj, pos, posEnd, interv, setSt);
          if((pos > posEnd && mov === "right") || (pos < posEnd && mov === "left")){
            clearInterval(id);
            setSt;
            //console.log(this.state);
          } else {
            pos = pos + interv;
            obj.style.left = pos + "em";
          }
          break;
        case "vertical":
          if((pos > posEnd && mov === "down") || (pos < posEnd && mov === "up")){
            clearInterval(id);
            setSt;
            //console.log(this.state);
          } else {
            pos = pos + interv;
            obj.style.top = pos + "em";
          }
          break;
        case "grow_w_h":
          if((pos > posEnd && mov === "grow") || (pos < posEnd && mov === "shrink")){
            clearInterval(id);
            setSt;
            //console.log(this.state);
          } else {
            pos = pos + interv;
            obj.style.width = pos + 'em';
            obj.style.height = pos + 'em';
          }
          break;
        case "arc":
          if((degB > degE && mov === "curve_u")||(degB < degE && mov === "curve_d")){
            clearInterval(id);
            setSt;
            //console.log(this.state);
          } else {
            degB++;
            obj.style.top = Math.cos(degB) * 9;
            obj.style.left = Math.sin(degB) * 9;
          }
        defualt:
          null;
          break;
      }
    }
  }

  logoAnimStart()
  {
    setTimeout(() => {this.dimLights();}, 10);
    // console.log(this.state);
    this.state.logo === false ? this.animate(document.getElementsByClassName("logo")[0], 17.5, 19, 0.2, 2, "grow_w_h", this.setState({logo: true}), "grow") : null;
    this.state.picCont === false ? this.animate(document.getElementsByClassName("bubble_cont")[0], this.state.contLeft, 0, 4, 3, "horizontal", this.setState({picCont: true}), "right") : null;
    this.addPicBubble();
  }

  logoAnimReturn()
  {
    setTimeout(() => {this.raiseLights();}, 10);
    this.state.logo === true ? this.animate(document.getElementsByClassName("logo")[0], 19, 17.5, -0.2, 2, "grow_w_h", this.setState({logo: false}), "shrink") : null;
    this.state.picCont === true ? this.animate(document.getElementsByClassName("bubble_cont")[0], 0, this.state.contLeft, -3, 3, "horizontal", this.setState({picCont: false}), "left") : null;
  }

  dimLights()
  {
    let dimmer = document.createElement("div");
    let logo = document.querySelectorAll(".logo")[0];
    logo.style.zIndex = "6";
    dimmer.className = "dimLight";
    let main = document.getElementById("main");
    main.insertBefore(dimmer, main.childNodes[0]);
  }

  raiseLights()
  {
    var raiser = document.getElementsByClassName("dimLight")[0];
    raiser.parentNode.removeChild(raiser);
  }

  addPicBubble()
  {
    const style ={
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex"
    };

    let pic =(
      <div style={style}>
        <Picbubble id="cir1" image="./picB5.png"></Picbubble>
        <Picbubble id="cir2" image="./picB6.png"></Picbubble>
        <Picbubble id="cir3" image="./picB7.png"></Picbubble>
        <Picbubble id="cir4" image="./picB8.png"></Picbubble>
      </div>
    );
    var obj = document.getElementsByClassName("bubble_cont")[0];
    ReactDOM.render(pic, obj);
  }

  toggleViewer()
  {
      if(this.state.logo === false){
        this.logoAnimStart();
      } else {
        this.logoAnimReturn();
      }
  }

  render(){
    return(
      <ReactCSSTransitionGroup transitionName="logo" transitionEnterTimeout={10} transitionLeaveTimeout={10} transitionEnter={true} transitionLeave={true}>
        <div className="logo" onClick={this.toggleViewer}>
          <img src="./icon.png" alt="Logo" width="100%" height="100%"/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Bubble;
