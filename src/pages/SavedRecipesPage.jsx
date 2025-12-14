import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { SavedRecipesContext } from "../contexts/SavedRecipeContext";

const SavedRecipesPage = () => {
   const { savedRecipes } = useContext(SavedRecipesContext);

   return (
      <>
         {savedRecipes?.length > 0 ? (
            <section className="saved">
               {savedRecipes?.map((recipe) => (
                  <RecipeCard recipe={recipe} />
               ))}
            </section>
         ) : (
            <section className="noSaved">
               <p>You don't have any saved recipes</p>
            </section>
         )}
      </>
   );
};

export default SavedRecipesPage;
