import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'

function Header() {
  return (
    <>
        <nav className='navbar'>
            <div className='logo'><img src={logo} width={"70px"} alt="" />
            <h3><span>A</span>jeeth A</h3>
            </div>
            <div className='Links'>
            {/* <a href="">Home</a>  
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a> */}

            <NavLink to="/Home">Home </NavLink>
            <NavLink to="/About">About </NavLink>
            <NavLink to="/Project" >Projects </NavLink>
            <NavLink to="/Contact">Contact </NavLink>
            </div>
            
        </nav>
    </>
  )
}

export default Header