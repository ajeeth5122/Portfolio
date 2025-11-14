import React from 'react'
import Header from '../Component/Header'
import './Project.css'
import { Navigate, useNavigate } from 'react-router-dom'


function Project() {
  
  return (
    <>
   <Header/>
   <div className='ProjectHead'>
    
  
      <div className='proj1'>
      <h1 ><i className="bi bi-list-task"></i>Todo List</h1>
      </div>
    
   

   </div>
     
    
    </>
  )
}

export default Project