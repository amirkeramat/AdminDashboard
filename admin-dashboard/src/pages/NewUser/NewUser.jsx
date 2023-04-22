import React, { useState, useEffect, useRef } from "react";
import "./NewUser.css";
import supabase from "../../config/supabaseClient";
import useGetData from "../../hooks/useGetData";
import loadingLogo from "/images/Infinity-1s-200px.svg";
const NewUser = () => {
  const [userDatas, setUserDatas] = useGetData("users");
  const [showModal, setShowModal] = useState(false);
  const SuccessModal = () => {
    return (
      <div
        className={`modal fixed top-[100px]  w-[400px] h-[100px] bg-gray-100 border border-green-400 text-3xl rounded-2xl flex flex-col justify-center items-center transition-all -right-[10000px] text-gray-900 ${
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
      user_id: userDatas.length + 1,
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
        console.log("s");
        setShowModal(true);
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
    <div className='flex-[4]'>
      {showModal && <SuccessModal />}
      {userDatas ? (
        <div className='formContainer'>
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
        <div className='flex justify-center items-center flex-[4]'>
          <img src={loadingLogo} alt='' />
          <h1 className='text-3xl text-sky-500'>Loading Please Waite...</h1>
        </div>
      )}
    </div>
  );
};

export default NewUser;
