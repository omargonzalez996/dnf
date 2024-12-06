import React from "react";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="block mt-10">
      <div className="flex align-middle items-center justify-center">
        <h2 className="text-center text-4xl">
          More than 30 years of experience
        </h2>
      </div>
      <div className="flex align-middle items-center justify-center">
        <p className="text-center w-3/4 my-2">
          You'll never have to worry about your sprinklers again. We take care
          of installation, repairs, and upgrades. Let your water flow!
        </p>
      </div>
      <div className="flex align-middle items-center justify-center">
        <p className="text-center w-3/4 my-2">
          Since 1990, we have been providing the Dallas and Fort Worth area with
          quality service and impeccable work. Call Phillips Lawn Sprinkler Co.
          Inc for FREE estimates!
        </p>
      </div>
      <div className="flex align-middle items-center justify-center my-2">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
