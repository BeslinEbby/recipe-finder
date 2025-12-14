import { useEffect } from "react";
import { createContext, useState } from "react";

export const SavedRecipesContext = createContext();

const SavedRecipesProvider = ({ children }) => {
   const [savedRecipes, setSavedRecipes] = useState(
      localStorage.getItem("savedRecipes") !== "null" ? JSON.parse(localStorage.getItem("savedRecipes")) : []
   );

   const savedRecipesHandler = (recipe) => {
         const exists=savedRecipes.find((item)=>item.idMeal === recipe.idMeal)
         if(exists){
            setSavedRecipes(prev=>prev.filter((meal)=>meal.idMeal !== recipe.idMeal))
         }else{
            setSavedRecipes([...savedRecipes, recipe]);
         }
   };
   
   useEffect(() => {
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
   }, [savedRecipes]);


   return (
      <SavedRecipesContext.Provider value={{ savedRecipes, savedRecipesHandler }}>
         {children}
      </SavedRecipesContext.Provider>
   );
};

export default SavedRecipesProvider;
