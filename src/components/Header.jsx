import {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
   const [searchInput, setSearchInput] = useState("");

   const location=useLocation()   

   return (
      <header>
         <div className="logo">
            <Link to={"/"} className="logo">
               Reci - Find
            </Link>
         </div>
         <nav>
            <Link className={location.pathname === "/" ? "underline" : ""} to={"/"}>
               Home
            </Link>
            <Link className={location.pathname === "/all" ? "underline" : ""} to={"/all"}>
               Recipes
            </Link>
            <Link className={location.pathname === "/saved" ? "underline" : ""} to={"/saved"}>
               Saved
            </Link>
         </nav>
         <div className="searchBox">
            <input
               type="text"
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
               placeholder="Search recipes here"
            />
            <IoSearchOutline className="search-icon" />
         </div>
      </header>
   );
};

export default Header;
