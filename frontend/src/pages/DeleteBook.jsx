import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const DeleteBook = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const [loading,setLoading]=useState(true);
  function handleDeleteBook(){
    axios.delete(`https://bookstore-mern-xyqb.onrender.com/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false)
    })
  }
  return (
    <div className='p-4'>
      <h1 className='text-3xl m-4'>Delete Book</h1>
      <div className='flex flex-col justify-center'>
        <h3 className='m-4 text-xl text-center'>Are you sure you want to delete the item?</h3>
        <button onClick={handleDeleteBook} className='p-2 bg-red-500 w-1/6 m-auto rounded text-white'>Delete Book</button>
        <button onClick={()=>navigate('/')} className='p-2 bg-blue-400 my-4 rounded w-1/6 m-auto'>No</button>  
      </div>  
    </div>
  )
}

export default DeleteBook