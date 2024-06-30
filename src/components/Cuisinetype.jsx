import React from 'react'
import CategoryCard from './CategoryCard'

const Cuisinetype = () => {
  return (
    <>
    <h2 className='text-xl font-bold mb-2'>Cuisines</h2>
    <div className='flex gap-4 overflow-x-scroll mb-4'>
      <CategoryCard cuisine='Indian'/>
      <CategoryCard cuisine='American'/>
      <CategoryCard cuisine='Italian'/>
      <CategoryCard cuisine='Japanese'/>
      <CategoryCard cuisine='Chinese'/>
    </div>
    </>
  )
}

export default Cuisinetype