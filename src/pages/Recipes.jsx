import React from 'react'
import Cuisinetype from '../components/Cuisinetype'
import MealType from '../components/MealType'
import HealthLabel from '../components/HealthLabel'

const Recipes = () => {
  return (
    <>
      <div className='h-fit mt-14 bg-[#212121] p-4 pb-14'>
        <Cuisinetype/>
        <MealType />
        <HealthLabel />
      </div>
    </>
  )
}

export default Recipes  