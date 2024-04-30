import Navbar from "@/components/layout/navbar";
import React from "react";

type AdminLayoutProps = {
  children: React.ReactNode;
};
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AdminLayout;
