import { createContext, useState } from "react";

export const SavedRecipesContext = createContext();

const SavedRecipesProvider = ({ children }) => {
   const [savedRecipes, setSavedRecipes] = useState([]);

   const savedRecipesHandler= (recipe)=>{
    setSavedRecipes([...savedRecipes, recipe])
   }

   return (
      <SavedRecipesContext.Provider value={{ savedRecipes, savedRecipesHandler }}>{children}</SavedRecipesContext.Provider>
   );
};

export default SavedRecipesProvider;
