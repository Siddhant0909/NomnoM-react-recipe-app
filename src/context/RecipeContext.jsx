import { createContext,useContext, useState } from "react";
import { fetchPopular } from "../api";

const RecipeContext=createContext(null);

export const useRecipe=()=>{
  return useContext(RecipeContext)
}

export const RecipeContextProvider=(({children})=>{

  const[popular,setPopular]=useState([])

  const[savedRecipes,setSavedRecipes]=useState([])



  const fetchPopularData=async()=>{
    const check=localStorage.getItem('popularDish')
    if(check){
      setPopular(JSON.parse(check))
    }
    else{
      const response=await fetchPopular()
      localStorage.setItem('popularDish',JSON.stringify(response.hits))
      setPopular(response.hits)
    }
  }

  const saveRecipe=(recipe)=>{
    setSavedRecipes((prev)=>[...prev,recipe])
  }

  

  return(
    <RecipeContext.Provider value={{popular,fetchPopularData,savedRecipes,saveRecipe}}>
      {children}
    </RecipeContext.Provider>
  )
})