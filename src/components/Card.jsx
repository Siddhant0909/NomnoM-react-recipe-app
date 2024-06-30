import React, { useState } from 'react'
import { useRecipe } from '../context/RecipeContext'

const Card = ({recipe}) => {

  const[isSaved,setIsSaved]=useState(false)
  
  const{savedRecipes,saveRecipe}=useRecipe()

  const toggleSave=()=>{
    setIsSaved(prev=>!prev)
    recipe['saved']=isSaved;
    console.log(recipe);
  }

  return (
    <div className='w-[300px] max-h-[310px] h-full rounded-3xl overflow-hidden flex flex-col  gap-2'>
      <div className='w-full h-[85%] rounded-3xl object-cover object-center overflow-hidden'>
        <img className='rounded-3xl h-full w-full object-cover object-center' src={recipe?.recipe?.image} alt={recipe?.recipe?.label} />
      </div>
      <div className=' h-[15%] px-2 mb-2 flex items-start gap-4 justify-between overflow-hidden'>
      <p className='font-bold text-ellipsis w-[80%] cursor-default'>{recipe?.recipe?.label}</p>
      <span
       className='cursor-pointer text-lg'
       onClick={toggleSave}>
        {!isSaved?<i className="fa-regular fa-bookmark"></i>:<i className="fa-solid fa-bookmark"></i>}</span>
      </div>
    </div>
  )
}

export default Card