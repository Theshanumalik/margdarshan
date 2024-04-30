"use client";

import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

const SearchBar = ({ className }: { className?: ClassValue }) => {
  return (
    <div
      className={cn(
        "bg-white py-2 flex justify-between px-4 border-2 border-transparent focus-within:border-logo rounded-lg shadow-md",
        className
      )}
    >
      <input
        type="text"
        placeholder="Search for notes, old papers, sayllabus etc.."
        className="flex-1 bg-transparent outline-0 p-0 border-0"
      />
      <Button variant={"secondary"}>
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
