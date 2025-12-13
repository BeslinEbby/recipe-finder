import { createContext, useState } from "react";

export const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [pageSection, setPageSection] = useState(1);
   const [category, setCategory] = useState("Beef");


   const lastIndex = currentPage * 8;
   const firstIndex = lastIndex - 8;

   const showRecipesByCat = (cat) => {
      setCategory(cat);
      setPageSection(1);
      setCurrentPage(1);
   };

   return (
      <PaginationContext.Provider
         value={{
            category,
            currentPage,
            setCurrentPage,
            pageSection,
            setPageSection,
            firstIndex,
            lastIndex,
            showRecipesByCat
         }}
      >
         {children}
      </PaginationContext.Provider>
   );
};

export default PaginationProvider;
