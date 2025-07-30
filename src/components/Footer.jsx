import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-4 md:px-8 py-4">
      <div className="flex items-center">
        <hr className="flex-grow border-t border-gray-800 dark:border-gray-200 lg:ml-32 md:ml-20" />
        <ul className="flex gap-3 md:gap-6 px-4 text-black dark:text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
