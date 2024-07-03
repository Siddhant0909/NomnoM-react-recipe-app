import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/MobileNav'
import BottomNav from '../components/BottomNav'

const Details = () => {
  return (
    <div>
      <MobileNav />
      <div className='flex flex-col justify-between h-fit mt-20 gap-4 px-4'>
        <Outlet />     
      </div>
      <BottomNav />
    </div>
  )
}

export default Details