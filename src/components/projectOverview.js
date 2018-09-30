import React, { Component } from 'react';
import moment from 'moment'

import ExpenceGraph from './expenceGraph'
import ProgressGraph from './progressGraph'


// import '../styles/App.css';
import '../styles/main.css';
import '../styles/largescreen.css';

const Overview = ({project}) => (
  <div>
  <div className="container">
  <div className="page-border row">{/* page title */}
    <div className="col-12">
    <div className="project-overview">
      <h1>{project.name}</h1>
    </div>
    </div>
  </div>

  <div className="page-border row">
    <div className="col-8">{/*row 8*/}
    <div className="project-details">{/* poject discription */}
    <p className="project-des">{project.description}</p>

      <div className="row">{/* poject dates */}
        <div className="col-5">
          <h3>Start Date:</h3>
          <h3>Estimated end Date:</h3>
        </div>
        <div className="col-7">
          <p>{moment(project.startDate).format('MMMM Do YYYY')}</p>
          <p>{moment(project.endDate).format('MMMM Do YYYY')}</p>
        </div>
      </div>{/* end of poject dates */}

    </div>{/* end of poject discription */}
    </div>{/*end of row 8*/}

    <div className="col-4">{/*row 4*/}
      <div className="circleChart1">
        <ExpenceGraph fillValue={project.completionPrecentage}/>
        <div className="icon">{`${project.completionPrecentage.toFixed(2)}%`}</div>
      </div>
    </div> {/*end of row 4*/}

  </div>
  <hr/>

  <div className="row">
    <div className="col-7">{/*row 6*/}
    <div className="page-border expence-title">
      <h2>MONTHLY PROGRESS</h2>
    </div>
      <div className="chart-progress">
        <ProgressGraph data={project.completionGraphData}/>
      </div>
    </div> {/*end of row 6*/}
    {/* end of monthly progress chart*/}


    <div className="col-5">
      <div className="expence-title">
        <h2>PROJECT MILESTONES</h2>
      </div>
        <div >{/*row 6*/}
          <ul className="milestones">
          {
            project.milestones.map(milestone => 
            <li className={milestone.completed ? "tick" : "cross"}>{milestone.name}  </li>)
          }
          </ul>
        </div>{/* end of Milestones*/}

    </div>{/*end of row 6*/}
  </div>{/*end of row*/}

  <hr/>

  <div className="update-button" >
      <button class="button" onClick={this.buttonClick}>UPDATE PROJECT STATUS</button>
  </div>

</div>
</div>
);

export default Overview;
