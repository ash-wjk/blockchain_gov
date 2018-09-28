import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import AddProject from './components/addProject';
import UpdateProject from './components/updateProject';
import OverviewAndExpenses from './components/overviewAndExpenses';
import HowItWorks from './components/howItWorks'
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
            <Route exact path="/" component={Home} />
            <Route path="/addProject" component={AddProject} />
            <Route path="/updateProject" component={UpdateProject} />
            <Route path="/overviewAndExpenses" component={OverviewAndExpenses} />
            <Route path="/howItWorks" component={HowItWorks} />
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
