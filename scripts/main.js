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
            <div className="app_div"> 
                <Navbar />
                <ControlledCarousel className="carousel"/>
                <Pillars />
                <About />
            </div>
        )
    }
};


class About extends React.Component {

  render(){
    return(
      <div id="abpge" className="about_page">
        <h1>ABOUT</h1>
      </div>
    )
  }
};


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
      <Carousel>
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
      document.getElementById('abpge').scrollIntoView({block: "end", behavior: "smooth"});
      document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    }

    moveToTop(){
      window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="nav">
                <h1>Anna Vilson Lantz</h1>
                <nav className="menu">
                    <ul className="topnav">
                        <li>
                            <a onClick={ this.moveToTop }>Home</a>
                        </li>
                        <li>
                            <a onClick={ this.moveToAbout }>About</a>
                        </li>
                        <li>
                            <a>CV</a>
                        </li>
                        <li>
                            <a>Contact</a>
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