import { createContext,useContext, useState } from "react";
import { fetchCuisine, fetchHealth, fetchMeal, fetchPopular, fetchQuery } from "../api";
import { v4 } from "uuid";

const RecipeContext=createContext(null);

export const useRecipe=()=>{
  return useContext(RecipeContext)
}

export const RecipeContextProvider=(({children})=>{

  const[popular,setPopular]=useState([])
  const[cuisines,setCuisines]=useState([])
  const[meals,setMeals]=useState([])
  const[health,setHealth]=useState([])
  const[searched,setSearched]=useState([])
  
  const[savedRecipes,setSavedRecipes]=useState([])



  const fetchPopularData=async()=>{
    const check=localStorage.getItem('popular')
    if(!check){
      const response=await fetchPopular()
      const data= response.hits.map((res)=>({...res,saved:false})) 
      setPopular(data)
    }
  }
  const fetchCuisineData=async(cuisinename)=>{
    const response=await fetchCuisine(cuisinename)
      const data= response.hits.map((res)=>({...res,saved:false,id:v4()})) 
      setCuisines(data)
  }
  const fetchMealData=async(mealname)=>{
    const response=await fetchMeal(mealname)
      const data= response.hits.map((res)=>({...res,saved:false,id:v4()})) 
      setMeals(data)
  }
  const fetchHealthData=async(health)=>{
    const response=await fetchHealth(health)
      const data= response.hits.map((res)=>({...res,saved:false,id:v4()})) 
      setHealth(data)
  }
  const fetchSearchedData=async(query)=>{
    const response=await fetchQuery(query)
      const data= response.hits.map((res)=>({...res,saved:false,id:v4()})) 
      setSearched(data)
  }


  const saveRecipe=(recipe)=>{
    setSavedRecipes((prev)=>[...prev,recipe])
  }
  const unsaveRecipe=(recipe,id)=>{
    setSavedRecipes((prev)=>prev.filter((prevRec)=>prevRec.id!==id))
  }
  const toggle=(id)=>{
    setPopular((prev)=>prev.map(res=>(res.id===id?{...res,saved:!res.saved}:res)))
  }

  

  return(
    <RecipeContext.Provider value={{popular,fetchPopularData,savedRecipes,saveRecipe,setSavedRecipes,setPopular,unsaveRecipe,toggle,fetchCuisineData,cuisines,setCuisines,meals,fetchMealData,health,fetchHealthData,searched,fetchSearchedData}}>
      {children}
    </RecipeContext.Provider>
  )
})