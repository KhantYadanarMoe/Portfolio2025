import React from "react";
import Logo from "../assets/Logo.jpg";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  return (
    <div className="px-5 py-5 md:px-7 md:py-7 lg:px-10 lg:py-6 md:mx-3 md:my-3 flex items-center justify-between sticky top-0 bg-white z-50">
      <img src={Logo} alt="" className="w-8 h-8 md:w-12 md:h-12 object-cover" />
      <div className="flex items-center gap-4 md:gap-5 pr-2">
        <div>
          <a href="" className="cursor-pointer">
            <Sun />
          </a>
          {/* <Moon size={20} /> */}
        </div>
        <a href="resume.pdf" className="hidden md:block" download>
          <button class="resume bg-none border-none font-medium px-3 py-1.5 text-base">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
