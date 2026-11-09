import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav-links'>
        <div>
            <Link to={""} className='Link'>Find a Doctor</Link>
            <Link to={""} className='Link'>Specialties</Link>
            <Link to={""} className='Link'>How it works</Link>
            <Link to={""} className='Link'>For Doctors</Link>
        </div>
        <div>
            <Link to={"/login"} className='Link auth-btn'>Log In</Link>
            <Link to={"/register"} className='Link reg-btn'>Create Account</Link>
        </div>
    </nav>
  )
}

export default Navbar