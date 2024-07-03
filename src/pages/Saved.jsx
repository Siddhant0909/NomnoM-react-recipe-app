import React,{useEffect} from 'react'
import { useRecipe } from '../context/RecipeContext'
import Savedcard from '../components/SavedCard'
import MobileNav from '../components/MobileNav'
import BottomNav from '../components/BottomNav'


const Saved = () => {
  const{savedRecipes,setSavedRecipes}=useRecipe()  

  return (
    <>
    <MobileNav />
    <div className='flex flex-col justify-between h-fit mt-14 p-4 gap-4 bg-[#212121] '>
      <div style={savedRecipes?.length>0?{alignItems:'top'}:{alignItems:"center",height:"100vh"}} className='flex gap-4 w-full h-fit flex-wrap pb-14 justify-center'>
      {savedRecipes?.length>0?savedRecipes.map((recipe)=>(
            <div key={recipe?.id}>
              <Savedcard recipe={recipe}/>
            </div>
      )):<h1 className='text-4xl font-semibold text-[#636262]'>Empty</h1>}
      </div>
    </div>
    <BottomNav />
    
    </>
  )
}

export default Saved