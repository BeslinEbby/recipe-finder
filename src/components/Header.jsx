import {  useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
   const [searchInput, setSearchInput] = useState("");

   return (
      <header>
         <div className="logo">
            <Link to={"/"} className="logo">
               Reci - Find
            </Link>
         </div>
         <nav>
            <Link to={"/all"}>All Recipes</Link>
            <Link to={"/saved"}>Saved</Link>
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
