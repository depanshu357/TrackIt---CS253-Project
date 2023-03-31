import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white bg-black" >

      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00d25b] font-bold p-2">
          MASTER YOUR SPENDING GOALS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white">
          Insights for your finances
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Fast, flexible webapp to

            <Typed
              className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2"
              strings={["track expenses", "view analytics"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          {" "}
          Control your spending, achieve your financial goals - with our expense
          tracker app
        </p>
        <br />
        <div className="flex  justify-center space-x-16">
          <Link to="/signup">
            <button className="-m-2  w-[200px] border font-semibold border-[#3A98B9] rounded-md font-medium my-6  py-3 text-[#00d25b] hover:bg-[#00d25b] hover:text-black hover:border-black ">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="-m-2  w-[200px] border font-semibold border-[#3A98B9] rounded-md font-medium my-6  py-3 text-[#00d25b] hover:bg-[#00d25b] hover:text-black hover:border-black">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default Hero;