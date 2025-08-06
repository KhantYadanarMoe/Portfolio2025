import React, { useContext } from "react";
import LogoLight from "../assets/LogoLight.png";
import LogoDark from "../assets/LogoDark.png";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "@/Contexts/ThemeContext";
import { motion } from "framer-motion";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const logoSrc = theme === "light" ? LogoLight : LogoDark;
  return (
    <motion.div
      className="px-5 py-5 md:px-7 md:py-7 lg:px-12 lg:py-6 flex items-center justify-between sticky top-0 bg-white dark:bg-[#2a2a2a] text-black dark:text-gray-200 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={logoSrc}
        alt=""
        className="w-8 h-8 md:w-12 md:h-12 object-cover"
      />
      <div className="flex items-center gap-4 md:gap-5 pr-2">
        <button onClick={toggleTheme} className="text-black dark:text-white">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        {/* Change link to download */}
        <a
          href="/resume.pdf"
          className="hidden md:block"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button class="resume bg-none border-none font-medium px-3 py-1.5 text-base">
            Resume
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default Navbar;
