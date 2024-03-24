import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`https://bookstore-mern-xyqb.onrender.com/books/${id}`)
    .then((response)=>{
      setAuthor(response.data.author),
      setTitle(response.data.title),
      setPublishYear(response.data.publishYear),
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error);
    })

  },[])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }
  return (
    <div className='p-4'>
      <h1>Edit Book</h1>
      <div className='flex flex-col w-1/2 justify-center'>
        <div className='flex my-4'>
          <span className='mx-10 my-auto'>Title</span>
          <input type="text" className='border p-1 border-slate-600 m-auto rounded' placeholder='Enter title' onChange={(event)=>setTitle(event.target.value)} />
        </div>
        <div className='flex my-4'>
          <span className='mx-10'>Author</span>
          <input type="text" className='border p-1 border-slate-600 m-auto rounded' placeholder='Enter author' onChange={(event)=>setAuthor(event.target.value)} />
        </div>
        <div className='flex my-4'>
          <span className='m-auto'>Publish Year</span>
          <input type="text" className='border p-1 border-slate-600 m-auto rounded' placeholder='Enter Publish Year' onChange={(event)=>setPublishYear(event.target.value)}/>
        </div>
        <div className='flex justify-center items-center my-10'>
          <button type="submit" className='border border-slate-600 rounded px-2 py-1 hover:bg-black hover:text-slate-300 transition-all duration-500' onClick={handleEditBook}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default EditBook;