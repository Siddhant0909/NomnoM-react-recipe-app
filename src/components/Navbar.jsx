import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";


const Navbar = () => {
  const[query,setQuery]=useState('')

  const navigate=useNavigate()

  const dosomething=(e)=>{
    e.preventDefault()
    navigate(`/search/${query}`)
  }
  return (
    <div className='bg-[#313131] text-white h-14 fixed top-0 left-0 right-0 flex justify-center p-2 w-full'>
        <form className='flex w-full items-center gap-2 bg-[#474747b6] px-2 rounded-full'
        onSubmit={dosomething}>
          <FaMagnifyingGlass/>
          <input
          className='flex-1 outline-none bg-transparent'
          placeholder='Search your favourite recipes'
          type="text"
          value={query}
          onChange={e=>setQuery(e.target.value)}
          />
        </form>
    </div>
  )
}

export default Navbar