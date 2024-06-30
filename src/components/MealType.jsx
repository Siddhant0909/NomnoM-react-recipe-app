import React from 'react'
import CategoryCard from './CategoryCard'

const MealType = () => {
  return (
    <>
    <h2 className='text-xl font-bold mb-2'>Meals</h2>
    <div className='flex gap-4 overflow-x-scroll mb-4'>
      <CategoryCard cuisine='Breakfast'/>
      <CategoryCard cuisine='Brunch'/>
      <CategoryCard cuisine='Lunch/dinner'/>
      <CategoryCard cuisine='Snack'/>
      <CategoryCard cuisine='Teatime'/>
    </div>
    </>
  )
}

export default MealType