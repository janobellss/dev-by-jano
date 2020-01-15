import React, { Component } from 'react';

// STYLESHEET
import './App.css';

// COMPONENTS
// BODY SCROLL LOCK
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import type { BodyScrollOptions } from 'body-scroll-lock';

// CONTENTS
import Header from './components/Header/Header';
import FullScreenMenu from './components/FullScreenMenu/FullScreenMenu';
import MainContentHome from './components/MainContentHome/MainContentHome';
import MainContentProjects from './components/MainContentProjects/MainContentProjects';
import MainContentAbout from './components/MainContentAbout/MainContentAbout';
import MainContentWorkExp from './components/MainContentWorkExp/MainContentWorkExp';
import MainContentSkills from './components/MainContentSkills/MainContentSkills';
import MainContentServices from './components/MainContentServices/MainContentServices';
import MainContentContact from './components/MainContentContact/MainContentContact';
import Footer from './components/Footer/Footer';

// BOOTSTRAP
// import 'bootstrap/dist/css/bootstrap.min.css';

// WEBFONT
import WebFont from 'webfontloader';

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// ADD FONTAWESOME TO LIBRARY
library.add(fab, fas);

// HOW TO USE FONTAWESOME ICON:
// <FontAwesomeIcon icon="coffee" />
// <FontAwesomeIcon icon={['fab','html5']} />
// <FontAwesomeIcon icon={['fas','glasses']} />
// <FontAwesomeIcon icon={['fas','coffee']} />

// LOAD WEBFONT
WebFont.load({
  google: {
    families: [
      'Anton', 
      // 'Big Shoulders Text:300,400,500', 
      'Oswald:400,500,600,700', 
      // 'Rakkas', 
      // 'Roboto:500', 
      'Titillium Web:300,400', 
      'sans-serif'
    ]
  }
});

// WAYS TO CREATE A COMPONENT FUNCTION
// function App(props) {}
// class App extends React.Compnent {}
// class App extends Component {} // NEED TO IMPORT { Component }
// const App = (props) => {}

const options: BodyScrollOptions = {
  reserveScrollBarGap: true
}

const isMobileDevice = () => {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    fsMenuOpen: false,
    // isProjectOpen: false
  };
  
  fsMenuToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        fsMenuOpen: !prevState.fsMenuOpen
      }
    });
  };

  targetElement = null;
  
  componentDidMount() {
    this.targetElement = document.querySelector('body');

    window.addEventListener('scroll', this.handleScroll);

    // alert("window.innerWidth " + window.innerWidth + " " + "window.innerHeight " + window.innerHeight);
  }

  showTargetElement = () => {
    // disableBodyScroll(this.targetElement, options);

    // console.log("fsMenuOpen: " + this.state.fsMenuOpen);
    // console.log("isProjectOpen: " + this.state.isProjectOpen);
  };

  hideTargetElement = () => {
    // enableBodyScroll(this.targetElement);

    // console.log("fsMenuOpen: " + this.state.fsMenuOpen);
    // console.log("isProjectOpen: " + this.state.isProjectOpen);
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    // winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    // height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    // scrolled = (winScroll / height) * 100,
    isMobile = isMobileDevice(),
    shrinkOn = 200,
    headerEl = document.querySelector('.header-main'),
    removeHomeScroll = 500,
    homeScrollBtn = document.querySelector('.scroll-down-btn-wrapper');

    // console.log("IS MOBILE? " + isMobile);
    // console.log(distanceY + " " + winScroll + " " + height + " " + scrolled);

    if(!isMobile) {
      if (distanceY > shrinkOn) {
        headerEl.classList.add("smaller");
      } else {
        headerEl.classList.remove("smaller");
      }
    } else {
      if (distanceY > shrinkOn) {
        headerEl.classList.add("smaller-mobile");
      } else {
        headerEl.classList.remove("smaller-mobile");
      }
    }

    if(distanceY > removeHomeScroll) {
      homeScrollBtn.classList.add('remove');
    } else {
      homeScrollBtn.classList.remove('remove');
    }
  }

  // callbackFunction = (isProjectOpen) => {
  //   console.log("MAIN CONTENT PROJECTS: " + isProjectOpen);

  //   this.setState({
  //     isProjectOpen: isProjectOpen
  //   });
  // }

  // isMobileDevice = () => {
  //   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  // }

  render() {

    // console.log("fsMenuOpen: " + this.state.fsMenuOpen);

    // if(this.state.fsMenuOpen) {
    //   this.showTargetElement();
    // } else {
    //   this.hideTargetElement();
    // }
    
    return(
      <div className='app'>
        <Header 
          fsMenuShow={this.state.fsMenuOpen} 
          fsMenuToggleClickHandler={this.fsMenuToggleClickHandler}
        />

        <FullScreenMenu 
          fsMenuShow={this.state.fsMenuOpen}
          fsMenuToggleClickHandler={this.fsMenuToggleClickHandler} 
        />
        
        <MainContentHome />

        <MainContentProjects
          fsMenuShow={this.state.fsMenuOpen}
          showTargetElement={this.showTargetElement}
          hideTargetElement={this.hideTargetElement}
          // callbackFunction={this.callbackFunction}
        />

        <MainContentAbout />
        <MainContentWorkExp />
        <MainContentSkills />
        <MainContentServices />
        <MainContentContact />

        <Footer />
      </div>
    );
  }
}

export default App;