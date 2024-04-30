import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: ClassValue;
};
const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("mx-auto max-w-5xl px-2", className)}>{children}</div>
  );
};

export default Wrapper;
