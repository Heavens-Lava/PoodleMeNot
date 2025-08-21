import React from "react";

// import framer-motion
import { AnimatePresence } from "framer-motion";

// Import pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    // framer-motion wrapper (AnimatePresence) set to wait to allow wait animation to happen before going to next page
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          {/* create path page for homepage */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
};

export default App;
