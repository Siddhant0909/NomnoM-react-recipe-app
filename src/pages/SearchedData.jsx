import React, { useEffect } from 'react'
import { useRecipe } from '../context/RecipeContext'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const SearchedData = () => {
  const{searched,fetchSearchedData}=useRecipe()
  const params=useParams()

  useEffect(()=>{fetchSearchedData(params.query)},[params.query])
  return (
    <div className='flex flex-col justify-between h-fit mt-14 p-4 gap-4 bg-[#212121] '>
      <div className='flex gap-4 w-full h-fit flex-wrap pb-14 justify-center'>
      {searched?.map((recipe)=>(
            <div key={recipe?.id}>
              <Card recipe={recipe}/>
            </div>
      ))}
      </div>
    </div>
  )
}

export default SearchedData