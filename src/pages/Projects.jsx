import React from "react";
import { Button } from "../components/ui/button";
import { FaGithub } from "react-icons/fa";
import Project from "../assets/Project.png";
import { GlobeLock } from "lucide-react";

function Projects() {
  return (
    <div className="w-[92%] md:w-[80%] mx-auto">
      <div>
        <h1 className="pretty-font text-4xl text-center font-medium text-[#3A2E16] dark:text-white">
          Khant's Works
        </h1>
        <p className="text-gray text-center mt-3">
          Here are the projects I had done in case you want to know what I can
          do.
        </p>
        <hr className="border-t-gray-400 mx-8 my-8" />
      </div>
      <div>
        <div className="lg:flex items-center gap-3 my-4">
          <div className="lg:w-2/5">
            <img
              src={Project}
              alt=""
              className="w-80 md:w-96 lg:w-[90%] mx-auto"
            />
          </div>
          <div className="lg:w-3/5">
            <h1 className="pretty-font text-2xl font-bold">Mote Sine</h1>
            <div className="flex flex-wrap py-3 gap-2">
              <span className="px-2 py-1 bg-[#FF2D20] text-[#ffffff] rounded-md text-xs">
                Laravel
              </span>
              <span className="px-2 py-1 bg-[#61DAFB] text-[#000000] rounded-md text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-[#F7DF1E] text-[#000000] rounded-md text-xs">
                Javascript
              </span>
              <span className="px-2 py-1 bg-[#38BDF8] text-[#000000] rounded-md text-xs">
                Tailwind
              </span>
              <span className="px-2 py-1 bg-[#9C27B0] text-[#ffffff] rounded-md text-xs">
                Framer-motion
              </span>
              <span className="px-2 py-1 bg-[#1E1E2F] text-[#ffffff] rounded-md text-xs">
                Shadcn
              </span>
            </div>
            <p className="text-sm text-gray leading-relaxed">
              Mote Sine is a Burmese restaurant website which located in NYC.
              The purpose of this website is to bring the taste of home to
              Burmese people. You can order Burmese foods and local products
              from this website. You can also reserve a table for the restaurant
              through this. You can also check your order histories and status.
              You can give reviews and leave contact messages if there is
              something you want to suggest us. <br />
              As an admin, you can check the performance of the restaurant
              through admin dashboard. You can create menus, products, job
              posts. You can also share about the restaurant through blogs
              feature. You can receive orders and reservations. You can check
              the applications for jobs and partnership programs. You can also
              handle and adjust everything like hero images, logo, opening
              hours, and order accepting type by yourself.
              <br />
              It is fully responsive and close to real life project. Over 35
              pages with rich features as same as the features you will find in
              normal e-commerce website.{" "}
            </p>
            <div className="flex gap-2 items-center mt-3">
              <Button
                variant="outline"
                className="border border-gray-700 dark:border-gray-200"
              >
                <a
                  href="https://motesine.com"
                  className="flex gap-2 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeLock /> Live Demo
                </a>
              </Button>
              <Button
                variant="outline"
                className="border border-gray-700 dark:border-gray-200"
              >
                <a
                  href="https://github.com/KhantYadanarMoe/MoteSine"
                  className="flex gap-2 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Github
                </a>
              </Button>
            </div>
          </div>
        </div>
        {/* <hr className="border-t-gray-400 my-6" />
        <div className="lg:flex items-center gap-3 my-4">
          <div className="order-1 lg:order-2 lg:w-2/5">
            <img
              src={Project}
              alt=""
              className="w-80 md:w-96 lg:w-[90%] mx-auto"
            />
          </div>
          <div className="order-2 lg:order-1 lg:w-3/5">
            <h1 className="pretty-font text-2xl font-bold">Mote Sine</h1>
            <div className="flex flex-wrap py-3 gap-2">
              <span className="px-2 py-1 bg-[#FF2D20] text-[#ffffff] rounded-md text-xs">
                Laravel
              </span>
              <span className="px-2 py-1 bg-[#61DAFB] text-[#000000] rounded-md text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-[#F7DF1E] text-[#000000] rounded-md text-xs">
                Javascript
              </span>
              <span className="px-2 py-1 bg-[#38BDF8] text-[#000000] rounded-md text-xs">
                Tailwind
              </span>
              <span className="px-2 py-1 bg-[#9C27B0] text-[#ffffff] rounded-md text-xs">
                Framer-motion
              </span>
              <span className="px-2 py-1 bg-[#1E1E2F] text-[#ffffff] rounded-md text-xs">
                Shadcn
              </span>
            </div>
            <p className="text-sm text-gray leading-relaxed">
              Mote Sine is a Burmese restaurant website which located in NYC.
              The purpose of this website is to bring the taste of home to
              Burmese people. You can order Burmese foods and local products
              from this website. You can also reserve a table for the restaurant
              through this. You can also check your order histories and status.
              You can give reviews and leave contact messages if there is
              something you want to suggest us. <br />
              As an admin, you can check the performance of the restaurant
              through admin dashboard. You can create menus, products, job
              posts. You can also share about the restaurant through blogs
              feature. You can receive orders and reservations. You can check
              the applications for jobs and partnership programs. You can also
              handle and adjust everything like hero images, logo, opening
              hours, and order accepting type by yourself.
              <br />
              It is fully responsive and close to real life project. Over 35
              pages with rich features as same as the features you will find in
              normal e-commerce website.{" "}
            </p>
            <div className="flex gap-2 items-center mt-3">
              <Button variant="outline" className="border border-gray-700">
                <a
                  href="https://motesine.com"
                  className="flex gap-2 items-center"
                >
                  <GlobeLock /> Live Demo
                </a>
              </Button>
              <Button variant="outline" className="border border-gray-700">
                <FaGithub /> Github
              </Button>
            </div>
          </div>
        </div>
        <hr className="border-t-gray-400 my-6" /> */}
      </div>
    </div>
  );
}

export default Projects;
