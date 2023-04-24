import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useGetData from "../../hooks/useGetData";
import loadingLogo from "/images/Infinity-1s-200px.svg";


const Products = () => {
  const  [productsData, setProductsData ] = useGetData("products",[]);
  // useEffect(() => {
  //   const sendData = async () => {
  //     const { data, error } = await supabase
  //       .from("products")
  //       .insert(productsData);
  //     if (error) {
  //       console.log(error);
  //     }
  //   };
  //   sendData();
  // }, [productsData]);

  const productDelete = (productID) => {
    setProductsData(
      productsData.filter((product) => product.user_id != productID)
    );
  };

  const columns = [
    {
      field: "user_id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.user_id}`} className='link'>
            <div className='userListUser flex items-center'>
              <img
                src={params.row.avatar}
                className='userListImg w-[40px] h-[40px] rounded-full me-2'
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to={`/product/${params.row.user_id}`} className='link'>
              <button className='px-3 py-1 bg-green-400 rounded'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='text-red-400 cursor-pointer'
              onClick={() => productDelete(params.row.user_id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className='flex-[4] w-full'>
      {productsData && (
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={productsData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 3,
                },
              },
            }}
            checkboxSelection
          />
        </Box>
      )}
      {productsData === null && (
        <div className='flex justify-center items-center flex-[4]'>
          <img src={loadingLogo} alt='' className='w-[100px] h-[100px]' />
          <h1 className='text-2xl text-sky-500'>Loading Please Waite...</h1>
        </div>
      )}
    </div>
  );
};

export default Products;
