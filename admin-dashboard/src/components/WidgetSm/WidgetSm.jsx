import React from "react";
import "./WidgetsSm.css";
import { VisibilityIcon } from "../../icons";
import { newUsers } from "../../datas";
const WidgetSm = () => {
  return (
    <div className='widgetSm-Container flex flex-col space-y-2 mt-5 p-2 flex-1'>
      <span className='text-xl font-bold '>New Joined Members</span>
      <ul className='widgetSmItems space-y-4'>
        {newUsers.map((newUser) => (
          <li
            key={newUser.id}
            className='widgetSmItem flex flex-col sm:flex-row sm:justify-between sm:items-center justify-between items-start shadow p-2 cursor-pointer hover:-translate-y-2 hover:bg-slate-200 transition-all rounded'>
            <img
              title={newUser.username}
              src='/images/about-me.jpg'
              alt='userImg'
              className='w-[40px] h-[40px] rounded-full object-cover cursor-pointer '
            />
            <div className='widgetSmUser flex flex-col justify-start items-start w-[150px]'>
              <span className='smUserName text-slate-900 text-lg font-semibold'>
                {newUser.username}
              </span>
              <span className='smJob text-slate-500 text-sm'>
                {newUser.Job}
              </span>
            </div>
            <button>
              <VisibilityIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
