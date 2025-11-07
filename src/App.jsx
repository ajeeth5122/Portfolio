import React from 'react'
import Header from './Component/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import CardFrame from './Frames/CardFrame'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/Home' element={ <Home/> } />
          <Route path='/About' element={ <About/> } />
           <Route path='/Project' element={<Project/>} />
            <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
    
  )
}

export default App