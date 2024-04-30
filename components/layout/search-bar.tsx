"use client";

import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search for products" />
      <Button variant={"ghost"}>
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
