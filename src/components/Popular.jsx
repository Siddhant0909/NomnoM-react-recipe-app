import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useRecipe } from '../context/RecipeContext'
import Savedcard from './SavedCard'


const Popular = () => {

  const{popular,fetchPopularData}=useRecipe()

  useEffect(()=>{
    fetchPopularData()},[])

  return (
    <div className='w-full p-2 h-[400px] bg-[#212121]'>
      <h1 className='text-xl font-bold mb-2'>Trending Recipes</h1>
      <div className='flex gap-4 w-full h-full overflow-x-scroll pb-14'>
      {popular.map((recipe)=>{
        const recipe_id=recipe.recipe.uri.slice(recipe.recipe.uri.lastIndexOf('_')+1)
        recipe['id']=recipe_id
        return(
            <div key={recipe.id}>
              <Savedcard recipe={recipe}/>
            </div>
      )
      })}
      </div>
    </div>
  )
}

export default Popular