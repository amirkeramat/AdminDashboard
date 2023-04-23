import React from 'react'
import './NewProduct.css'
const NewProduct = () => {
  return (
    <div className='flex-[4] flex justify-center items-center'>
      <div className='newProject-wrapper h-screen bg-gray-100'>
        <form className='flex flex-wrap space-y-10'>
          <label className='' htmlFor=''>
            <span>Product Name:</span>
            <input className='w-full p-2' type='text' />
          </label>
          <label className='' htmlFor=''>
            <span>Product Price:</span>
            <input className='w-full p-2' type='text' />
          </label>
          <label className='' htmlFor=''>
            <span>Product Image:</span>
            <input className='w-full p-2' type='file' />
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
}

export default NewProduct