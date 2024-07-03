import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecipeContextProvider } from './context/RecipeContext.jsx'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from "react-router-dom"
import Home from './pages/Home.jsx'
import Recipes from './pages/Recipes.jsx'
import Saved from './pages/Saved.jsx'
import CuisineData from './pages/CuisineData.jsx'
import Category from './pages/Category.jsx'
import MealsData from './pages/MealsData.jsx'
import Meals from './pages/Meals.jsx'
import Health from './pages/Health.jsx'
import HealthData from './pages/HealthData.jsx'
import Search from './pages/Search.jsx'
import SearchedData from './pages/SearchedData.jsx'
import Details from './pages/Details.jsx'
import DetailsData from './pages/DetailsData.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>}/>
      <Route path='recipes' element={<Recipes/>}/>
      <Route path='category' element={<Category />}>
        <Route path=':cuisineType' element={<CuisineData/>} />
      </Route>
      <Route path='meals' element={<Meals />}>
        <Route path=':mealsType' element={<MealsData/>} />
      </Route>
      <Route path='health' element={<Health />}>
        <Route path=':mealsType' element={<HealthData/>} />
      </Route>
      <Route path='saved' element={<Saved/>}/>
      <Route path='search' element={<Search/>}>
        <Route path=':query' element={<SearchedData/>}/>
      </Route>
      <Route path='details' element={<Details/>}>
        <Route path=':id' element={<DetailsData />}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeContextProvider>
      <RouterProvider router={router}/>
    </RecipeContextProvider>
  </React.StrictMode>,
)
