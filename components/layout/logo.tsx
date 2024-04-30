import Image from "next/image";
import React from "react";
import LogoSrc from "@/app/icon.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex items-center" href={"/"}>
      <Image src={LogoSrc} alt="Logo" width={70} height={70} />
      <div className="text-lg py-1 border-b-4 border-black hover:opacity-60 transition-opacity">
        <span className="sm:inline hidden">Subodhians</span>
        <span className="sm:hidden">SBDNS</span>
      </div>
    </Link>
  );
};

export default Logo;
