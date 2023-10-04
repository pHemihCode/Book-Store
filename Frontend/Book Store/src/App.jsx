import React from 'react'
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import CreateBook from './components/CreateBook'
import DeleteBook from './components/DeleteBook'
import Page from './components/Page'
import ReadBook from './components/ReadBook'
import UpdateBook from './components/UpdateBook'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Page />} />
      <Route path='/create' element={<CreateBook />} />
      <Route path='/read/:id' element={<ReadBook />} />
      <Route path='/update/:id' element={<UpdateBook />} />
      <Route path='/delete/:id' element={<DeleteBook />} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router}/>
}

export default App