import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
// Import image
import pricingPic from "../assets/images/pricingDog.jpg";

const Pricing = () => {
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
          title="Pricing"
          title2=""
          image={pricingPic}
          heroPictureCSS="heroPicture rounded-2xl mx-auto h-[80vh] object-cover"
        />
        <div className="w-full h-[100vh]">
          <div className="pt-36 text-center font-bold text-lg">
            Pricing Page
          </div>
          <div className="pt-16 px-16 text-lg font-bold">Pricing</div>
          <div className="pt-10 px-16 text-lg">
            Kate's Dog Grooming provides quality services at some of the lowest
            prices in the area.
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Pricing;
