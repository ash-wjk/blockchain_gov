import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend  } from 'recharts';


const testData = [
  {name: 'Jul',pv: 6400, amt: 2400},
  {name: 'Jun',pv: 5398, amt: 2210},
  {name: 'May',pv: 4800, amt: 2290},
  {name: 'Apr',pv: 3908, amt: 2000},
  {name: 'Mar',pv: 3800, amt: 3800},
  {name: 'Feb',pv: 2400, amt: 2400},
  {name: 'Jan',pv: 1398, amt: 1398},
];


class ProgressGraph extends Component{
  render () {
      const { data } = this.props;
      return (

        <LineChart  width={550} height={300} data={data}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="name" padding={{left: 0, right: 30}}/>
         <YAxis/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#0C93DD" activeDot={{r: 8}}/>

        </LineChart>

        );
    }
  }


export default ProgressGraph;
