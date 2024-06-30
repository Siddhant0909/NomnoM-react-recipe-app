import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className='bg-[#313131] text-white h-14 fixed top-0 left-0 right-0 flex justify-center p-2 w-full'>
      <div className='flex w-full items-center gap-2 bg-[#474747b6] px-2 rounded-full'>
        <FaMagnifyingGlass/>
        <input
         className='flex-1 outline-none bg-transparent'
         placeholder='Search'
         type="text" />
      </div>
    </div>
  )
}

export default Navbar