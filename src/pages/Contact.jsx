import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

function Contact() {
  return (
    <div className="md:flex gap-3 items-center px-6 md:px-12 py-4 md:py-2">
      <div className="md:w-2/5">
        <h1 className="text-4xl pretty-font">Khant for work.</h1>
        <p className="text-gray text-sm py-4">
          Do you want to build your business in smarter way? Do you want to sell
          your products through a website that you can handle everything on your
          own? I am here for you to fulfill your tech needs.
        </p>
        <div className="py-2">
          <p className="font-bold text-lg">Email</p>
          <a href="mailto:khantyadanarmoe18@gmail.com" className="text-gray">
            khantyadanarmoe18@gmail.com
          </a>
        </div>
        <div className="py-2">
          <p className="font-bold text-lg">Phone</p>
          <a href="" className="text-gray">
            +959 885 959 170
          </a>
        </div>
        <hr className="block md:hidden mt-3 border-t-gray-500" />
      </div>
      <div className="md:w-3/5 mt-3 md:mt-0">
        <div className="md:w-[85%] mx-auto">
          <h1 className="text-3xl">Contact Us.</h1>
          <p className="text-sm text-gray py-2">
            Contact us now to build your business online.
          </p>
          <form action="" className="py-3">
            <div className="my-2">
              <Label htmlFor="name" className="text-base font-medium">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-1 border-gray-500"
              />
            </div>
            <div className="md:flex gap-2">
              <div className="my-2 md:w-1/2">
                <Label htmlFor="email" className="text-base font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  className="mt-1 border-gray-500"
                />
              </div>
              <div className="my-2 md:w-1/2">
                <Label htmlFor="phone" className="text-base font-medium">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone"
                  className="mt-1 border-gray-500"
                />
              </div>
            </div>
            <div className="my-2">
              <Label htmlFor="message" className="text-base font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                type="text"
                name="message"
                placeholder="Write Something..."
                className="mt-1 border-gray-500"
              ></Textarea>
            </div>
            <Button className="w-full my-4 bg-[#392E16] hover:bg-[#211a09] duration-300">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
