import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import AddProject from './components/addProject';
import UpdateProject from './components/updateProject';
import OverviewAndExpenses from './components/overviewAndExpenses';
import HowItWorks from './components/howItWorks'
import CreateProject from './components/createProject'
import BidProject from './components/bidProject'
import News from './components/news'
import ContactUs from './components/contactUs'
import './App.css';
import Popper from 'popper.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
          <div className="row">
            <div className="col-12">

            <Link to="/">HOME</Link>
            <Link to="/components/addProject">ADD PROJECT</Link>
            <Link to="/components/updateProject">UPDATE PROJECT</Link>
            <Link to="/components/overviewAndExpenses">OVERVIEW AND EXPENSES</Link>
            <Link to="/components/howItWorks">HOW IT WORKS</Link>
            <Link to="/components/createProject">CREATE PROJECT</Link>

            <Route exact path="/" component={Home} />
            <Route path="/addProject" component={AddProject} />
            <Route path="/updateProject" component={UpdateProject} />
            <Route path="/overviewAndExpenses" component={OverviewAndExpenses} />
            <Route path="/howItWorks" component={HowItWorks} />
            <Route path="/createProject" component={CreateProject} />
            <Route path="/bidProject" component={BidProject} />
            <Route path="/news" component={News} />
            <Route path="/contactUs" component={ContactUs} />
              {/*<Home />*/ }
               {/* <AddProject />*/ }
              {/* <OverviewAndExpenses />*/ }
              {/*<UpdateProject />*/ }
            </div>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
