import React from "react";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
// Import image
import servicesPic from "../assets/images/servicesDog.jpg";

const Services = () => {
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
          title="Services"
          title2=""
          image={servicesPic}
          heroPictureCSS="heroPicture rounded-2xl mx-auto h-[60vh] object-cover"
        />
        <div className="w-full h-[100vh] px-20">
          <div className="pt-36 text-center font-bold text-lg">
            Services Page
          </div>
          <div className="px-4 text-4xl font-bold py-4 ">Services</div>
          <li className="px-4 text-lg py-2">Studding</li>
          <li className="px-4 text-lg py-2">Cleaning</li>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Services;
