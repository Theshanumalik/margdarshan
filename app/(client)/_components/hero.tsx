import Image from "next/image";
import Link from "next/link";
import LogoSrc from "@/app/icon.svg";
import { FaBookBookmark, FaPeopleGroup } from "react-icons/fa6";

const Hero = () => {
  return (
    <main className="grid place-items-center w-full max-w-xl mx-auto">
      <Image src={LogoSrc} alt="Logo" width={200} height={200} />
      <h1 className="text-4xl font-bold text-center">
        Tired of Feeling Like a Lost Freshman?
      </h1>
      <p className="text-lg text-center my-3 text-gray-600">
        Navigate College Like a Boss with Margdarshan <br /> We've Got the
        Notes, the Professor Intel, and Enough Memes to Fuel All-Nighters.
      </p>
      <div className="flex gap-1 items-center">
        <Link
          href={"/login"}
          className="bg-logo px-6 py-2 rounded-md hover:bg-opacity-80 transition-opacity flex items-center gap-1"
        >
          <FaBookBookmark />
          Find Notes
        </Link>
        <Link
          href={"/register"}
          className="bg-gray-200 px-6 py-2 rounded-md hover:bg-opacity-80 transition-opacity flex items-center gap-1"
        >
          <FaPeopleGroup size={24} />
          Community
        </Link>
      </div>
    </main>
  );
};

export default Hero;
