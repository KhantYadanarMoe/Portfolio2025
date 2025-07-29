import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="md:flex items-center md:h-[70vh] px-6 md:px-12">
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
          <FaFacebook className="w-6 h-6 text-gray-800" />
          <FaInstagram className="w-6 h-6 text-gray-800" />
          <FaGithub className="w-6 h-6 text-gray-800" />
        </div>
      </div>
      <div className="md:w-2/5 px-3 flex items-center justify-center">
        <div class="relative w-full md:w-[87%] flex flex-col justify-center gap-10">
          <div class="flex justify-start">
            <div
              class="w-40 h-16 cursor-pointer select-none
                active:translate-y-2 
                active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#32281F] 
                active:border-b-[0px] 
                transition-all duration-150 
                [box-shadow:0_10px_0_0_#32281F,0_15px_0_0_#32281F] 
                rounded-full border border-black 
                flex justify-center items-center text-black font-bold text-lg"
            >
              About
            </div>
          </div>

          <div class="flex justify-end">
            <div
              class="w-40 h-16 cursor-pointer select-none
                active:translate-y-2 
                active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#32281F] 
                active:border-b-[0px] 
                transition-all duration-150 
                [box-shadow:0_10px_0_0_#32281F,0_15px_0_0_#32281F] 
                rounded-full border border-black 
                flex justify-center items-center text-black font-bold text-lg"
            >
              Projects
            </div>
          </div>

          <div class="flex justify-start">
            <div
              class="w-40 h-16 cursor-pointer select-none
                active:translate-y-2 
                active:[box-shadow:0_0px_0_0_#32281F,0_0px_0_0_#32281F] 
                active:border-b-[0px] 
                transition-all duration-150 
                [box-shadow:0_10px_0_0_#32281F,0_15px_0_0_#32281F] 
                rounded-full border border-black 
                flex justify-center items-center text-black font-bold text-lg"
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
