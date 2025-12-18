import React from "react";
import { Button } from "../components/ui/button";
import { FaGithub } from "react-icons/fa";
import Project from "../assets/Project.png";
import Project2 from "../assets/Project2.png";
import { GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

function Projects() {
  return (
    <div className="w-[92%] md:w-[80%] mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
      >
        <h1 className="pretty-font text-4xl text-center font-medium text-[#3A2E16] dark:text-white">
          Khant's Works
        </h1>
        <p className="text-gray text-center mt-3">
          Here are the projects I had done in case you want to know what I can
          do.
        </p>
        <hr className="border-t-gray-400 mx-8 my-8" />
      </motion.div>

      <div>
        <div className="lg:flex flex-col lg:flex-row items-center gap-3 my-8">
          {/* Image animation from left */}
          <motion.div
            className="lg:w-2/5 order-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src={Project}
              alt="Mote Sine Project"
              className="w-80 md:w-96 lg:w-[90%] mx-auto"
            />
          </motion.div>

          {/* Text content animation from right */}
          <motion.div
            className="lg:w-3/5 order-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            <h1 className="pretty-font text-2xl font-bold">Mote Sine</h1>

            <div className="flex flex-wrap py-3 gap-2">
              {[
                "Laravel",
                "React",
                "Javascript",
                "Tailwind",
                "Framer-motion",
                "Shadcn",
              ].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md"
                  style={{
                    backgroundColor: [
                      "#FF2D20",
                      "#61DAFB",
                      "#F7DF1E",
                      "#38BDF8",
                      "#9C27B0",
                      "#1E1E2F",
                    ][i],
                    color: i === 2 || i === 3 ? "#000" : "#fff",
                  }}
                  variants={fadeUp}
                  custom={i + 2}
                  initial="hidden"
                  animate="visible"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="text-sm text-gray leading-relaxed"
              variants={fadeUp}
              custom={7}
              initial="hidden"
              animate="visible"
            >
              Mote Sine is a Burmese restaurant website located in NYC. The
              purpose of this website is to bring the taste of home to Burmese
              people. You can order Burmese foods and local products, reserve a
              table, check your order history, give reviews, and more.
              <br />
              Admins can manage everything from menus and blogs to applications
              and business settings in a powerful dashboard.
              <br />
              It’s a fully responsive, real-world e-commerce-style platform with
              over 35 pages.
            </motion.p>

            <motion.div
              className="flex gap-2 items-center mt-3"
              variants={fadeUp}
              custom={8}
              initial="hidden"
              animate="visible"
            >
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
            </motion.div>
          </motion.div>
        </div>
        <div className="lg:flex flex-col lg:flex-row items-center gap-3 my-8">
          <motion.div
            className="lg:w-2/5 order-1 lg:order-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src={Project2}
              alt="Mote Sine Project"
              className="w-80 md:w-96 lg:w-[90%] mx-auto"
            />
          </motion.div>
          <motion.div
            className="lg:w-3/5 order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            <h1 className="pretty-font text-2xl font-bold">Burma Web Campus</h1>

            <div className="flex flex-wrap py-3 gap-2">
              {["Laravel", "React", "Javascript", "Tailwind", "Shadcn"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md"
                    style={{
                      backgroundColor: [
                        "#FF2D20",
                        "#61DAFB",
                        "#F7DF1E",
                        "#38BDF8",
                        "#1E1E2F",
                      ][i],
                      color: i === 2 || i === 3 ? "#000" : "#fff",
                    }}
                    variants={fadeUp}
                    custom={i + 2}
                    initial="hidden"
                    animate="visible"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>

            <motion.p
              className="text-sm text-gray leading-relaxed"
              variants={fadeUp}
              custom={7}
              initial="hidden"
              animate="visible"
            >
              Burma Web Campus is a website development learning website intend
              for teaching Website Development and sharing knowledge for it.You
              can learn web dev courses, check progress, take final quizzes, get
              certificates, comment on each sub-units, enroll courses, read
              blogs, contact, leave reviews, subscribe and more. You can also
              edit profile info, change password, check courses list you
              enrolled, certificates you got, set default payment and check
              billing info.
              <br />
              Admins can manage everything such as courses, blogs, categories,
              purchase histories, users, subscribers, reviews, and contact
              messages.
              <br />
              It’s a fully responsive, real-world learning management platform
              with over 25 pages.
            </motion.p>

            <motion.div
              className="flex gap-2 items-center mt-3"
              variants={fadeUp}
              custom={8}
              initial="hidden"
              animate="visible"
            >
              <Button
                variant="outline"
                className="border border-gray-700 dark:border-gray-200"
              >
                <a
                  href="https://burmawebcampus.site"
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
                  href="https://github.com/KhantYadanarMoe/BurmaWebCampus"
                  className="flex gap-2 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Github
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
