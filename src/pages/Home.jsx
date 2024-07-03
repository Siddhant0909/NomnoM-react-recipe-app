import React from 'react'
import Navbar from "../components/MobileNav"
import BottomNav from "../components/BottomNav"
import Banner from '../components/Banner'
import Popular from '../components/Popular'
import MobileNav from '../components/MobileNav'

const Home = () => {
  return (
    <>
      <MobileNav />
      <div className='flex flex-col justify-between h-fit mt-20 gap-4 px-4'>
        <Banner />
        <Popular />
      </div>
      <BottomNav />
    </>
  )
}

export default Home