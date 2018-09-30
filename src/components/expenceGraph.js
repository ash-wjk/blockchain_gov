
import React, { Component } from 'react';
import { PieChart, Pie, Legend, Sector, Cell } from 'recharts';



const COLORS = ['#0C93DD', '#ededed'];

class ExpenceGraph extends Component{

	render () {
    const { fillValue } = this.props;
    const data = [{name: 'name', value: fillValue}, {name: 'other', value: 100-fillValue}];
   
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
