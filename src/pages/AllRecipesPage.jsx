import React, { useState } from 'react'
import CategoriesList from '../components/CategoriesList'
import FilteredRecipes from '../components/FilteredRecipes'

const AllRecipesPage = () => {

  return (
    <div className='allRecipes'>
      <CategoriesList />
      <FilteredRecipes />
    </div>
  )
}

export default AllRecipesPage