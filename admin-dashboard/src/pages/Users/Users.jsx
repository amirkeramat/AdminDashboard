import React, { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { DeleteOutlineIcon } from "../../icons";
import useGetData from "../../hooks/useGetData";
import loadingLogo from "/images/Infinity-1s-200px.svg";
const Users = () => {
  const [userDatas, setUserDatas] = useGetData('users');

  const columns = [
    { field: "user_id", headerName: "ID", width:5 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.user_id}`}>
            <div className='flex items-center'>
              <img
                src={params.row.avatar}
                className='w-[40px] h-[40px] rounded-full me-2'
              />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "transaction", headerName: "TransAction", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to={`/user/${params.row.user_id}`}>
            <button className='px-3 py-1 bg-green-400 rounded'>Edit</button>
            </Link>
            
            <DeleteOutlineIcon onClick={()=>userDelete(params.row.user_id)} className='text-red-400 cursor-pointer' />
          </div>
        );
      },
    },
  ];
  const userDelete = userId =>{
    setUserDatas(userDatas.filter(user=>user.user_id != userId ))
  }
  return (
    <>
      {userDatas && (
    <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
        rows={userDatas}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 2,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          />
          </Box>
      )}
      {userDatas === null && (
        <div className="flex justify-center items-center flex-[4]">
          <img src={loadingLogo} alt="" />
          <h1 className="text-3xl text-sky-500">Loading Please Waite...</h1>
        </div>
      )}
        </>
  );
};

export default Users;
