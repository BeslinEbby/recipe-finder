import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import RecipeContainer from "../components/RecipeContainer";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";
import { PaginationContext } from "../contexts/PaginationContext";

const SelectedRecipePage = () => {
   const [selectedRecipe, setSelectedRecipe] = useState();
   const [relatedRecipes, setRelatedRecipe] = useState();

   const { recipeId } = useParams();

   const { firstIndex, lastIndex } = useContext(PaginationContext);

   const fetchSelectedRecipe = async () => {
      try {
         const res = await axiosInstance(`/lookup.php?i=${recipeId}`);
         const data = await res.data.meals[0];
         setSelectedRecipe(data);
         const relatedRes = await axiosInstance(`/filter.php?a=${data?.strArea}`);
         setRelatedRecipe(relatedRes.data.meals);
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
         <div className="related">
            <h3>Related Recipes</h3>
            <div className="related-recipes">
               {relatedRecipes
                  ?.filter((rec) => rec.idMeal !== recipeId)
                  .slice(firstIndex, lastIndex)
                  ?.map((recipe) => (
                     <RecipeCard recipe={recipe} />
                  ))}
            </div>
            <Pagination recipes={relatedRecipes} />
         </div>
      </div>
   );
};

export default SelectedRecipePage;
