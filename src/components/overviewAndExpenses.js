import React, { Component } from 'react';
import { row, col, table } from 'bootstrap';
import { SegmentedControl } from 'segmented-control';
import NavBar from './navbar'
import Footer from './footer'
import ExpenceGraph from './expenceGraph'
import ProgressGraph from './progressGraph'
import Overview from './projectOverview'
import Expenses from './projectExpenses'


// import '../styles/App.css';
import '../styles/main.css';
import '../styles/largescreen.css';


class OverviewAndExpenses extends Component {

state = {
  currentView : 'overview',

}

render(){
  const {currentView, title} = this.state
  return(
    <div>
      <NavBar />
      <div className="row">{/* Banner */}
            <div className="col-md-12">
                <div id="home_image" className="bg-image" >
                  <div className="container title-text" >
                  <div className="page-border">
                    <h1 className="homePageTitle">{currentView === 'overview' ? 'PROJECT OVERVIEW': 'PROJECT EXPENSES'}</h1>
                    </div>
                  </div>
                </div>
            </div>
      </div>{/* End of Banner */}

      <div className="container seg-controll">

        <SegmentedControl
          name="oneDisabled"
          options={[
            { label: "OVERVIEW", value: "overview", default: true },
            { label: "EXPENSES", value: "expence" }
          ]}
          setValue={newValue => this.setState({currentView : newValue})}
          style={{ width: 400, color: '#0C93DD', border: 0}} // purple400
          />

        {currentView === 'overview' ? <Overview /> : <Expenses />}

      </div>
        <Footer />
    </div>

  )}

}

export default OverviewAndExpenses;
