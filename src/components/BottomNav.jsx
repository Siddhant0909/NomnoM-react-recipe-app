import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHamburger,FaBookmark,FaHome } from "react-icons/fa";


const BottomNav = () => {
  return (
    <div className='bg-[#313131] text-white h-14 fixed bottom-0 left-0 right-0 flex justify-center p-2 w-full sm:hidden'>
      <div className='flex w-full items-center mx-11  justify-between'>
        <NavLink to="/recipes" className={({isActive})=>`flex flex-col items-center gap-0.5 ${isActive?'text-red-600':'text-white'}`}>
          <FaHamburger />
          <h5 className='text-sm'>  Recipes</h5>
        </NavLink>
        <NavLink to="/" className={({isActive})=>`flex flex-col items-center gap-0.5 ${isActive?'text-red-600':'text-white'}`}>
          <i className="fa-solid fa-house"></i>
          <h5 className='text-sm'>Home</h5></NavLink>
        <NavLink to="/saved" className={({isActive})=>`flex flex-col items-center gap-0.5 ${isActive?'text-red-600':'text-white'}`}>
          <FaBookmark />
          <h5 className='text-sm'>Saved</h5>
        </NavLink>
      </div>
    </div>
  )
}

export default BottomNav