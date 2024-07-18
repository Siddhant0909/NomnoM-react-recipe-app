import React from "react";
import { useRecipe } from "../context/RecipeContext";
import Savedcard from "../components/SavedCard";
import MobileNav from "../components/MobileNav";
import BottomNav from "../components/BottomNav";

const Saved = () => {
  const { savedRecipes } = useRecipe();

  return (
    <>
      <MobileNav />
      <div className="flex flex-col justify-between h-fit mt-14 p-4 gap-4 bg-[#212121] ">
        <div
          style={
            savedRecipes?.length > 0
              ? { alignItems: "top" }
              : { alignItems: "center", height: "100vh" }
          }
          className="flex flex-wrap justify-center w-full gap-4 h-fit pb-14"
        >
          {savedRecipes?.length > 0 ? (
            savedRecipes.map((recipe) => (
              <div key={recipe?.id}>
                <Savedcard recipe={recipe} />
              </div>
            ))
          ) : (
            <h1 className="text-4xl font-semibold text-[#636262]">Empty</h1>
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Saved;
