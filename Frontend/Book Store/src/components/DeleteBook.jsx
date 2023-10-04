import axios from 'axios'
import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
function DeleteBook() {
const { id } = useParams()
const navigate = useNavigate()
const handleDelete = () => {
  axios.delete(`http://localhost:3000/books/${id}`)
  .then(() => {
    navigate('/')
  }).catch((err)=> {
    console.log(err)
  })
}
const handleCancel =()=>{
  navigate('/')
}
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h1>Are you sure you want this delete this book?</h1>
      <div className='flex flex-row space-x-4 py-5'>
        <button onClick={handleDelete} className='bg-red-500 text-white px-3 py-1'>Delete</button>
        <button onClick={handleCancel} className='bg-green-500 text-white px-3 py-1'>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteBook