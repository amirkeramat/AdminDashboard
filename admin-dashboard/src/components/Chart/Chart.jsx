import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";
import './Chart.css'
const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%'  aspect={4}>
        <LineChart
          width={600}
          height={100}
          data={data}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#ccc' strokeDasharray='5 5' /> }
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
