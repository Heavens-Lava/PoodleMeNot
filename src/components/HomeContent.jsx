import React from "react";
import dogpic from "../assets/images/pexels-marcelo-miranda-1407167.jpg";
import dogpic2 from "../assets/images/doghome2.jpg";

const HomeContent = () => {
  return (
    <div>
      <div className="w-full h-1/2 m-10 items-center justify-center">
        <div className="flex homeTitle text-4xl text-blue-400 font-extrabold underline underline-offset-[12px] text-center justify-center">
          Quality Dog Breeding services
        </div>
        <div className="homeBody m-6 text-2xl text-center px-10 py-10 font-medium">
          Poodle Me Not is a local dog grooming service in Laveen, Arizona. Kate
          Macy is an experienced dog breeder who specializes in studding dogs.
          Kate works with all types of dogs such as ... Kate works in the
          home...
        </div>
      </div>

      <div className="dogPictureContent mb-96 mt-16 relative items-center justify-center h-full  md:flex-row rounded-2xl">
        <div className="flex pt-32 justify-center text-center px-32 text-2xl w-1/2 items-center font-light">
          Poodle Me Not is a local dog grooming service in Laveen, Arizona. Kate
          Macy is an experienced dog breeder who specializes in studding dogs.
        </div>
        <div className="dogImageSection ">
          <img
            // round image corners, apply middle margin to picture
            className="dogPicture rounded-lg duration-300 ease-in-out shadow-md hover:rounded-2xl hover:shadow-2xl hover:scale-[1.05] mx-auto h-[50vh] absolute top-[-3px] right-14 object-cover"
            src={dogpic}
            alt="poodle1"
            // resize image to fit
            // width={"30%"}
            // height={"30%"}
          />
          <img
            // round image corners, apply middle margin to picture
            className="dogPicture rounded-lg duration-300 ease-in-out shadow-md hover:rounded-2xl hover:shadow-2xl hover:scale-[1.05] mx-auto h-[50vh] w-[%50] absolute top-[30px] right-[420px]"
            src={dogpic2}
            alt="poodle1"
            // resize image to fit
            // width={"30%"}
            // height={"30%"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
