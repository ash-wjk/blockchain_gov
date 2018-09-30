import React, { Component } from 'react';
import { BrowserRouter,Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Home from './home'
import AddProject from './addProject'
import UpdateProject from './updateProject'
import OverviewAndExpenses from './overviewAndExpenses'
import HowItWorks from './howItWorks'
import CreateProject from './createProject'
import BidProject from './bidProject'
import News from './news'
import ContactUs from './contactUs'


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
            {/*<a class="nav-link" href="#">HOW IT WORKS</a>*/}
          </li>
          <li>
            <NavLink to="/addProject">ADD PROJECT</NavLink>
            {/*<a class="nav-link" href="#">BACKGROUND</a>*/}
          </li>
          <li>
            <NavLink to="/updateProject">UPDATE PROJECT</NavLink>
          </li>
          <li >
            <NavLink to="/overviewAndExpenses">OVERVIEW AND EXPENSES</NavLink>
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

            {/*<li >
            <NavLink to="/createProject">CREATE PROJECT</NavLink>
          </li>
          <li >
            <NavLink to="/bidProject">PLACE A BID</NavLink>
          </li>*/}

        </ul>

      </div>
      </div>
      </div>
    </nav>

  )}
  // end of return and render
} // end of Component


export default NavBar;
