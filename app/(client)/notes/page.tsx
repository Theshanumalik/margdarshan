import SearchBar from "@/components/layout/search-bar";
import React from "react";
import Menu from "../_components/menu";
import Notes from "../_components/notes";

const NotesHomePage = () => {
  return (
    <main>
      <SearchBar className="my-3 " />
      <Menu />
      <Notes />
    </main>
  );
};

export default NotesHomePage;
