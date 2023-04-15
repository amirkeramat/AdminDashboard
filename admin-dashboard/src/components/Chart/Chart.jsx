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
    <div className="flex flex-1 items-start justify-center h-[300px] w-full">
       <div className='chart w-full h-full max-h-[300px] p-1  m-auto'>
      <ResponsiveContainer width='100%' height='100%' >
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
    </div>
   
  );
};

export default Chart;
