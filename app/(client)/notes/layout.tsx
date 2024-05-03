import SearchBar from "@/components/layout/search-bar";
import React from "react";

type NotesAppLayoutProps = {
  children: React.ReactNode;
};
const NotesAppLayout = ({ children }: NotesAppLayoutProps) => {
  return (
    <>
      <SearchBar className="my-3" />
      {children}
    </>
  );
};

export default NotesAppLayout;
