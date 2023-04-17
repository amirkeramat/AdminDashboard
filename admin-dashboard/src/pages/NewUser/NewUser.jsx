import React, { useState } from "react";
import "./NewUser.css";
const NewUser = () => {
 
  const submitHandler = () => {
    const NewUser = {
      id:2,
      username: userUsername,
      password: userPassword,
      email:userEmail,
      job:userJob
    };
     fetch("https://admin-dashboard-cc9eb-default-rtdb.firebaseio.com/users", {
       method: "POST",
       body: JSON.stringify(),
     });
  };
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userJob, setUserJob] = useState("");
  return (
    <div className='flex-[4]'>
      <div className='formContainer'>
        <form
          onSubmit={submitHandler}
          className='flex space-y-10 flex-wrap flex-auto'>
          <label>
            <span>UserName:</span>
            <input
              value={userUsername}
              onChange={(e) => setUserUsername(e.target.value)}
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
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type='text'
              name=''
              id=''
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Job:</span>
            <select
              name=''
              id=''
              className='w-full'
              onChange={(e) => setUserJob(e.target.value)}>
              <option value='Select...' selected disabled>
                Select...
              </option>
              <option value='Seo'>Seo</option>
              <option value='Full Stack developer'>Full Stack developer</option>
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
    </div>
  );
};

export default NewUser;
