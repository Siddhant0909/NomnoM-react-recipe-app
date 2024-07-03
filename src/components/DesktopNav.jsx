import React, { useState,useRef } from 'react'
import { useNavigate,NavLink,Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";


const DesktopNav = () => {
  const[query,setQuery]=useState('')
  const inputRef=useRef()

  const navigate=useNavigate()

  const dosomething=(e)=>{
    e.preventDefault()
    navigate(`/search/${query}`)
    setQuery('')
    inputRef?.current.blur()
  }
  return (
    <div className='bg-[#313131] text-white h-14 fixed top-0 left-0 right-0 hidden justify-between py-2 px-3 w-full items-center  sm:flex'>
      <div className='flex w-full justify-between items-center lg:w-[80%] lg:m-auto'>
                {/* Logo */}
                <Link to='/'>
          <h1 className='text-2xl font-bold text-red-600'>NomnoM</h1>
        </Link>
        {/* Search */}
        <form className='flex flex-1 mx-4 items-center gap-2 rounded-full bg-[#474747b6] p-2'
        onSubmit={dosomething}>
          <FaMagnifyingGlass/>
          <input
          className='flex-1 outline-none bg-transparent'
          placeholder='Search your favourite recipes'
          type="text"
          ref={inputRef}
          value={query}
          onChange={e=>setQuery(e.target.value)}
          />
        </form>
        {/* Links */}
        <div className='flex gap-2'>
          <NavLink  
          className={({isActive})=>`font-semibold ${isActive?'text-red-700':'text-white'}`}
          to='/'><h3>Home</h3></NavLink>
          <NavLink 
className={({isActive})=>`font-semibold ${isActive?'text-red-700':'text-white'}`}
          to='/recipes'><h3>Recipes</h3></NavLink>
          <NavLink 
            className={({isActive})=>`font-semibold ${isActive?'text-red-700':'text-white'}`}
          to='/saved'><h3>Saved</h3></NavLink>
        </div>
      </div>

    </div>
  )
}

export default DesktopNav