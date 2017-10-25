import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Events from './components/events';

import Footer from './components/footer';
import Partners from './components/partners';
import Services from './components/services';
import Team from './components/team';
import './style.css';
import './font-awesome-4.7.0/css/font-awesome.min.css'
import NavBar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />
        
        <Events/>
        <Partners />
        <Services />
        <Team />
        <Contact/>
        
      </div>
    );
  }
}

export default App;
