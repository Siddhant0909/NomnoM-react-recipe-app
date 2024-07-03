import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { useParams } from 'react-router-dom'
import { useRecipe } from '../context/RecipeContext'

const DetailsData = () => {
  const params=useParams()
  const[isActive,setIsActive]=useState('ing')
  const{details,fetchDetailedData}=useRecipe()
  useEffect(()=>{fetchDetailedData(params.id)},[params.id])

  return (
    <div className='w-full h-full outline-none gap-4 flex flex-col mb-20 sm:bg-[#474747b6] sm:p-4 sm:rounded-3xl'>
      <div className='w-full h-fit'>
      <h1 className='text-2xl font-semibold mb-4'>{details?.recipe?.label}</h1>
      <div className='w-full h-[400px] overflow-hidden rounded-3xl bg-[#474747b6]'>
        <img className='w-full h-full object-cover object-center' src={details?.recipe?.image}  />
      </div>     
      </div>

      <div className='flex flex-col h-full bg-[#474747b6] p-4 rounded-3xl'>
        <h2 className='font-semibold text-xl mb-2'>Ingredients</h2>
        <div className='h-fit w-full overflow-y-scroll'>
          {isActive==='ing'?<div>{details?.recipe?.ingredientLines.map((ing)=>(<li key={v4()}>{ing}</li>))}</div>:<div>{details?.recipe?.cautions[0]}</div>}
        </div>
     </div>
    
    </div>
  )
}

export default DetailsData