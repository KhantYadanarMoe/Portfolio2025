import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Background from "../assets/bg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        {/* Text Section */}
        <motion.div
          className="md:w-3/5 mt-8 md:mb-6 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="md:w-2/5 px-3 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full md:w-[87%] flex flex-col justify-center gap-10">
            {[
              { label: "About", to: "/about", align: "start" },
              { label: "Projects", to: "/projects", align: "end" },
              { label: "Contact", to: "/contact", align: "start" },
            ].map(({ label, to, align }, index) => (
              <Link to={to} key={label}>
                <motion.div
                  className={`flex justify-${align}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  <div
                    className="w-40 h-16 cursor-pointer select-none
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
                    {label}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
