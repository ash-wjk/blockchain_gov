import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


import '../styles/main.css';
import '../styles/xsscreen.css';

class NavBar extends Component {

render(){


return(
    <nav class="navbar  navbar-inverse fixed-top navbar-expand-lg navbar-dark">

    <div className="bg-color">
    <div class="container-fluid-nav text-center">

    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarNav">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink to="/">HOME</NavLink>
            {/* <a class="nav-link" href="#">HOW IT WORKS</a>*/}
          </li>
          <li >
            <NavLink to="/voteProject">VOTE</NavLink>
          </li>
          <li >
            <NavLink to="/howItWorks">HOW IT WORKS</NavLink>
          </li>
          <li >
            <NavLink to="/news">NEWS</NavLink>
          </li>
          <li >
            <NavLink to="/contactUs">CONTACT US</NavLink>
          </li>
        </ul>

      </div>
      </div>
      </div>
    </nav>

  )}
  // end of return and render
} // end of Component


export default NavBar;
