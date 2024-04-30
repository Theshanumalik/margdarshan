"use client";
import Logo from "./logo";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaCalendarMinus,
  FaLightbulb,
  FaPeopleGroup,
} from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const features = [
  {
    title: "Communities",
    description: "Join a community of students and teachers",
    icon: <FaPeopleGroup />,
    href: "/app/communities",
  },
  {
    title: "Allumni",
    description: "Connect with your seniors and get their guidance",
    icon: <FaPeopleGroup />,
    href: "/app/allumni",
  },
  {
    title: "Events",
    description: "Get the latest updates on college events and innovations",
    icon: <FaCalendarMinus />,
    href: "/app/events",
  },
  {
    title: "Contributions",
    description:
      "Contribute to the community by sharing your innovative ideas and projects",
    icon: <FaLightbulb />,
    href: "/app/contributions",
  },
];
const Navbar = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <header className="h-[100px] flex items-center justify-between">
      <Logo />
      <nav className="gap-1 hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Study Materials</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-2 w-48 p-2">
                  <li>
                    <Link
                      href={"/"}
                      className="p-2 hover:bg-slate-100 rounded-md transition-colors block"
                    >
                      Notes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="p-2 hover:bg-slate-100 rounded-md transition-colors block"
                    >
                      Sayllabus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="p-2 hover:bg-slate-100 rounded-md transition-colors block"
                    >
                      Old Papers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="p-2 hover:bg-slate-100 rounded-md transition-colors block"
                    >
                      Roadmaps
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-6 p-4 gap-2 w-[400px] md:w-[500px] lg:w-[600px]">
                  {features.map((feature) => (
                    <li
                      key={feature.title}
                      className="flex items-center gap-2 col-span-3 hover:bg-slate-100 rounded-md p-3 transition-colors "
                    >
                      <Link href={feature.href}>
                        <h4 className="text-lg font-semibold flex gap-1 items-center">
                          {feature.icon}
                          {feature.title}
                        </h4>
                        <p className="text-sm">{feature.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="flex">
        <Link
          href={"#"}
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-opacity-70 transition-opacity"
        >
          <span className="lg:inline hidden">Login as Moderator</span>
          <span className="lg:hidden inline">Login</span>
        </Link>
        <Link
          href={"#"}
          className="ml-2 bg-logo px-4 py-2 rounded-md hover:bg-opacity-70 transition-opacity"
        >
          Register
        </Link>
        <div className="block md:hidden lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant={"ghost"}>
                <FaBars />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div>Hello</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
