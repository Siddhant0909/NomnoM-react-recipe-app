// const baseURL="https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e6555d04&app_key=cef58d7567006f81821f7e3d45b80e4d&diet=high-protein&health=egg-free&cuisineType=Indian&mealType=Lunch"
const app_id='e6555d04';
const app_key='cef58d7567006f81821f7e3d45b80e4d';
const baseURL="https://api.edamam.com/api/recipes/v2?type=public";

export const fetchPopular=async()=>{

  const fetchURL=`${baseURL}&app_id=${app_id}&app_key=${app_key}&mealType=Snack&cuisineType=Indian`
  const response=await fetch(fetchURL)
  return await response.json()
}