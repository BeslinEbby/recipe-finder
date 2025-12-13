import React, { useContext, useState, useEffect } from "react";
import axiosInstance from "../api/apiInstance";

const CategoriesList = ({category, setCategory}) => {

   const [categories, setCategories] = useState([]);

   const fetchAllCategories = async () => {
      try {
         const response = await axiosInstance("/categories.php");
         const data = await response.data;
         setCategories(data.categories);
         console.log(data);
         
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
                  onClick={() => setCategory(item.strCategory)}
               >
                  {item.strCategory}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default CategoriesList;
