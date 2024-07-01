import React from 'react'
import CategoryCard from './CategoryCard'
import { Link } from 'react-router-dom'

const MealType = () => {
  return (
    <>
    <h2 className='text-xl font-bold mb-2'>Meals</h2>
    <div className='flex gap-4 overflow-x-scroll mb-4'>
      <Link to='/meals/Breakfast'><CategoryCard cuisine='Breakfast'/></Link>
      <Link to='/meals/brunch'><CategoryCard cuisine='Brunch'/></Link>
      <Link to='/meals/snack'><CategoryCard cuisine='Snack'/></Link>
      <Link to='/meals/teatime'><CategoryCard cuisine='Teatime'/></Link>
     <Link to='/meals/dinner'><CategoryCard cuisine='Dinner'/></Link>
    </div>
    </>
  )
}

export default MealType