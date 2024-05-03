"use client";

import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

const SearchBar = ({ className }: { className?: ClassValue }) => {
  return (
    <div
      className={cn(
        "bg-white flex justify-between items-center border-2 border-transparent focus-within:border-logo rounded-full shadow-md py-1 px-2",
        className
      )}
    >
      <input
        type="text"
        placeholder="Search for notes, old papers, sayllabus etc.."
        className="flex-1 bg-transparent outline-0 px-3 border-0"
      />
      <Button
        variant={"themeBased"}
        size={"icon"}
        className="rounded-full grid place-items-center"
      >
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
