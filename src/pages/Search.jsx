import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchNav from '../components/SearchNav'
const Search = () => {
  return (
    <>
    <SearchNav />
    <Outlet />
    </>
  )
}

export default Search