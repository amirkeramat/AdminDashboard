import React from "react";
import "./Features.css";
import { ArrowDownwardIcon, ArrowUpwardIcon } from "../../icons";
const Features = () => {
  return (
    <div className='features flex items-start'>
      <div className='featuresContainer flex justify-between flex-wrap w-full'>
        <div className='featureItem'>
          <span className='featureTitle'>Revenue</span>
          <div className='featurePrice'>
            <span className='featureMoney'>$2,415</span>
            <span className='featureRate'>
              -11.4
              <ArrowDownwardIcon className="featureIcon negative" />
            </span>
          </div>
          <span className='featureSub'>Compered to the last month</span>
        </div>

        <div className='featureItem'>
          <span className='featureTitle'>Sales</span>
          <div className='featurePrice'>
            <span className='featureMoney'>$4,415</span>
            <span className='featureRate'>
              -11.4
              <ArrowDownwardIcon className="featureIcon negative" />
            </span>
          </div>
          <span className='featureSub'>Compered to the last month</span>
        </div>

        <div className='featureItem'>
          <span className='featureTitle'>Cost</span>
          <div className='featurePrice'>
            <span className='featureMoney'>$2,225</span>
            <span className='featureRate'>
              +2.4
              <ArrowUpwardIcon className="featureIcon" />
            </span>
          </div>
          <span className='featureSub'>Compered to the last month</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
