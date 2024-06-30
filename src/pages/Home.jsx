import React from 'react'
import Navbar from "../components/Navbar"
import BottomNav from "../components/BottomNav"
import Banner from '../components/Banner'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <>
      <div className='flex flex-col justify-between h-fit mt-11 gap-4'>
        <Banner />
        <Popular />
      </div>
    </>
  )
}

export default Home