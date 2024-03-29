"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const notify=()=>{
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }
  return (
    <>
     <button 
     onClick={notify}
     className='bg-blue-400 p-5 rounded-xl text-4xl'>Login</button>
     <ToastContainer/>
    </>
  )
}

export default page