import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet, Link,useParams } from 'react-router-dom'
import TimeAgo from './TimeStamp'
function Page() {
  const [books, setBooks] = useState([])
  const fetData = async()=>{
    try {
      const response = await axios.get('http://localhost:3000/books')
      const data = await response.data.data;
      // console.log(response.data.data)
      return setBooks(data)  
    } catch (error) {
      console.log(error)    
    }
  }
  useEffect(()=>{
    fetData()
  },[])

  return (
    <div>
       <div className='my-10'>
            <div className='flex justify-end'>
              <button className='bg-blue-500 px-3 py-1 text-white rounded-md mx-10'>
                <Link to='/create'>Create</Link>
              </button>
            </div>
            <div className='grid grid-cols-3 gap-5 px-10 py-3'>
            {
                books.map((book) => (
                <div key={book._id} className='border-2 rounded-md p-5'>
                    <h1 className='font-bold text-2xl truncate'>{book.title}</h1>
                    <p className='italic my-1'> by {book.author}</p>
                    <TimeAgo timestamp={book.createdAt}/>
                    <div className='flex space-x-4 my-2'>
                    <Link to={`/update/${book._id}`}>
                     <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>Update</button>
                    </Link>
                    <Link to={`/read/${book._id}`}>
                      <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>Read</button>
                    </Link>
                    <Link to={`/delete/${book._id}`}>
                      <button className='bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>
                    </Link>
                    </div>
                </div>     
                ))
            }
            </div>
       </div>
       <Outlet />
    </div>
  )
}

export default Page