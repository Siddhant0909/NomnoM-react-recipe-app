import React from "react";
import { useRecipe } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const Card = ({ recipe }) => {
  const { saveRecipe, unsaveRecipe, toggle, savedRecipes } = useRecipe();

  const isPresent = savedRecipes.find((savedRec) => savedRec.id === recipe.id);

  const toggleSave = () => {
    if (!isPresent) {
      saveRecipe({ ...recipe, saved: true });
    } else {
      unsaveRecipe(recipe, recipe.id);
    }
    toggle(recipe.id);
  };

  return (
    <div className="w-[300px] h-[310px] rounded-3xl overflow-hidden flex flex-col  gap-2">
      <Link
        to={`/details/${recipe.id}`}
        className="w-full h-[85%] rounded-3xl object-cover object-center overflow-hidden bg-[#474747b6]"
      >
        <img
          className="object-cover object-center w-full h-full rounded-3xl"
          src={recipe?.recipe?.image}
          alt={recipe?.recipe?.label}
        />
      </Link>
      <div className=" h-[15%] px-2 mb-2 flex items-start gap-4 justify-between overflow-hidden">
        <p className="font-bold text-ellipsis w-[80%] cursor-default">
          {recipe?.recipe?.label}
        </p>
        <span className="pt-1 text-lg cursor-pointer" onClick={toggleSave}>
          {!isPresent ? <FaRegBookmark /> : <FaBookmark />}
        </span>
      </div>
    </div>
  );
};

export default Card;
