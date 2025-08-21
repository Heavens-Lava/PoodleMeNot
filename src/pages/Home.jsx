import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Import components
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

// import image
import homepic from "../assets/images/Forgetmenot4.jpg";

const Home = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
            <HeroImage
              title="Welcome to "
              title2="Poodle Me Not"
              image={homepic}
            />
            <HomeContent />
            <Footer />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
