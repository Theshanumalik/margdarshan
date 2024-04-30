import Image from "next/image";
import React from "react";
import LogoSrc from "@/app/icon.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex items-center" href={"/"}>
      <Image src={LogoSrc} alt="Logo" width={70} height={70} />
      <span className="text-lg py-1 border-b-4 border-black hover:opacity-60 transition-opacity">
        MargDarshan
      </span>
    </Link>
  );
};

export default Logo;
