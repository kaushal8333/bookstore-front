import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

const ShowBook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://bookstore-mern-xyqb.onrender.com/books/${id}`)
      .then((response) => {
        setBooks(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? <Spinner />
        : (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className="my-4">
              <span className='text-xl mr-4 text-gray-500'>ID</span>
              <span>{books._id}</span>
            </div>
            <div className="my-4">
              <span className='text-xl mr-4 text-gray-500'>Title</span>
              <span>{books.title}</span>
            </div>
            <div className="my-4">
              <span className='text-xl mr-4 text-gray-500'>Author</span>
              <span>{books.author}</span>
            </div>
            <div className="my-4">
              <span className='text-xl mr-4 text-gray-500'>Published Year</span>
              <span>{books.publishYear}</span>
            </div>
          </div>
        )}
    </div>
  )
}

export default ShowBook