import React from 'react'
import CategoryCard from './CategoryCard'
import { NavLink } from 'react-router-dom'

const Cuisinetype = () => {
  return (
    <>
    <h2 className='text-xl font-bold mb-2'>Cuisines</h2>
    <div className='cuisine-container flex gap-4 overflow-x-scroll mb-4'>
      <NavLink to={'/category/Indian'}>
        <CategoryCard cuisine='Indian'/>
      </NavLink>
      <NavLink to={'/category/American'}>
        <CategoryCard cuisine='American'/>
      </NavLink>
      <NavLink to={'/category/Italian'}>
        <CategoryCard cuisine='Italian'/>
      </NavLink>
      <NavLink to={'/category/Japanese'}>
        <CategoryCard cuisine='Japanese'/>
      </NavLink>
      <NavLink to={'/category/Chinese'}>
        <CategoryCard cuisine='Chinese'/>
      </NavLink>
      <NavLink to={'/category/Greek'}>
        <CategoryCard cuisine='Greek'/>
      </NavLink>
    </div>
    </>
  )
}

export default Cuisinetype