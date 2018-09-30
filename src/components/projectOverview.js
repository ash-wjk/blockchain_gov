import React, { Component } from 'react';
import { row, col, table } from 'bootstrap';
import ExpenceGraph from './expenceGraph'
import ProgressGraph from './progressGraph'


// import '../styles/App.css';
import '../styles/main.css';
import '../styles/largescreen.css';

const Overview = ({name}) => (
  <div>
  <div className="container">
  <div className="page-border row">{/* page title */}
    <div className="col-12">
    <div className="project-overview">
      <h1>{name}</h1>
    </div>
    </div>
  </div>

  <div className="page-border row">
    <div className="col-8">{/*row 8*/}
    <div className="project-details">{/* poject discription */}
    <p className="project-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam arcu a mattis fermentum. Etiam mauris neque, ultricies id felis ac, facilisis sollicitudin lorem. Phasellus quis consectetur orci.</p>

      <div className="row">{/* poject dates */}
        <div className="col-5">
          <h3>Start Date:</h3>
          <h3>Estimated end Date:</h3>
        </div>
        <div className="col-7">
          <p>07/07/2018</p>
          <p>07/07/2019</p>
        </div>
      </div>{/* end of poject dates */}

    </div>{/* end of poject discription */}
    </div>{/*end of row 8*/}

    <div className="col-4">{/*row 4*/}
      <div className="circleChart1">
        <ExpenceGraph />
        <div className="icon">53%</div>
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
        <ProgressGraph />
      </div>
    </div> {/*end of row 6*/}
    {/* end of monthly progress chart*/}


    <div className="col-5">
      <div className="expence-title">
        <h2>PROJECT MILESTONES</h2>
      </div>
        <div >{/*row 6*/}
          <ul className="milestones">
            <li className="cross">Coffee  </li>
            <li className="cross">Tea</li>
            <li className="tick">Milk</li>
            <li className="cross">Coffee</li>
            <li className="cross">Tea</li>
            <li className="tick">Milk</li>
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
