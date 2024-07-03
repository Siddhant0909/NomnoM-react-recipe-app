import React, { useEffect, useRef, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";



const SearchNav = () => {
  const inputRef=useRef()
  const[query,setQuery]=useState('')

  const navigate=useNavigate()

  const dosomething=(e)=>{
    e.preventDefault()
    navigate(`/search/${query}`)
    setQuery('')
    inputRef?.current.blur()
  }
  useEffect(()=>{inputRef?.current.focus()},[])
  return (
    <div className='bg-[#313131] text-white h-14 fixed top-0 left-0 right-0 flex justify-center p-2 w-full items-center gap-2 sm:hidden'>
        <Link to='/'>
          <IoMdArrowRoundBack className='text-xl bg-[#474747b6] h-[36px] w-[36px] p-2 rounded-full'/>
        </Link>
        <form className='flex w-full items-center gap-2 bg-[#474747b6] px-2 rounded-full py-2'
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
    </div>
  )
}

export default SearchNav