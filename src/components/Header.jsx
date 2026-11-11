import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FaPlusSquare } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className='logo'>
          <FaPlusSquare />
          <Link to={"/"} className='logo-brand'>CareBook</Link>
        </div>
        <Navbar />
    </header>
  )
}

export default Header