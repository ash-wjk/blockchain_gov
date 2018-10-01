import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend  } from 'recharts';

const testData = [
  {name: 'Page A', pv: 2400, amt: 2400},
  {name: 'Page B', pv: 1398, amt: 2210},
  {name: 'Page C', pv: 9800, amt: 2290},
  {name: 'Page D', pv: 3908, amt: 2000},
  {name: 'Page E', pv: 4800, amt: 2181},
  {name: 'Page F', pv: 3800, amt: 2500},
  {name: 'Page G', pv: 4300, amt: 2100},
];

class ProjectExpensesGraph extends Component{
  render () {
    const { data } = this.props;
    return (
      <div className="chart-1">
      <LineChart width={550} height={420} data={data}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#0C93DD" activeDot={{r: 8}}/>

      </LineChart>
      </div>
    );
  }
}

export default ProjectExpensesGraph;
