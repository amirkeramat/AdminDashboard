import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { products } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Products = () => {
  const [productsData, setProductsData] = useState(products);

  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id != productID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className='link'>
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
            <Link to={`/product/${params.row.id}`} className='link'>
              <button className='px-3 py-1 bg-green-400 rounded'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='text-red-400 cursor-pointer'
              onClick={() => productDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
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
  );
};

export default Products;
