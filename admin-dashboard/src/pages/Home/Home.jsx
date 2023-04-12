import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import './Home.css'
import xAxisData from '../../datas'
const Home = () => {
  return <div className="home pe-10">
    <Features/>
    <Chart grid title={'Month sale'} data={xAxisData} dataKey='sales'/>
  </div>
};

export default Home;
