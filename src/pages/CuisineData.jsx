import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import { useRecipe } from '../context/RecipeContext'

const CuisineData = () => {
  const{cuisines,fetchCuisineData}=useRecipe()
  let params=useParams()
  
  useEffect(()=>{fetchCuisineData(params.cuisineType)},[params.cusineType])

  return (
    <div className='flex flex-col justify-between h-fit mt-14 p-4 gap-4 bg-[#212121] '>
      <div className='flex gap-4 w-full h-fit flex-wrap pb-14 justify-center'>
      {cuisines?.map((recipe)=>(
            <div key={recipe?.id}>
              <Card recipe={recipe}/>
            </div>
      ))}
      </div>
    </div>
  )
}

export default CuisineData