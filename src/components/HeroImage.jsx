import React from "react";

// This component is a reusable component for each page

// pass props to create reusable properties in an element
const HeroImage = (props) => {
  return (
    // use bg-black to see space this content takes
    <div className="heroSceneContent items-center justify-center h-full md:flex-row rounded-2xl relative">
      <div className="">
        <img
          // round image corners, apply middle margin to picture
          className={props.heroPictureCSS}
          src={props.image}
          alt="forgetMeNotFlower"
          // resize image to fit
          width={"100%"}
          height={"50%"}
        />
      </div>
      <div className="heroTitle block text-white w-[700px] leading-[110px] text-center text-7xl font-semibold z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {props.title}
        <span className="heroTitle2 text-sky-300 font-bold text-8xl">
          {props.title2}
        </span>
      </div>
    </div>
  );
};

export default HeroImage;