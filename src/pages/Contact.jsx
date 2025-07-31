import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

function Contact() {
  return (
    <div className="md:flex gap-3 items-center px-6 md:px-12 py-4 md:py-2">
      {/* Left Text Info */}
      <motion.div
        className="md:w-2/5"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl pretty-font">Khant for work.</h1>
        <p className="text-gray text-sm py-4">
          Do you want to build your business in a smarter way? Do you want to
          sell your products through a website that you can handle all by
          yourself? I am here to fulfill your tech needs.
        </p>
        <div className="py-2">
          <p className="font-bold text-lg">Email</p>
          <a href="mailto:khantyadanarmoe18@gmail.com" className="text-gray">
            khantyadanarmoe18@gmail.com
          </a>
        </div>
        <div className="py-2">
          <p className="font-bold text-lg">Phone</p>
          <a href="tel:+959885959170" className="text-gray">
            +959 885 959 170
          </a>
        </div>
        <hr className="block md:hidden mt-3 border-t-gray-500" />
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="md:w-3/5 mt-3 md:mt-0"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="md:w-[85%] mx-auto">
          <motion.h1
            className="text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Contact Us.
          </motion.h1>
          <motion.p
            className="text-sm text-gray py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Contact us now to build your business online.
          </motion.p>

          <form action="" className="py-3">
            <motion.div
              className="my-2"
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <Label htmlFor="name" className="text-base font-medium">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-1 bg-white text-black placeholder-gray-500 border border-gray-500 focus:border-blue-600 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
              />
            </motion.div>

            <div className="md:flex gap-2">
              <motion.div
                className="my-2 md:w-1/2"
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <Label htmlFor="email" className="text-base font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  className="mt-1 bg-white text-black placeholder-gray-500 border border-gray-500 focus:border-blue-600 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
                />
              </motion.div>

              <motion.div
                className="my-2 md:w-1/2"
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <Label htmlFor="phone" className="text-base font-medium">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone"
                  className="mt-1 bg-white text-black placeholder-gray-500 border border-gray-500 focus:border-blue-600 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
                />
              </motion.div>
            </div>

            <motion.div
              className="my-2"
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <Label htmlFor="message" className="text-base font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                type="text"
                name="message"
                placeholder="Write Something..."
                className="mt-1 bg-white text-black placeholder-gray-500 border border-gray-500 focus:border-blue-600 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
              />
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <Button className="w-full my-4 bg-[#392E16] dark:bg-gray-50 dark:hover:bg-gray-200 hover:bg-[#211a09] duration-300">
                Submit
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
