import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Background from "../assets/bg.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative bg-white dark:bg-[#2a2a2a]">
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          zIndex: -1,
        }}
      ></div>
      <div className="md:flex items-center md:h-[73vh] px-6 md:px-12">
        <div className="md:w-3/5 mt-8 md:mb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-medium pretty-font">
            Khant Yadanar Moe
          </h1>
          <h4 className="text-base py-2 font-medium text-gray pretty-font">
            Fullstack Developer
          </h4>
          <p className="text-sm md:text-base text-gray py-2">
            I build modern and responsive user interfaces with HTML, CSS,
            Bootstrap, and Tailwind CSS, bringing them to life using JavaScript
            and React. Then, use Laravel to build scalable backend systems.
            Creating websites is not just coding for me — it's an art I love for
            life.
          </p>
          <div className="flex gap-4 py-3">
            <a
              href="https://www.facebook.com/share/15eQmj5Eab/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6 text-gray-800 dark:text-white" />
            </a>
            <a
              href="https://www.instagram.com/khant__18?igsh=NnZvOTU2bzN0aTZn&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 text-gray-800 dark:text-white" />
            </a>
            <a
              href="https://github.com/KhantYadanarMoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-gray-800 dark:text-white" />
            </a>
          </div>
        </div>
        <div className="md:w-2/5 px-3 flex items-center justify-center">
          <div class="relative w-full md:w-[87%] flex flex-col justify-center gap-10">
            <Link to="/about">
              <div class="flex justify-start">
                <div
                  class="w-40 h-16 cursor-pointer select-none
                active:translate-y-2 
                active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#32281F] 
                dark:active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#ffffff] 
                active:border-b-[0px] 
                transition-all duration-150 
                [box-shadow:0_10px_0_0_#32281F,0_15px_0_0_#32281F] 
                dark:[box-shadow:0_10px_0_0_#ffffff,0_15px_0_0_#FFFFFF]
                rounded-full border border-black dark:border-white
                flex justify-center items-center text-black dark:text-white font-bold text-lg bg-white dark:bg-[#2A2A2A]"
                >
                  About
                </div>
              </div>
            </Link>

            <Link to="/projects">
              <div class="flex justify-end">
                <div
                  class="w-40 h-16 cursor-pointer select-none
                active:translate-y-2 
                active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#32281F] 
                dark:active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#ffffff] 
                active:border-b-[0px] 
                transition-all duration-150 
                [box-shadow:0_10px_0_0_#32281F,0_15px_0_0_#32281F] 
                dark:[box-shadow:0_10px_0_0_#ffffff,0_15px_0_0_#FFFFFF]
                rounded-full border border-black dark:border-white
                flex justify-center items-center text-black dark:text-white font-bold text-lg bg-white dark:bg-[#2A2A2A]"
                >
                  Projects
                </div>
              </div>
            </Link>

            <Link to="/contact">
              <div class="flex justify-start">
                <div
                  class="w-40 h-16 cursor-pointer select-none
                active:translate-y-2 
                active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#32281F] 
                dark:active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#ffffff] 
                active:border-b-[0px] 
                transition-all duration-150 
                [box-shadow:0_10px_0_0_#32281F,0_15px_0_0_#32281F] 
                dark:[box-shadow:0_10px_0_0_#ffffff,0_15px_0_0_#FFFFFF]
                rounded-full border border-black dark:border-white
                flex justify-center items-center text-black dark:text-white font-bold text-lg bg-white dark:bg-[#2A2A2A]"
                >
                  Contact
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
