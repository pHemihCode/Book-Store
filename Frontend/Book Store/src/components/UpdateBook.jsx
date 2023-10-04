import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Link} from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateBook() {
  const [ details, setDetails] = useState({title: '', author:'', year:''});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`)
    .then(res => {
      console.log(res.data)
      setDetails({title:res.data.title, author:res.data.author, year:res.data.publishedYear})
    }).catch(error =>{
      console.log(error)
    })
  },[])
  const handleEditBook =()=>{
    const data = {
      title:details.title,
      author:details.author,
      publishedYear:details.year
    };
    axios.put(`http://localhost:3000/books/${id}`, data)
    .then(() => {
      navigate('/')
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='flex justify-center mt-10'>
    <div className='flex flex-col w-1/4 p-4 border-2 rounded-sm'>
      <div className="the-input flex flex-col">
        <label htmlFor="title">Title</label>
        <input type="text" value={details.title} onChange={e => setDetails({...details, title:e.target.value})} className='border-2 rounded-sm px-2 py-1 outline-none' />
    </div>
    <div className="the-input flex flex-col my-2">
        <label htmlFor="author">Author</label>
        <input type="text" value={details.author} onChange={e => setDetails({...details, author:e.target.value})}  className='border-2 rounded-sm px-2 py-1 outline-none' />
    </div>
    <div className="the-input flex flex-col my-2">
        <label htmlFor="author">Published Year</label>
        <input type="text" value={details.year} onChange={e => setDetails({...details, year:e.target.value})}  className='border-2 rounded-sm px-2 py-1 outline-none' />
    </div>
      <button className='bg-blue-500 px-3 py-1 text-white rounded-md' onClick={handleEditBook}>Update book</button>
      
</div>
</div>
  )
}

export default UpdateBook