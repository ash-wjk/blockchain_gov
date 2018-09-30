import React, { Component } from 'react';
import { PieChart, Pie, Legend, Sector, Cell } from 'recharts';


const data = [{name: 'name', value: 21}, {name: 'other', value: 79}];
const COLORS = ['#0C93DD', '#ededed'];

class ExpensePrecentageGraph extends Component{

	render () {
  const { fillValue } = this.props;
  	return (
    	<PieChart width={130} height={155}>
        <Pie
          data={data}
          cx={65}
          cy={65}

          innerRadius={40}
          outerRadius={61}
          fill="#0C93DD"
          textAnchor='end'
          >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie>
       </PieChart>

    );
  }
}

export default ExpensePrecentageGraph;
