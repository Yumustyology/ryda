import React from 'react'
import Logo from '../assets/RYDA.png'
import '../styles/Navbar.css'
import {BsPlayCircle} from 'react-icons/bs'
function Navbar() {
  return (
    <div className='flex justify-between pt-3'>
        <img src={Logo} className="h-5" />
        <ul className='inline-flex top-nav-list'>
            <li>Home</li>
            <li>Features</li>
            <li>About Us</li>
        </ul>

        <div>
            <button className='py-3 px-3 text-white text-[18px] bg-[#055FFD] text-sm rounded-md'> <BsPlayCircle/> Check Demo</button>
        </div>
    </div>
  )
}

export default Navbar