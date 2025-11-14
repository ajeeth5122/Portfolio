import React, { useState } from 'react'
import Header from '../Component/Header'

function Contact() {

  const [userdata,setUserdata]= useState({
    username : "",
    userEmail :"",
    message :""
  });

  const Handleclick=(e)=>{
    e.preventDefault()
    setUserdata({
    username : "",
    userEmail :"",
    message :""
    })
  }
  const Handlechange=(e)=>{
    setUserdata({...userdata,[e.target.name]:e.target.value})
    
  }

  return (
     <>
      <Header/>
      <div className='contact'>
        
      <form onSubmit={Handleclick}>
        <h1 className='C-title'>For Contact</h1>
        <input type="text" name='username' value={userdata.username} onChange={Handlechange} placeholder='Name'/>
        <input type="mail" name='userEmail' onChange={Handlechange}  value={userdata.userEmail} placeholder='E-Mail'/>
        <textarea name="message" value={userdata.message} placeholder='Enter Your Message' onChange={Handlechange}  id=""></textarea>
        <button type='submit' >Submit</button>
      </form>
      </div>
    
    </>
  )
}

export default Contact