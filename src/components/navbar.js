import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import '../App.css';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.titleGrow = this.titleGrow.bind(this);
    this.titleShrink = this.titleShrink.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.state = {
      home: (
        <div id="home">
          <h1>CARE Elementary School</h1>
          <h2>Christian Academy for Reaching Excellence </h2>
          <p> The <b>Mission</b> of CARE Elementary School is to provide a nurturing Christian environment where children from the Overtown community receive the best opportunity for academic success and character development. </p>
          <p> CARE Elementary School is committed to quality instruction by dedicated teachers, small classes with teachers’ aides in each class, technology embedded into the engaging common core curriculum and the ongoing support of volunteers. </p>
          <p> At CARE we value the rich multicultural nature of our community and we strive to include individuals from diverse backgrounds, embracing the exposure and opportunity it provides our students to learn understanding and acceptance of different ethnicities.  We provide a caring, respectful, and safe environment in which to prepare confident, lifelong learners and responsible citizens.</p>
          <div className="flex" id="flex_video">
            <div id="flex_video_left">
              Watch the video of The Care Expierence to learn more.
            </div>
            <div id="flex_video_right" width="50%">
            </div>
          </div>
          <div id="founders">
            <p>CARE Elementary School is grateful to our Founding Sponsors for their generous support in helping us to provide the CARE education at no charge to families.</p>
            <div className="flex" id="founders_list">
                <ul id="founders_list_lft">
                  <li>Miami Rescue Mission</li>
                  <li>The Peebles Corporation</li>
                  <li>AmTrust Bank</li>
                  <li>Anthony Abraham Foundation</li>
                  <li>Withers Worldwide Transit</li>
                  <li>The Ware Foundation</li>
                  <li>The Miami Foundation</li>
                  <li>Odebrecht USA</li>
                  <li>The Keyes Company</li>
                  <li>Jerome A. Yavitz Foundation</li>
                  <li>Dunspaugh Dalton Foundation</li>
                </ul>
                <ul id="founders_list_rght">
                  <li>Granada Presbyterian Church</li>
                  <li>Fine and Greenwald Foundation</li>
                  <li>Mark Fisher</li>
                  <li>Valero Texas Open</li>
                  <li>Bruce Bowen</li>
                  <li>Home Depot</li>
                  <li>The Peebles Family</li>
                  <li>Friends of CARE</li>
                  <li>Dibia Dream</li>
                  <li>Zumba Fitness</li>
                  <li>The Wiseheart Foundation</li>
                </ul>
            </div>
          </div>
          <h3>CARE Elementary School is a ministry of <a href="#">Miami Rescue Mission</a>.</h3>
          <div className="flex" id="quote_container">
            <div id="quote_lft">
              <img src="./CARE-building1.jpg" width="100%" height="55%" />
              <div className="quote">CARE is a great school because it allows me to learn on my iPad everyday with Lexia and Dream Box. CARE also makes reading so much fun with LOL Week and READ-ON! I love CARE!</div>
              <span>M. T. 2nd Grade Student</span>
            </div>
            <div id="quote_rght">
              <div className="quote">CARE is a great school because I am challenged daily to achieve my personal goals to get all A’s. It is also fun and hands-on!</div>
              <div>A.J. 2nd Grade Student</div>
              <div className="quote">What I love best about CARE is the loving and welcoming teachers, staff, and environment. I transferred later in the year, but I felt right at home.</div>
              <div>S. G. 2nd Grade Student</div>
              <div className="quote">At CARE, I have learned so much. What I love best about CARE is working on the iPads because it is fun and it helps me learn new things. CARE is a great school because the teachers give me all the help they can.</div>
              <div>S. M. 3rd Grade student</div>
            </div>
          </div>
        </div>
      ),
      admission: (<div id="admission"> This is the admission page</div>),
      about: (<div id="about"> This is the About Care page</div>),
      curriculm: (<div id="curriculm"> This is the curriculm page</div>),
      handbook: (<div id="handbook"> This is the Care handbook page</div>),
      calendar:(<div id="calendar"> This is the Calendar page</div>),
      contact: (<div id="contact"> This is the contact page</div>),
      donate: (<div id="donate"> This is the donate page</div>)
    };
  }

  titleGrow(){
    let sbts = document.querySelector(".subtitle");
    sbts = sbts.querySelectorAll("div");
    // console.log(sbts);
    sbts.forEach(this.fadeIn);
  }

  titleShrink(){
    let sbts = document.querySelector(".subtitle");
    sbts = sbts.querySelectorAll("div");
    // console.log(sbts);
    sbts.forEach(this.fadeOut);
  }

  fadeIn(item, index, arr){
    index = (index/2)-0.3;
    // console.log(index);
    let trans = "opacity " +index+"s linear"
    item.style.transition = trans;
    item.style.transitionDelay = "2s";
    item.style.opacity = 1;
    // console.log(item);
    // setTimeout(function() {console.log("Waited 5 seconds");}, 5000);
  }

  fadeOut(item, index, arr){
    item.style.transition = "opacity 0.1s linear";
    item.style.transitionDelay = "0.2s";
    item.style.opacity = 0;
  }

  fixMargin(){
    //  console.log("fixMargin has fired");
    let margin = document.querySelectorAll(".margin");
    // console.log(margin);
    // margin.map(function (margin){
    //   margin.style.height = "100%";
    // });
  }

  rendBody(buttonClicked){
    var obj = document.querySelectorAll(".bdy")[0];
    switch(buttonClicked){
      case "Home":
        while (obj.hasChildNodes()) {
          obj.removeChild(obj.firstChild);
        }
        ReactDOM.render(this.state.home, obj, () => this.fixMargin());
        // this.fixMargin();
        break;
      case "Admission":
        while (obj.hasChildNodes()) {
          obj.removeChild(obj.firstChild);
        }
        ReactDOM.render(this.state.admission, obj);
        this.fixMargin();
        break;
      case "About":
        while (obj.hasChildNodes()) {
          obj.removeChild(obj.firstChild);
        }
        ReactDOM.render(this.state.about, obj);
        this.fixMargin();
        break;
      case "Curriculm":
        while (obj.hasChildNodes()) {
          obj.removeChild(obj.firstChild);
        }
        ReactDOM.render(this.state.curriculm, obj);
        this.fixMargin();
        break;
      case "Handbook":
        while (obj.hasChildNodes()) {
          obj.removeChild(obj.firstChild);
        }
        ReactDOM.render(this.state.handbook, obj);
        this.fixMargin();
        break;
      case "Calendar":
        while (obj.hasChildNodes()) {
          obj.removeChild(obj.firstChild);
        }
        ReactDOM.render(this.state.calendar, obj);
        this.fixMargin();
        break;
      default:
        break;
    }
  }

  render(){
    return(
      <ReactCSSTransitionGroup transitionName="navbar" transitionEnterTimeout={10} transitionLeaveTimeout={10} transitionEnter={true} transitionLeave={true}>
        <div className="navbar" onMouseOver={this.titleGrow} onMouseOut={this.titleShrink}>
          <div className="title"> CARE Elementary School</div>
          <div className="subtitle">
            <div id="sbt1"><b>C</b>hristian</div><div id="sbt2"><b>A</b>cademy</div><div id="sbt3"><b>f</b>or</div><div id="sbt4"><b>R</b>eaching</div><div id="sbt5"><b>E</b>xcellence</div>
          </div>
          <div className="dblue">
            <span onClick={() => {this.rendBody("Home")}}>Home</span>
            <span onClick={() => {this.rendBody("Admission").bind(this)}}>Admission</span>
            <span onClick={() => {this.rendBody("About").bind(this)}}>About Care</span>
            <span onClick={() => {this.rendBody("Curriculm").bind(this)}}>Curriculum</span>
            <span onClick={() => {this.rendBody("Handbook").bind(this)}}>Care Handbook</span>
            <span onClick={() => {this.rendBody("Calendar").bind(this)}}>Calendar</span>
            <span onClick={() => {this.rendBody("Contact")}}>Contact</span>
            <span onClick={() => {this.rendBody("Donate")}}>Donate</span>
          </div>
        </div>
        </ReactCSSTransitionGroup>
    );
  }
}

export default Navbar;
