"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = ({
  label,
  href,
}: {
  href: string;
  label: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={cn("p-2", {
          "font-semibold underline": pathname.startsWith(href),
        })}
      >
        {label}
      </Link>
    </li>
  );
};

const Menu = () => {
  const menuData = [
    {
      label: "All",
      href: "/notes",
      active: true,
    },
    {
      label: "Most Downloaded",
      href: "/notes/most-downloaded",
      active: false,
    },
    {
      label: "Recent Uploads",
      href: "/notes/recent-uploads",
      active: false,
    },
  ];
  return (
    <div className="my-4">
      <ul className="flex gap-2">
        {menuData.map((item) => (
          <MenuItem key={item.label} label={item.label} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
