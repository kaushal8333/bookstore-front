import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.post('https://bookstore-mern-xyqb.onrender.com/books', data)
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
      <h1 className='text-3xl m-4'>Create Book</h1>
      <div className='flex flex-col w-1/2 justify-center m-auto bg-slate-300 rounded-xl p-4'>
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
          <button type="submit" className='border border-slate-600 rounded px-2 py-1 hover:bg-black hover:text-slate-300 transition-all duration-500' onClick={handleSaveBook}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CreateBooks