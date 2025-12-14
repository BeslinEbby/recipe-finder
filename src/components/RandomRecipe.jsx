import React, { useEffect, useState } from 'react'
import RecipeContainer from './RecipeContainer';
import axiosInstance from '../api/apiInstance';

const RandomRecipe = () => {

    const [randomRecipe, setRandomRecipe] = useState(null);

    const fetchRandomRecipe = async () => {
       try {
          const response = await axiosInstance("/random.php");
          const data = await response.data;
          setRandomRecipe(data.meals[0]);
        } catch (error) {
            console.log("Error on fetching random recipe : ", error);
        }
    };

    useEffect(() => {
       fetchRandomRecipe();
    }, []);

  return (
    <div className='randomRecipe'>
        {randomRecipe && <RecipeContainer recipe={randomRecipe}/>}
    </div>
  )
}

export default RandomRecipe