<<<<<<< HEAD
import React, { useEffect } from "react";

// import framer-motion
import { motion } from "framer-motion";

// Import components
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

// import image
import homepic from "../assets/images/Forgetmenot4.jpg";

const Home = () => {
  // var heightPercentage = 0;
  // useEffect(() => {
  //   console.log("document-height", document.documentElement.offsetHeight);
  //   console.log("window-height", window.innerHeight);
  //   heightPercentage =
  //     window.innerHeight / document.documentElement.offsetHeight;
  //   console.log(heightPercentage);
  //   return () => {};
  // }, []);

  return (
    <motion.div
      // start animation at 0, end it at 1, and exit animation at 0
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
            {/* passing properties into props of HeroImage component to make it dynamic */}
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
=======
import React, { useEffect } from "react";

// import framer-motion
import { motion } from "framer-motion";

// Import components
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

// import image
import homepic from "../assets/images/Forgetmenot4.jpg";

const Home = () => {
  // var heightPercentage = 0;
  // useEffect(() => {
  //   console.log("document-height", document.documentElement.offsetHeight);
  //   console.log("window-height", window.innerHeight);
  //   heightPercentage =
  //     window.innerHeight / document.documentElement.offsetHeight;
  //   console.log(heightPercentage);
  //   return () => {};
  // }, []);

  return (
    <motion.div
      // start animation at 0, end it at 1, and exit animation at 0
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
            {/* passing properties into props of HeroImage component to make it dynamic */}
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
>>>>>>> e91924f3822dd18eaf8f72619c1cc2f6843155b6
