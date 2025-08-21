import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div
      className="flex flex-col text-center p-20 mt-40 h-full w-auto items-center hover:bg-fuchsia-100 hover:rounded-3xl duration-200 mx-32"
      id="NoPage"
    >
      <div className="font-bold text-4xl py-4 text-pink-500">Oops!</div>
      <p className="py-3">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500 py-2 font-light italic">URL Not found</p>
      <p className="py-1 text-lg">Please try again!</p>

      <div className="flex flex-row text-lg text-gray-500 ">
        <div className="font-bold px-1 pb-1 underline hover:underline-offset-2 hover:bg-blue-300 hover:rounded-md hover:text-white duration-200">
          <Link to={"/home"}>Click here </Link>
        </div>{" "}
        to go back to <div className="text-pink-400 ml-1">Poodle Me Not</div>.
      </div>
    </div>
  );
};

export default NoPage;
