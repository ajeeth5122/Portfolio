import React from 'react'
import Header from '../Component/Header'
import Aj from '../assets/Ajeeth.jpg'

function Home() {
  return (
    <>
    <Header/>
    <div className='main'>
      <div className='Pro-Image'>
        <img src={Aj} alt="" />
     </div>
     
    <div className='title'>
          <h1>Ajeeth A</h1>
          <h3><span>F</span>rontEnd Developer</h3>
          <p>Software Development</p>
     </div>
       
        
      
      
    </div>
    
    </>
  )
}

export default Home