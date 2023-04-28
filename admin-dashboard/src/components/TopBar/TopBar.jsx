import React, {useContext} from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { ToggleContext } from "../../Context/Toggle";
import { MenuIcon ,CloseIcon } from "../../icons";
const TopBar = () => {
    const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <div className='top-bar z-20 w-full h-[50px] sticky top-0  bg-gray-800 bg-opacity-20 '>
      <div
        onClick={() => setToggle((prv) => !prv)}
        className=' fixed bg-gray-500 bg-opacity-5 z-50   top-0  h-[50px] flex items-center cursor-pointer lg:hidden'>
        {!toggle ? (
          <MenuIcon className=' text-gray-900' />
        ) : (
          <CloseIcon className='text-gray-900' />
        )}
      </div>
      <div className='topBar-wrapper h-full py-0 px-[20px] flex justify-between items-center '>
        <div className='top-left ms-1'>
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
