import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import { Carousel } from 'react-bootstrap';


/*
App
*/

class App extends React.Component {
    render(){
        return(
          <div>
            <div className="appdiv"> 
                <Navbar />
                <ControlledCarousel />
                <Pillars />
                <About />
            </div>
            <Contact />
          </div>
        )
    }
};


/*
  About
*/

class About extends React.Component {

  render(){
    return(
      <div id="abpge" className="about_page">
        <div className="perinfo">
          <h1>About Anna</h1>
          <p>
            Anna Vilson Lantz, lawyer and senior consultant, provides compliance and risk services to banks and 
            other financial institutions (securities services, AML/CTF, credits, Code of conduct, GL44, Swedish FSA 
            issues and authorizations etc.). Anna also has long experience in change management, training and 
            communication and is a skilful negotiator and customer relations manager.
          </p>
        </div>
        <img src="/build/css/images/portrait.jpg"></img>
      </div>
    )
  }
};


/*
  Contact
*/

class Contact extends React.Component {
  render() {
    return(
      <div className="contact">CONTACT</div>
    )
  }

};

/*
  Pillars
*/

class Pillars extends React.Component {

  render(){
    return(
      <div className='pillars'>
        <section>
          <img src="/build/css/images/chess.jpg"></img>
          <h1>Legal</h1>
          <hr/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt utsa commodo consequat.
          </p>
        </section>
        <section>
          <img src="/build/css/images/chess.jpg"></img>
          <h1>Compience</h1>
          <hr/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </section>
        <section>
          <img src="/build/css/images/chess.jpg"></img>
          <h1>Management</h1>
          <hr/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          </p>
        </section>
      </div>
    )
  }
};


const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img width={900} height={250} alt="900x500" src="/build/css/images/pexels-photo.jpg"/>
          <Carousel.Caption>
            <h3>Legal services</h3>
            <p>Legal services for coorperations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/build/css/images/pexels-photo.jpg"/>
          <Carousel.Caption>
            <h3>Complience</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/build/css/images/pexels-photo.jpg"/>
          <Carousel.Caption>
            <h3>Business Management</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
});

/*
    Navbar
    <navbar />
*/

class Navbar extends React.Component {

    responsiveTogg(){
        document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    }

    moveToAbout(){
      //document.getElementById('abpge').scrollIntoView({block: "end", behavior: "smooth"});
      document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
      if(window.scrollY<800) {
        var scrollTimer = setInterval(function() {
          var speed = 1;
          var current = window.scrollY;
          //FIX THIS! \/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          console.log(document.getElementById("abpge").scrollTop);

          if(current<800){
            speed=speed*50;
            window.scrollTo(0, current + speed);
          }
          else {
            clearInterval(scrollTimer);
          }
        }, 16);
      }

      else if(window.scrollY>850){
        var scrollTimer = setInterval(function() {
          var speed = 1;
          var current = window.scrollY;

          if(current>850){
            speed=speed*50;
            window.scrollTo(0, current - speed);
          }
          else {
            clearInterval(scrollTimer);
          }
        }, 16);
      }
    }

    moveToContact(){
      document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
      var scrollTimer = setInterval(function() {
        var speed = 1;
        var current = window.scrollY;

        if(current<1000){
          speed=speed*50;
          window.scrollTo(0, current + speed);
        }
        else {
          clearInterval(scrollTimer);
          window.scrollTo(0, document.body.scrollHeight);
        }
      }, 16);
    }


    moveToTop(){
      var scrollTimer = setInterval(function() {
        var speed = 1;
        var current = window.scrollY;

        if(current>0){
          speed=speed*50;
          window.scrollTo(0, current - speed);
        }
        else {
          clearInterval(scrollTimer);
          window.scrollTo(0, 0);
        }
      }, 16);
    }

    render(){
        return(
            <div className="nav">
                <nav className="menu">
                  <h1>Anna Vilson Lantz</h1>
                    <ul className="topnav">
                        <li>
                            <a onClick={ this.moveToTop }>Home</a>
                        </li>
                        <li>
                            <a onClick={ this.moveToAbout }>About</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/anna-vilson-lantz-92aa28?authType=NAME_SEARCH&authToken=nnec&locale=sv_SE&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CentityType%3AentityHistoryName%2CclickedEntityId%3Amynetwork_2544946%2Cidx%3A0">CV</a>
                        </li>
                        <li>
                            <a onClick={ this.moveToContact }>Contact</a>
                        </li>

                        <li>
                            <a onClick={ this.responsiveTogg }>&#9776;</a>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
};

/*
Not found
<NotFound/>
*/

class NotFound extends React.Component {
    render(){
        return <h1>THIS IS YOUR FAULT</h1>
    }
};

/*
Routes
*/

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="*" component={NotFound}/>
    </Router>
)

ReactDOM.render(routes, document.getElementById('main'));