import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/MobileNav'
import BottomNav from '../components/BottomNav'

const Meals = () => {
  return (
    <>
    <MobileNav />
    <Outlet/>
    <BottomNav />
    </>
  )
}

export default Meals