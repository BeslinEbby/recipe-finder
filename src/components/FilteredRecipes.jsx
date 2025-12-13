import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import { PaginationContext } from "../contexts/PaginationContext";

const FilteredRecipes = () => {
   const [cattedRecipes, setCattedRecipes] = useState();

   const { category, firstIndex, lastIndex } = useContext(PaginationContext);

   const fetchRecipesByCat = async () => {
      try {
         const response = await axiosInstance(`/filter.php?c=${category}`);
         const data = await response.data;
         setCattedRecipes(data.meals);
      } catch (error) {
         console.log("error on fetching Recipes by category ", error);
      }
   };

   useEffect(() => {
      fetchRecipesByCat();
   }, [category]);   

   return (
      <section className="filtered">
         <div className="filtered-recipes">
            {cattedRecipes?.slice(firstIndex, lastIndex).map((recipe) => (
               <RecipeCard recipe={recipe} />
            ))}
         </div>
         <div className="filtered-pagination">
            <Pagination recipes={cattedRecipes} />
         </div>
      </section>
   );
};

export default FilteredRecipes;
