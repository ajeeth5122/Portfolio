import React from 'react'
import Header from '../Component/Header'

function Contact() {
  return (
     <>
      <Header/>
      <div className='contact'>
        
      <form type='submit'>
        <h1 className='C-title'>For Contact</h1>
        <input type="text" placeholder='Name'/>
        <input type="mail" placeholder='E-Mail'/>
        <textarea name="text" placeholder='Enter Your Message' id=""></textarea>
        <button>Submit</button>
      </form>
      </div>
    
    </>
  )
}

export default Contact