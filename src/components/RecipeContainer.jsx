import React from "react";

const RecipeContainer = ({ recipe }) => {
   return (
      <div className="recipeContainer">
         <div className="recipeHeader">
            <div className="left">
               <h3>{recipe.strMeal}</h3>
               <div className="thumbnail">
                  <img src={recipe.strMealThumb} alt="" />
               </div>
               <button>save</button>
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
