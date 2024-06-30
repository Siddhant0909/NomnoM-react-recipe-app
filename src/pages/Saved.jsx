import React,{useEffect} from 'react'
import { useRecipe } from '../context/RecipeContext'
import Card from '../components/Card'

const Saved = () => {
  const{popular,fetchPopularData}=useRecipe()

  useEffect(()=>{
    fetchPopularData()},[])

  return (
    <div className='flex flex-col justify-between h-fit mt-14 p-4 gap-4 bg-[#212121] '>
      <div className='flex gap-4 w-full h-fit flex-wrap pb-14 justify-center'>
      {popular.map((recipe)=>(
            <div key={recipe?.recipe.label}>
              <Card recipe={recipe}/>
            </div>
      ))}
      </div>
    </div>
  )
}

export default Saved