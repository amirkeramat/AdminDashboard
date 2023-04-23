import React, { useState, useEffect, useRef, useMemo } from "react";
import "./NewUser.css";
import supabase from "../../config/supabaseClient";
import useGetData from "../../hooks/useGetData";
import loadingLogo from "/images/Infinity-1s-200px.svg";
const NewUser = () => {
  const [userDatas] = useGetData("users",[]);
  const [datas,setDatas] = useState([])
  const [isNewData,setIsNewData] = useState(null)
  const [UpdatedData] = useGetData('users',[isNewData])
  const [showModal, setShowModal] = useState(false);
  useEffect(()=>{
    setDatas(UpdatedData)
  },[UpdatedData])
  useEffect(()=>{
    setDatas(userDatas)
  },[])
  const SuccessModal = () => {
    return (
      <div
        className={`modal fixed top-[100px] md:w-[400px]   w-full h-[100px]  text-2xl rounded-2xl flex flex-col justify-center items-center transition-all -right-[10000px] text-gray-500 ${
          showModal && "showModal"
        }`}>
        <h1>Add User Successfully</h1>
        <div className='progressBar'>
          <div className='loading'></div>
        </div>
      </div>
    );
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const NewUser = {
      user_id: datas.length + 1,
      username: userUsername,
      password: userPassword,
      email: userEmail,
      job: userJob,
    };
    if (userUsername && userPassword && userEmail && userJob) {
      const { data, error } = await supabase.from("users").insert(NewUser);
      if (error) {
        console.log(error);
      } else {
        setShowModal(true);
        setIsNewData(NewUser)
        setTimeout(() => {
          setShowModal(false);
        }, 5000);
        clearInput();
      }
    } else {
      alert("please fill the inputs");
    }
  };
  const clearInput = () => {
    setUserUsername("");
    setUserPassword("");
    setUserEmail("");
    setUserAvatar("");
    setUserJob("");
  };
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userJob, setUserJob] = useState("");
  return (
    <>
      {showModal && <SuccessModal />}
      {datas ? (
        <div className='formContainer flex-[4]'>
          <form
            onSubmit={submitHandler}
            className='flex space-y-10 flex-wrap flex-auto'>
            <label>
              <span>UserName:</span>
              <input
                value={userUsername}
                onChange={(e) =>
                  e.target.value && setUserUsername(e.target.value)
                }
                type='text'
                name=''
                id=''
              />
            </label>
            <label>
              <span>Password:</span>
              <input
                type='text'
                name=''
                id=''
                value={userPassword}
                onChange={(e) =>
                  e.target.value && setUserPassword(e.target.value)
                }
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type='text'
                name=''
                id=''
                value={userEmail}
                onChange={(e) => e.target.value && setUserEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Job:</span>
              <select
                name=''
                id=''
                className='w-full'
                onChange={(e) => e.target.value && setUserJob(e.target.value)}>
                <option value='Select...' disabled>
                  Select...
                </option>
                <option value='Seo'>Seo</option>
                <option value='Full Stack developer'>
                  Full Stack developer
                </option>
                <option value='Hacker'>Hacker</option>
                <option value='BackEnd Developer'>BackEnd Developer</option>
                <option value='FrontEnd Developer'>FrontEnd Developer</option>
                <option value='Other'>Other</option>
              </select>
            </label>
            <div className='flex w-full'>
              <input
                type='submit'
                className=' bg-green-100  rounded cursor-pointer border border-green-500 text-xl w-full p-[10px]'
              />
              <input
                type='reset'
                className=' bg-red-100 rounded cursor-pointer border border-red-500 text-xl w-full p-[5px]'
              />
            </div>
          </form>
        </div>
      ) : (
        <div className='flex flex-[4] justify-center items-center'>
          <img src={loadingLogo} alt='' />
          <h1 className='text-3xl text-sky-500'>Loading Please Waite...</h1>
        </div>
      )}
    </>
  );
};

export default NewUser;
