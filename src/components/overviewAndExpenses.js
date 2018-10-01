import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom'
import { SegmentedControl } from 'segmented-control';
import Footer from './footer'
import Overview from './projectOverview'
import Expenses from './projectExpenses'

import '../styles/main.css';
import '../styles/largescreen.css';


const OverviewAndExpenses = inject(stores => ({
  currentProject : stores.projects.currentProject,
  getProjectData : stores.ledger.getProjectData
}))(observer(
  class OverviewAndExpenses extends Component {

    state = {
      currentView : 'overview',
    }

    componentDidMount(){
      this.props.getProjectData();
    }
    
    render(){
      const {currentView, title} = this.state
      const { currentProject } = this.props;
      console.log('currentProject', currentProject);
      
      return(
        <div>
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

            {currentView === 'overview' ? <Overview project={currentProject} /> : <Expenses project={currentProject}/>}

            <hr/>

            <Route render={({history}) => (
              <div className="update-button" >
                  <button class="button" onClick={() => history.push('/updateProject')}>UPDATE PROJECT STATUS</button>
              </div>
            )} />
          </div>
            <Footer />
        </div>
      )}
    }
))

export default OverviewAndExpenses;
