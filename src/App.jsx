import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllRecipesPage from './pages/AllRecipesPage'
import SavedRecipesPage from './pages/SavedRecipesPage'
import SelectedRecipePage from './pages/SelectedRecipePage'
import Header from './components/Header'

const App = () => {
  return (
     <>
        <Header />
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/all" element={<AllRecipesPage />} />
           <Route path="/saved" element={<SavedRecipesPage />} />
           <Route path="/:recipeId" element={<SelectedRecipePage />} />
        </Routes>
     </>
  );
}

export default App