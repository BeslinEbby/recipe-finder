import React from "react";
import Hero from "../components/Hero";
import SpecialRecipes from "../components/SpecialRecipes";
import RecipeContainer from "../components/RecipeContainer";
import RandomRecipe from "../components/RandomRecipe";

const HomePage = () => {
   return (
      <>
         <Hero />
         <SpecialRecipes />
         <RandomRecipe/>
      </>
   );
};

export default HomePage;
