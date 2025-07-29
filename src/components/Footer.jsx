import React from "react";

function Footer() {
  return (
    <div className="px-4 md:px-8 py-4">
      <div className="flex items-center">
        <hr className="flex-grow border-t border-gray-800 lg:ml-32 md:ml-20" />
        <ul className="flex gap-3 md:gap-6 px-4 text-black">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
