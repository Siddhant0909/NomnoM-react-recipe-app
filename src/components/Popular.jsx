import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useRecipe } from "../context/RecipeContext";
import Savedcard from "./SavedCard";

const Popular = () => {
  const { popular, fetchPopularData } = useRecipe();

  useEffect(() => {
    fetchPopularData();
  }, []);

  return (
    <div className="w-full py-2 h-[400px] bg-[#212121]">
      <h1 className="mb-2 text-xl font-bold">Trending Recipes</h1>
      <div className="flex w-full h-full gap-4 overflow-x-scroll pb-14">
        {popular.map((recipe) => {
          const recipe_id = recipe.recipe.uri.slice(
            recipe.recipe.uri.lastIndexOf("_") + 1
          );
          recipe["id"] = recipe_id;
          return (
            <div key={recipe.id}>
              <Card recipe={recipe} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
