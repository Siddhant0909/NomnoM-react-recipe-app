import React from 'react'
import CategoryCard from './CategoryCard'
import { Link } from 'react-router-dom'

const HealthLabel = () => {
  return (
    <>
    <h2 className='text-xl font-bold mb-2'>Health</h2>
    <div className='flex gap-4 overflow-x-scroll mb-4'>
      <Link to='/health/keto-friendly'><CategoryCard cuisine='Keto Friendly'/></Link>
      <Link to='/health/dairy-free'><CategoryCard cuisine='Dairy Free'/></Link>
      <Link to='/health/vegetarian'><CategoryCard cuisine='Vegetarian'/></Link>
      <Link to='/health/vegan'><CategoryCard cuisine='Vegan'/></Link>
      <Link to='/health/kosher'><CategoryCard cuisine='Kosher'/></Link>
      <Link to='/health/low-sugar'><CategoryCard cuisine='Low Sugar'/></Link>
    </div>
    </>
  )
}

export default HealthLabel