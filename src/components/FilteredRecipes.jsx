import React, { useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import RecipeCard from "./RecipeCard";

const FilteredRecipes = ({category}) => {
   const [cattedRecipies, setCattedRecipies] = useState();

   const fetchRecipiesByCat = async () => {
      try {
         const response = await axiosInstance(`/filter.php?c=${category}`);
         const data = await response.data;
         setCattedRecipies(data.meals);
         console.log(data);
         
      } catch (error) {
         console.log("error on fetching Recipies by category ", error);
      }
   };

   useEffect(() => {
      fetchRecipiesByCat();
   }, [category]);

   return (
      <section className="filtered">
            {cattedRecipies?.map((recipe) => (
               <RecipeCard recipe={recipe} />
            ))}
      </section>
   );
};

export default FilteredRecipes;
