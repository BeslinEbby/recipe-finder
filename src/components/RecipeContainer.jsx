import React, { useContext } from "react";
import { SavedRecipesContext } from "../contexts/SavedRecipeContext";

const RecipeContainer = ({ recipe }) => {
   
   const { savedRecipes, savedRecipesHandler } = useContext(SavedRecipesContext);   

   return (
      <div className="recipeContainer">
            <h3>it's time to try this recipe</h3>
         <div className="recipeHeader">
            <div className="left">
               <h4>{recipe.strMeal.toUpperCase()}</h4>
               <div className="thumbnail">
                  <img src={recipe.strMealThumb} alt="" />
               </div>
               <button
                  onClick={() => savedRecipesHandler(recipe)}
               >
                  {savedRecipes?.find(item => item.idMeal === recipe.idMeal) ? "Remove" : "Save"}
               </button>
            </div>
            <div className="right">
               <p>
                  let try out this super tasty {recipe.strArea} {recipe.strCategory} recipe.
               </p>
               <div className="ingredients">
                  <h4>INGREDIENTS</h4>
                  <ul>
                     {Array.from({ length: 20 }, (_, i) => {
                        const index = i + 1;
                        const ingredient = recipe[`strIngredient${index}`];
                        const measure = recipe[`strMeasure${index}`];

                        // Render only if ingredient exists
                        return (
                           ingredient && (
                              <li key={index}>
                                 {ingredient} - {measure}
                              </li>
                           )
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
         <div className="instructions">
            <h4>INSTRUCTIONS</h4>
            <p>{recipe.strInstructions}</p>
         </div>
      </div>
   );
};

export default RecipeContainer;
