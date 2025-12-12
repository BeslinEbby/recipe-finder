import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

   const navigate = useNavigate();

   return (
      <div className="recipeCard" key={recipe?.idMeal} onClick={() => navigate(`/recipe/${recipe?.idMeal}`)}>
         <img src={recipe?.strMealThumb} alt="" />
         <h4>{recipe?.strMeal}</h4>
      </div>
   );
};

export default RecipeCard;
