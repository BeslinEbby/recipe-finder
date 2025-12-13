import React, { useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import RecipeContainer from "../components/RecipeContainer";
import { useParams } from "react-router-dom";

const SelectedRecipePage = () => {
   const [selectedRecipe, setSelectedRecipe] = useState();

   const { recipeId } = useParams();

   const fetchSelectedRecipe = async () => {
      try {
         const res = await axiosInstance(`/lookup.php?i=${recipeId}`);
         const data = await res.data;
         setSelectedRecipe(data.meals[0]);
         console.log(data);
      } catch (error) {
         console.log("error on fetching selected recipe details", error);
      }
   };

   useEffect(() => {
      fetchSelectedRecipe();
   }, [recipeId]);

   return (
      <div className="selected">
        {selectedRecipe && <RecipeContainer recipe={selectedRecipe} />}
      </div>
   )
};

export default SelectedRecipePage;
