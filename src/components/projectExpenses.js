import React from 'react';
import ExpensePrecentageGraph from './expencePrecentage'
import ProjectExpensesGraph from './projectExpensesGraph'
import BalanceGraph from './balanceGraph'

import '../styles/main.css';
import '../styles/largescreen.css';

const Expenses = ({project}) => (
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
              <h2>{`£${project.budget}`}</h2>
              <p>Budget</p>
            </th>
            <th scope="col">
            <h2>{`£${project.totalExpences}`}</h2>
            <p>Total Expenses</p>
            </th>
          </tr>
        </table>
      </div>

      <div className="col-2">
        <div className="circleChart">
          <ExpensePrecentageGraph fillValue={project.expencesPrecentage}/>
          <div className="icon">{`${project.expencesPrecentage}%`}</div>
        </div>
      </div>

      <div className="col-5">
          <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <h2>{`£${project.remainingBudget}`}</h2>
                <p>Remaining Budget</p>
              </th>
              <th scope="col">
                <h2>{`${project.remainingBudgetPrecentage.toFixed(2)}%`}</h2>
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
        <ProjectExpensesGraph data={project.expensesGraphData}/>
      </div>

      <div className="col-6">
        <div className="page-border expence-title">
          <h2>REMAINING BALANCE</h2>
        </div>
        <BalanceGraph data={project.remainingBudgetGraphData}/>
      </div>
    </div>{/* end of row*/}
    
</div>{/* end of container*/}
</div>
);

export default Expenses;
