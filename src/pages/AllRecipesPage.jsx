import React, { useState } from 'react'
import CategoriesList from '../components/CategoriesList'
import FilteredRecipes from '../components/FilteredRecipes'

const AllRecipesPage = () => {
  const [category, setCategory]=useState("Beef")

  return (
    <div className='allRecipes'>
      <CategoriesList category={category} setCategory={setCategory}/>
      <FilteredRecipes category={category}/>
    </div>
  )
}

export default AllRecipesPage