<<<<<<< HEAD
import React from "react";

import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

// Import image
import contactPic from "../assets/images/contactDog2.jpg";

const Contact = () => {
  return (
    <motion.div
      // start animation at 0, end it at 1, and exit animation at 0
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div>
        <Navbar />
        {/* passing properties into props of HeroImage component to make it dynamic */}
        <HeroImage
          title="Contact"
          title2=""
          image={contactPic}
          heroPictureCSS="heroPicture rounded-2xl mx-auto h-[40vh] object-cover"
        />
        <div className="w-full h-[100vh]">
          <div className="pt-36 text-center font-bold text-xl">
            Contact Page
          </div>
          <div className="contactBody text-left pl-20 text-lg">
            <div className="font-bold text-pink-500 py-4">
              Get in touch with us
            </div>

            <div className="font-bold py-4">Phone Number:</div>
            <div className=" py-4">5425434242</div>

            <div className="">
              <div className="text-black py-4 font-bold">
                Send a message to Kate!
              </div>
              <form className="flex flex-col py-4 m-10 w-[%50]">
                <input className="h-10" type="text" placeholder="Name" />
                <input className="" type="text" placeholder="Email" />
                <input className="" type="text" placeholder="Subject" />
                <textarea
                  className=""
                  placeholder="Message"
                  id=""
                  rows="4"
                ></textarea>
                <button className="">Send Messsage</button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Contact;
=======
import React from "react";

import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

// Import image
import contactPic from "../assets/images/contactDog2.jpg";

const Contact = () => {
  return (
    <motion.div
      // start animation at 0, end it at 1, and exit animation at 0
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div>
        <Navbar />
        {/* passing properties into props of HeroImage component to make it dynamic */}
        <HeroImage
          title="Contact"
          title2=""
          image={contactPic}
          heroPictureCSS="heroPicture rounded-2xl mx-auto h-[40vh] object-cover"
        />
        <div className="w-full h-[100vh]">
          <div className="pt-36 text-center font-bold text-xl">
            Contact Page
          </div>
          <div className="contactBody text-left pl-20 text-lg">
            <div className="font-bold text-pink-500 py-4">
              Get in touch with us
            </div>

            <div className="font-bold py-4">Phone Number:</div>
            <div className=" py-4">5425434242</div>

            <div className="">
              <div className="text-black py-4 font-bold">
                Send a message to Kate!
              </div>
              <form className="flex flex-col py-4 m-10 w-[%50]">
                <input className="h-10" type="text" placeholder="Name" />
                <input className="" type="text" placeholder="Email" />
                <input className="" type="text" placeholder="Subject" />
                <textarea
                  className=""
                  placeholder="Message"
                  id=""
                  rows="4"
                ></textarea>
                <button className="">Send Messsage</button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Contact;
>>>>>>> e91924f3822dd18eaf8f72619c1cc2f6843155b6
