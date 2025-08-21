<<<<<<< HEAD
import React, { useEffect } from "react";

// import framer-motion
import { motion } from "framer-motion";

// Import Components
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
// Import image
import aboutPic from "../assets/images/aboutus.jpg";

const About = () => {
  return (
    <div>
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
            title="About"
            title2=""
            image={aboutPic}
            heroPictureCSS="heroPicture rounded-2xl mx-auto h-[70vh] object-cover"
          />
          <div className="pt-12 text-center font-bold text-lg w-full h-[50vh]">
            About Us Page
          </div>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
=======
import React, { useEffect } from "react";

// import framer-motion
import { motion } from "framer-motion";

// Import Components
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
// Import image
import aboutPic from "../assets/images/aboutus.jpg";

const About = () => {
  return (
    <div>
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
            title="About"
            title2=""
            image={aboutPic}
            heroPictureCSS="heroPicture rounded-2xl mx-auto h-[70vh] object-cover"
          />
          <div className="pt-12 text-center font-bold text-lg w-full h-[50vh]">
            About Us Page
          </div>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
>>>>>>> e91924f3822dd18eaf8f72619c1cc2f6843155b6
