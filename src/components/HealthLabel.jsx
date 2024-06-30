import React from 'react'
import CategoryCard from './CategoryCard'

const HealthLabel = () => {
  return (
    <>
    <h2 className='text-xl font-bold mb-2'>Health</h2>
    <div className='flex gap-4 overflow-x-scroll mb-4'>
      <CategoryCard cuisine='Keto-Friendly'/>
      <CategoryCard cuisine='Dairy-Free'/>
      <CategoryCard cuisine='Vegetarian'/>
      <CategoryCard cuisine='Vegan'/>
      <CategoryCard cuisine='Kosher'/>
    </div>
    </>
  )
}

export default HealthLabel