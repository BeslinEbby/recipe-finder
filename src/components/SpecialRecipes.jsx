import {  useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axiosInstance from "../api/apiInstance";

const SpecialRecipes = () => {

   const [specialRecipes, setSpecialRecipes] = useState([]);

   const fetchSpecialRecipes = async () => {
      try {
         const response = await axiosInstance("/search.php?f=b");
         const data = await response.data;
         setSpecialRecipes(data.meals);
      } catch (error) {
         console.log("error on fetching Special recipes : ", error);
      }
   };

   useEffect(() => {
      fetchSpecialRecipes();
   }, []);

   return (
      <section className="special">
         <h2>Our Special Recipes</h2>
         <div>
            {specialRecipes?.map((recipe, index) => {
               if (index < 12) {
                  return <RecipeCard key={recipe.idMeal} recipe={recipe} />;
               }
            })}
         </div>
      </section>
   );
};

export default SpecialRecipes;
