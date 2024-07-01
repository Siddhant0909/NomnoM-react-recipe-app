import { useEffect } from "react"
import { fetchPopular } from "./api"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import BottomNav from "./components/BottomNav"
import Recipes from "./pages/Recipes"
import Saved from "./pages/Saved"
import {Outlet} from "react-router-dom"
import { useRecipe } from "./context/RecipeContext"


function App() {

  const{savedRecipes,setSavedRecipes,popular,setPopular}=useRecipe()

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("saved"))

    if (recipes && recipes.length > 0) {
      setSavedRecipes(recipes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedRecipes))
  }, [savedRecipes])

  useEffect(()=>{
    const recipe=JSON.parse(localStorage.getItem('popular'))
    if(recipe&&recipe.length>0){
      setPopular(recipe)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('popular',JSON.stringify(popular))
  },[popular])

  
  
  
  return (
    <>
      <Navbar />
      <Outlet/>  
      <BottomNav />
    </>
  )
}

export default App
