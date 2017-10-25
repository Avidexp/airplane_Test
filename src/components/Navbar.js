import React from 'react';
import '../css/style.css';

class Navbar extends React.Component{

    render(){
        return(
            <div id="myNavbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
    
                    <a href="#" className="navbar-brand">Foster The Future</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#services">services</a></li>
                        <li><a href="#events">events</a></li>
                        <li><a href="#team">team</a></li>
                        <li><a href="#partners">partners</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar;