
import React, { Component } from 'react';
import { PieChart, Pie, Legend, Sector, Cell } from 'recharts';


const data = [{name: 'name', value: 21}, {name: 'other', value: 79}];
const COLORS = ['#0C93DD', '#ededed'];

class ExpenceGraph extends Component{

	render () {
    const { fillValue } = this.props;
  	return (
    	<PieChart width={170} height={175}>
        <Pie
          data={data}
          cx={85}
          cy={85}

          innerRadius={60}
          outerRadius={81}
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

export default ExpenceGraph;
