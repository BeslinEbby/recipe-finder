import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import { PaginationContext } from "../contexts/PaginationContext";

const FilteredRecipes = ({ category }) => {
   const [cattedRecipies, setCattedRecipies] = useState();

   const { firstIndex, lastIndex } = useContext(PaginationContext);

   const fetchRecipiesByCat = async () => {
      try {
         const response = await axiosInstance(`/filter.php?c=${category}`);
         const data = await response.data;
         setCattedRecipies(data.meals);
      } catch (error) {
         console.log("error on fetching Recipies by category ", error);
      }
   };

   useEffect(() => {
      fetchRecipiesByCat();
   }, [category]);

   return (
      <section className="filtered">
         <div className="filtered-recipes">
            {cattedRecipies?.slice(firstIndex, lastIndex).map((recipe) => (
               <RecipeCard recipe={recipe} />
            ))}
         </div>
         <div className="filtered-pagination">
            <Pagination recipes={cattedRecipies} />
         </div>
      </section>
   );
};

export default FilteredRecipes;
