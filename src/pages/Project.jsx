import React from 'react'
import Header from '../Component/Header'
import './Project.css'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'


function Project() {
  
  return (
    <>
   <Header/>
   <div className='ProjectHead'>
    
  
      <div className='proj1'>
      <NavLink to='/Project/TodoList' ><i className="bi bi-list-task"></i>Todo List</NavLink>
      </div>
    
   

   </div>
     
    
    </>
  )
}

export default Project