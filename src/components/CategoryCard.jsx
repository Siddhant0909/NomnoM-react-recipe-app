import React from 'react'

const CategoryCard = ({cuisine}) => {
  return (
    <div className='flex justify-center items-center min-w-[200px] h-[200px] w-full bg-[#b72020] rounded-2xl cursor-pointer'>
      <h5 className='text-3xl font-bold'>{cuisine}</h5>
    </div>
  )
}

export default CategoryCard