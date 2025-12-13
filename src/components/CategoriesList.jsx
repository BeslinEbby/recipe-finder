import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../api/apiInstance";
import { PaginationContext } from "../contexts/PaginationContext";

const CategoriesList = () => {

   const [categories, setCategories] = useState([]);

   const {category, showRecipesByCat} =useContext(PaginationContext)

   const fetchAllCategories = async () => {
      try {
         const response = await axiosInstance("/categories.php");
         const data = await response.data;
         setCategories(data.categories);         
      } catch (error) {
         console.log("error on fetching all categories ", error);
      }
   };

   useEffect(() => {
      fetchAllCategories();
   }, []);

   return (
      <div className="categories">
         <ul>
            {categories.map((item) => (
               <li
                  key ={item.idCategory} className={category === item.strCategory ? "highlight" : ""}
                  onClick={() => showRecipesByCat(item.strCategory)}
               >
                  {item.strCategory}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default CategoriesList;
