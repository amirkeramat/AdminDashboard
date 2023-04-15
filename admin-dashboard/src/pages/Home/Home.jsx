import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import './Home.css'
import {xAxisData} from '../../datas'
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
const Home = () => {
  return <div className="home px-5 flex-[4] w-full">
    <Features/>
    <Chart grid title={'Month sale'} data={xAxisData} dataKey='sales'/>
    <div className="homeWidgets flex flex-col sm:flex-row  justify-between">
        <WidgetSm/>
        <WidgetLg/>
    </div>
  </div>
};

export default Home;
