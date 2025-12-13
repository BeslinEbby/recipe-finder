import React, { useState } from 'react'
import CategoriesList from '../components/CategoriesList'

const AllRecipesPage = () => {
  const [category, setCategory]=useState("")

  return (
    <div>
      <CategoriesList category={category} setCategory={setCategory}/>
    </div>
  )
}

export default AllRecipesPage