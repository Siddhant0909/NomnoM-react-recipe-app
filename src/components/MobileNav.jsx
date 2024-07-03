import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";


const MobileNav = () => {
  const[query,setQuery]=useState('')

  const navigate=useNavigate()

  const dosomething=(e)=>{
    e.preventDefault()
    navigate(`/search/${query}`)
    setQuery('')
  }
  return (
    <div className='bg-[#313131] text-white h-14 fixed top-0 left-0 right-0 flex justify-center p-2 w-full sm:hidden'>
      <Link
      to='/search' 
      className='flex w-full items-center gap-2 bg-[#474747b6] px-2 rounded-full'>
        <form className='flex w-full items-center gap-2 rounded-full cursor-pointer'
        onSubmit={dosomething}>
          <FaMagnifyingGlass/>
          <input
          className='flex-1 outline-none bg-transparent cursor-pointer'
          placeholder='Search your favourite recipes'
          type="text"
          value={query}
          readOnly
          onChange={e=>setQuery(e.target.value)}
          />
        </form>
      </Link>
    </div>
  )
}

export default MobileNav