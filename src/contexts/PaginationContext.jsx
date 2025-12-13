import { createContext, useState } from "react";

export const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [pageSection, setPageSection] = useState(1);

   const lastIndex = currentPage * 8;
   const firstIndex = lastIndex - 8;

   return (
      <PaginationContext.Provider
         value={{
            currentPage,
            setCurrentPage,
            pageSection,
            setPageSection,
            firstIndex,
            lastIndex,
         }}
      >
         {children}
      </PaginationContext.Provider>
   );
};

export default PaginationProvider;
