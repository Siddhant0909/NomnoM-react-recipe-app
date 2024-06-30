import { useEffect } from "react"
import { fetchPopular } from "./api"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import BottomNav from "./components/BottomNav"
import Recipes from "./pages/Recipes"
import Saved from "./pages/Saved"
import {Outlet} from "react-router-dom"


function App() {

  return (
    <>
      <Navbar />
      <Outlet/>  
      <BottomNav />
    </>
  )
}

export default App
