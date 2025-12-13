import { useContext } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PaginationContext } from "../contexts/PaginationContext";

const Pagination = ({ recipes }) => {
   const { currentPage, setCurrentPage, pageSection, setPageSection } = useContext(PaginationContext);

   const totalPages = [];

   const pageLength = Math.ceil(recipes?.length / 8);

   for (let i = 1; i <= pageLength; i++) {
      totalPages.push(i);
   }

   const pagesToShow = Math.ceil(pageLength / 4);
   const lastPageIndex = pageSection * 4;
   const firstPageIndex = lastPageIndex - 4;

   return (
      <>
         {pageLength > 0 && (
            <div className="pagination">
               <button disabled={pageSection === 1} onClick={() => setPageSection((prev) => prev - 1)}>
                  <GrPrevious />
               </button>
               {totalPages?.slice(firstPageIndex, lastPageIndex).map((num) => (
                  <button
                     className={currentPage === num ? "highlight" : ""}
                     onClick={() => setCurrentPage(num)}
                  >
                     {num}
                  </button>
               ))}
               <button disabled={pagesToShow === pageSection} onClick={() => setPageSection((prev) => prev + 1)}>
                  <GrNext />
               </button>
            </div>
         )}
      </>
   );
};

export default Pagination;
