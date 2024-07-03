// const baseURL="https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e6555d04&app_key=cef58d7567006f81821f7e3d45b80e4d&diet=high-protein&health=egg-free&cuisineType=Indian&mealType=Lunch"
const app_id='e6555d04';
const app_key='cef58d7567006f81821f7e3d45b80e4d';
const baseURL="https://api.edamam.com/api/recipes/v2";

export const fetchPopular=async()=>{

  const fetchURL=`${baseURL}?type=public&app_id=${app_id}&app_key=${app_key}&mealType=Snack&cuisineType=Indian`
  const response=await fetch(fetchURL)
  return await response.json()
}
export const fetchCuisine=async(name)=>{

  const fetchURL=`${baseURL}?type=public&app_id=${app_id}&app_key=${app_key}&cuisineType=${name}`
  const response=await fetch(fetchURL)
  return await response.json()
}
export const fetchMeal=async(name)=>{
  const fetchURL=`${baseURL}?type=public&app_id=${app_id}&app_key=${app_key}&mealType=${name}`
  const response=await fetch(fetchURL)
  return await response.json()
}
export const fetchHealth=async(name)=>{
  const fetchURL=`${baseURL}?type=public&app_id=${app_id}&app_key=${app_key}&health=${name}`
  const response=await fetch(fetchURL)
  return await response.json()
}
export const fetchQuery=async(query)=>{
  const fetchURL=`${baseURL}?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`
  const response=await fetch(fetchURL)
  return await response.json()
}
export const fetchDetails=async(id)=>{
  const fetchURL=`${baseURL}/${id}?type=public&app_id=${app_id}&app_key=${app_key}`
  const response=await fetch(fetchURL)
  return await response.json()
}