import React from 'react';
import { row, col, table } from 'bootstrap';
import ExpenceGraph from './expenceGraph'
import ProgressGraph from './progressGraph'
import ExpensePrecentageGraph from './expencePrecentage'
import ProjectExpensesGraph from './projectExpensesGraph'
import BalanceGraph from './balanceGraph'

// import '../styles/App.css';
import '../styles/main.css';
import '../styles/largescreen.css';

const Expenses = () => (
<div>

  <div className="container">

  <div className="page-border row">{/* page title */}
    <div className="col-12">
    <div className="expence-title">
      <h1>EXPENSES</h1>
    </div>
    </div>
  </div>

  <div className="page-border row">
    <div className="col-5">
        <table className="table table-bordered">
          <tr>
            <th scope="col">
              <h2>£50000</h2>
              <p>Budget</p>
            </th>
            <th scope="col">
            <h2>£37000</h2>
            <p>Total Expenses</p>
            </th>
          </tr>
        </table>
      </div>

      <div className="col-2">
        <div className="circleChart">
          <ExpensePrecentageGraph />
          <div className="icon">21%</div>
        </div>
      </div>

      <div className="col-5">
          <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <h2>£13000</h2>
                <p>Remaining Budget</p>
              </th>
              <th scope="col">
                <h2>5%</h2>
                <p>% Remaining Budget</p>
              </th>
            </tr>
          </thead>
          </table>
      </div>

    </div>{/* end of row*/}

    <hr/>

    <div className="row">
      <div className="col-6">
        <div className="page-border expence-title">
          <h2>PROJECT EXPENSES</h2>
        </div>
        <ProjectExpensesGraph />
      </div>

      <div className="col-6">
        <div className="page-border expence-title">
          <h2>REMAINING BALANCE</h2>
        </div>
        <BalanceGraph />
      </div>
    </div>{/* end of row*/}

    <hr/>

    <div className="update-button" >
        <button class="button" onClick={this.buttonClick}>UPDATE PROJECT STATUS</button>
    </div>
    
</div>{/* end of container*/}
</div>
);

export default Expenses;
