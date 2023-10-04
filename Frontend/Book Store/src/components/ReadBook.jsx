import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ReadBook() {
  const [book, setBook] = useState({})
    const { id } = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/books/${id}`)
        .then(res => {
            // console.log(res.data)
            setBook(res.data)
        }).catch(error => {
          console.log(error)
        })
    },[])
  return (
    <div>
      <h1>Book Details</h1>
      <div>
       <div className='flex flex-row space-x-6'>
         <h1>ID</h1>: <span>{book._id}</span>
       </div>
       <div className='flex flex-row space-x-6'>
         <h1>Title</h1>: <span>{book.title}</span>
       </div>
       <div className='flex flex-row space-x-6'>
         <h1>Author</h1>: <span>{book.author}</span>
       </div>
       <div className='flex flex-row space-x-6'>
         <h1>Published Year</h1>: <span>{book.publishedYear}</span>
       </div>
       <div className='flex flex-row space-x-6'>
         <h1>Updated At</h1>: <span>{book.updatedAt}</span>
       </div>
      </div>
      <Link to='/'>
        <button className='mx-auto px-3 py-1 text-white bg-blue-500'>Back</button>
      </Link>
    </div>
  )
}

export default ReadBook