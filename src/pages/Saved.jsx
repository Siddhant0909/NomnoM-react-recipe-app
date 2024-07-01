import React,{useEffect} from 'react'
import { useRecipe } from '../context/RecipeContext'
import Savedcard from '../components/SavedCard'


const Saved = () => {
  const{savedRecipes,setSavedRecipes}=useRecipe()

  // console.log(savedRecipes);  

  return (
    <div className='flex flex-col justify-between h-fit mt-14 p-4 gap-4 bg-[#212121] '>
      <div className='flex gap-4 w-full h-fit flex-wrap pb-14 justify-center'>
      {savedRecipes.map((recipe)=>(
            <div key={recipe?.id}>
              <Savedcard recipe={recipe}/>
            </div>
      ))}
      </div>
    </div>
  )
}

export default Saved