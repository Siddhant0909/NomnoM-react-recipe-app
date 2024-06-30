import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecipeContextProvider } from './context/RecipeContext.jsx'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from "react-router-dom"
import Home from './pages/Home.jsx'
import Recipes from './pages/Recipes.jsx'
import Saved from './pages/Saved.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>}/>
      <Route path='recipes' element={<Recipes/>}/>
      <Route path='saved' element={<Saved/>}/>
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
