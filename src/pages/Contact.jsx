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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div>
        <Navbar />
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
            <div className="py-4">5425434242</div>

            <div>
              <div className="text-black py-4 font-bold">
                Send a message to Kate!
              </div>
              <form className="flex flex-col py-4 m-10 w-[%50]">
                <input className="h-10" type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Messsage</button>
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
