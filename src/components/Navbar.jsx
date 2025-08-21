import React, { useState } from "react";
import { Link } from "react-router-dom";

// import images/icons
import navbarIcon from "../assets/images/dogpaw.gif";
import dogHomeIcon from "../assets/icons/doghomeicon.png";
import aboutUsIcon from "../assets/icons/about.png";
import dogServicesIcon from "../assets/icons/services.png";
import pricingIcon from "../assets/icons/price.png";
import contactIcon from "../assets/icons/contact.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", icon: dogHomeIcon },
    { id: 2, link: "about us", icon: aboutUsIcon },
    { id: 3, link: "services", icon: dogServicesIcon },
    { id: 4, link: "pricing", icon: pricingIcon },
    { id: 5, link: "contact", icon: contactIcon },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white flex items-center justify-between py-4 px-6 shadow-xl rounded-2xl border-2 border-sky-400 opacity-90 hover:border-4 hover:border-blue-500 hover:opacity-100 hover:shadow-2xl duration-200">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <img src={navbarIcon} alt="logo" className="w-10 h-10 object-contain" />
        <h1 className="text-2xl md:text-3xl font-bold text-fuchsia-600 font-AlexBrush whitespace-nowrap">
          <Link to="/home">Poodle Me Not2</Link>
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-6">
        {links.map(({ id, link, icon }) => (
          <li
            key={id}
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-fuchsia-300 hover:scale-105 transition-all duration-200"
          >
            <img src={icon} alt={`${link} icon`} className="w-5 h-5" />
            <Link
              to={`/${link}`}
              className="capitalize font-medium text-black hover:underline hover:font-bold"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden cursor-pointer" onClick={() => setNav(!nav)}>
        <div className="w-6 h-1 bg-black my-1 rounded"></div>
        <div className="w-6 h-1 bg-black my-1 rounded"></div>
        <div className="w-6 h-1 bg-black my-1 rounded"></div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center shadow-xl rounded-b-xl md:hidden">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="flex items-center gap-2 px-6 py-4 w-full justify-center hover:bg-fuchsia-300 transition-all duration-200"
            >
              <img src={icon} alt={`${link} icon`} className="w-5 h-5" />
              <Link
                to={`/${link}`}
                onClick={() => setNav(false)}
                className="capitalize font-medium text-black hover:font-bold"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
