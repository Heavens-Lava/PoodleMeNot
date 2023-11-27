import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// import images/icons
import navbarIcon from "../assets/images/dogpaw.gif";
import dogHomeIcon from "../assets/icons/doghomeicon.png";
import aboutUsIcon from "../assets/icons/about.png";
import dogServicesIcon from "../assets/icons/services.png";
import pricingIcon from "../assets/icons/price.png";
import contactIcon from "../assets/icons/contact.png";

const Navbar = () => {
  // NavBar constants

  // create nav useState, 'nav' initial state set to false
  const [nav, setNav] = useState(false);
  // create json array 'links', use to display each link
  const links = [
    {
      id: 1,
      link: "home",
      icon: dogHomeIcon,
      size: "2.2%",
    },
    {
      id: 2,
      link: "about us",
      icon: aboutUsIcon,
      size: "2.2%",
    },
    {
      id: 3,
      link: "services",
      icon: dogServicesIcon,
      size: "2.2%",
    },
    {
      id: 4,
      link: "pricing",
      icon: pricingIcon,
      size: "2.2%",
    },
    {
      id: 5,
      link: "contact",
      icon: contactIcon,
      size: "2.2%",
    },
  ];

  // list allows the items to be layed out side by side
  return (
    <nav className="navBarParent z-50 bg-white w-[96%] flex py-6 px-10 justify-between items-center h-20 shadow-xl rounded-md mt-10 ml-6 mr-10 text-black fixed opacity-80 border-sky-400 border-4 hover:border-[5px] hover:border-blue-500 hover:opacity-100 hover:shadow-lg duration-200">
      <div>
        <img
          className="navbarIcon fixed ml-3"
          src={navbarIcon}
          width={"2.5%"}
        />
        <h1 className="WebsiteNameText text-4xl font-bold pl-16 text-fuchsia-600 font-AlexBrush">
          <Link to={"/home"} smooth duration={500}>
            Poodle Me Not
          </Link>
        </h1>
      </div>

      {/* when screen size is medium or bigger, will display flex, else will be hidden on mobile */}
      <ul className="navBarLinks hidden md:flex">
        {/* create a loop for each item in the 'links' array, then declare item.value(such as link.id) */}
        {/* this  '{links.map((link) => {}' can also work. 'link' can be named anything, then to get values, type link.id, link.link */}
        {links.map(({ id, link, icon, size }) => (
          <li
            //   for each key, get the 'link' name
            key={id}
            className="navbarLink px-14 cursor-pointer capitalize font-medium text-black text-lg hover:bg-fuchsia-300 hover:rounded-lg py-3 "
          >
            {/* display link name while adding "/"" to the link name to redirect to that page*/}
            <Link to={"/" + link} smooth duration={500}>
              {/* link icon */}
              <img
                // Remove the flex from the icon, and set it on the same line, must have text-right in navbarLink
                className="fixed ml-[-40px] mt-[-2px]"
                src={icon}
                alt=""
                width={size}
              />
              {/* purely the link name, no backslash */}
              <div className="hover:underline hover:font-bold hover:scale-110 hover:text-white duration-200">
                {" "}
                {link}
              </div>
            </Link>
          </li>
        ))}
        {/* end loop */}
      </ul>
    </nav>
  );
};

export default Navbar;
