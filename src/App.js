import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import AddProject from './components/addProject';
import UpdateProject from './components/updateProject';
import OverviewAndExpenses from './components/overviewAndExpenses';
import HowItWorks from './components/howItWorks'
import News from './components/news'
import ContactUs from './components/contactUs'
import VoteProject from './components/voteProject'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
          <div className="row">
            <div className="col-12">
            <Route exact path="/" component={Home} />
            <Route path="/addProject" component={AddProject} />
            <Route path="/updateProject" component={UpdateProject} />
            <Route path="/overviewAndExpenses" component={OverviewAndExpenses} />
            <Route path="/howItWorks" component={HowItWorks} />
            <Route path="/voteProject" component={VoteProject} />
            <Route path="/news" component={News} />
            <Route path="/contactUs" component={ContactUs} />
            </div>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
