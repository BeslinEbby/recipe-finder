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
         console.log("error on fetching Special recipies : ", error);
      }
   };

   useEffect(() => {
      fetchSpecialRecipes();
   }, []);

   return (
      <section className="special">
         <h3>Our Special Recipies</h3>
         <div >
            {specialRecipes?.map((recipe, index) => {
               if (index < 8) {
                  return <RecipeCard key={recipe.idMeal} recipe={recipe} />;
               }
            })}
         </div>
      </section>
   );
};

export default SpecialRecipes;
