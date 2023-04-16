import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { userRows } from "../../datas";
import { Link } from "react-router-dom";
import { DeleteOutlineIcon } from "../../icons";
const Users = () => {
  const [userDatas, setUserDatas] = useState(userRows);
  const columns = [
    { field: "id", headerName: "ID", width:5 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`}>
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
            <Link to={`/user/${params.row.id}`}>
            <button className='px-3 py-1 bg-green-400 rounded'>Edit</button>
            </Link>
            
            <DeleteOutlineIcon onClick={()=>userDelete(params.row.id)} className='text-red-400 cursor-pointer' />
          </div>
        );
      },
    },
  ];
  const userDelete = userId =>{
    setUserDatas(userDatas.filter(user=>user.id != userId ))
  }
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize:2,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Users;
