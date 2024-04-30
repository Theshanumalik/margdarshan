import Navbar from "@/components/layout/navbar";
import Wrapper from "@/components/layout/wrapper";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default layout;
