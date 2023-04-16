import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
const TopBar = () => {
  return (
    <div className='top-bar w-full h-[50px] sticky top-0 z-50 bg-gray-800 bg-opacity-20 '>
        
      <div className='topBar-wrapper h-full py-0 px-[20px] flex justify-between items-center '>

        <div className='top-left'>
          <span className='logo text-[30px] font-bold cursor-pointer text-sky-900'>
            BlueBee
          </span>
        </div>

        <div className='top-right flex items-center'>
          <div className='topBarIconContainer relative cursor-pointer mr-[10px] text-[#555] '>
            <NotificationsIcon fontSize='large' />
            <span className='topIconBadge w-[15px] h-[15px] absolute -top-[5px] right-0 bg-red-500 text-white flex items-center justify-center text-[10px] rounded-[50px] '>
              2
            </span>
          </div>

          <div className='topBarIconContainer relative cursor-pointer mr-[10px] text-[#555] flex items-center '>
            <LanguageIcon fontSize='large' />
            <span className='topIconBadge w-[15px] h-[15px] absolute -top-[5px] right-0 bg-red-500 text-white flex items-center justify-center text-[10px] rounded-[50px] '>
              2
            </span>
          </div>

          <div className='topBarIconContainer relative cursor-pointer mr-[10px] text-[#555] flex items-center '>
            <SettingsIcon fontSize='large' />
          </div>

          <img
            src='images/about-me.jpg'
            alt=''
            className='topAvatar w-[40px] h-[40px] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
