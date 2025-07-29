import React from "react";
import Khant from "../assets/Khant.jpg";
import { Progress } from "../components/ui/progress";

function About() {
  return (
    <div className="lg:flex gap-3 mt-4">
      <div className="lg:w-4/6">
        <div className="w-[87%] md:w-[80%] mx-auto">
          <h1 className="pretty-font text-3xl font-medium">Who is Khant?</h1>
          <p className="leading-relaxed mt-5">
            I am{" "}
            <span className="pretty-font font-semibold">Khant Yadanar Moe</span>
            , a 21-years old girl who want to create impressive websites. I
            started my learning journey around 2 years ago. I still remember the
            excitement I felt when I wrote my first few lines of code. <br />
            When I was a child, I used to dream about creating websites. I
            didn’t know how websites were made back then, but I always wanted to
            build something that people could use and enjoy online. That dream
            is what pushed me to start learning programming, and now I’m proud
            to say I’ve come a long way. <br />
            Over the past two years, I’ve learned to work with several
            technologies and tools. I can now build websites and web
            applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS,
            React, and Laravel, among many others. Whether it’s designing a
            responsive layout or building a full-stack web application, I enjoy
            every step of the process. <br />
            One of the things I love most about web development is that it’s
            always changing. There’s always something new to learn, and I enjoy
            the challenge of keeping up with new tools and best practices. I
            spend a lot of time improving my code, experimenting with new ideas,
            and building projects that help me grow as a developer. <br />
          </p>
          <hr className="my-3 border-t-gray-400" />
          <h1 className="pretty-font text-3xl font-medium">
            What Khant can do?
          </h1>
          <div className="lg:w-[80%] mt-5">
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span>HTML, CSS</span>
                <span>100%</span>
              </div>
              <Progress value={100} className="w-full" />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span>Bootstrap</span>
                <span>80%</span>
              </div>
              <Progress value={80} className="w-full" />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span>Tailwind</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="w-full" />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span>React</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="w-full" />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span>Laravel</span>
                <span>70%</span>
              </div>
              <Progress value={70} className="w-full" />
            </div>
          </div>
          <hr className="my-3 border-t-gray-400" />
          <h1 className="pretty-font text-3xl font-medium">
            Education Background
          </h1>
          <div className="mt-6">
            <div className="relative border-l-2 border-gray-300 pl-6">
              <div className="mb-10 relative">
                <div className="absolute -left-8 top-1 w-3 h-3 bg-gray-800 rounded-full border border-white"></div>
                <span className="text-sm text-gray-500">
                  May 2022 – Jul 2022
                </span>
                <h3 className="text-lg font-semibold">
                  Foundation Diploma in Information and Communication Technology
                </h3>
                <p className="text-gray-600">
                  JKT Digital Institute – Learned networking, hardware,
                  software, website development and Business IT.
                </p>
              </div>
              <div className="mb-10 relative">
                <div className="absolute -left-8 top-1 w-3 h-3 bg-gray-800 rounded-full border border-white"></div>
                <span className="text-sm text-gray-500">
                  Nov 2023 – Jan 2024
                </span>
                <h3 className="text-lg font-semibold">
                  PHP + Deep Dive Laravel
                </h3>
                <p className="text-gray-600">
                  Creative Coder Myanmar – Learned basic to advanced PHP and
                  Laravel.
                </p>
              </div>
              <div className="mb-10 relative">
                <div className="absolute -left-8 top-1 w-3 h-3 bg-gray-800 rounded-full border border-white"></div>
                <span className="text-sm text-gray-500">
                  Dec 2023 – Mar 2024
                </span>
                <h3 className="text-lg font-semibold">
                  Professional Website Developer
                </h3>
                <p className="text-gray-600">
                  Fairway Technology – Learned how to create fullstack website
                  and understand the flow clearly.
                </p>
              </div>
              <div className="mb-10 relative">
                <div className="absolute -left-8 top-1 w-3 h-3 bg-gray-800 rounded-full border border-white"></div>
                <span className="text-sm text-gray-500">
                  Oct 2024 – Jan 2025
                </span>
                <h3 className="text-lg font-semibold">
                  Frontend (React) Zoom class
                </h3>
                <p className="text-gray-600">
                  Creative Coder Myanmar – Learned how to build a website with
                  better performance.
                </p>
              </div>
            </div>
          </div>
          <hr className="my-3 border-t-gray-400" />
        </div>
      </div>
      <div className="lg:w-2/6 hidden lg:flex justify-end items-start">
        <div className="sticky top-32">
          <img
            src={Khant}
            alt=""
            className="w-[400px] h-[470px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
