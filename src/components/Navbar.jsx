import React from "react";
import NavMenu from "./NavMenu";
import SpaIcon from "@mui/icons-material/Spa";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import NavButtons from "./NavButtons";
const Navbar = () => {
  return (
    <>
      <div className="bg-slate-50 p-2 flex flex-row-reverse h-20 w-full">
        {/* Navbar */}
        <div className="w-1/2 flex items-center justify-end">
          <div className="hidden lg:flex">
            <PhoneEnabledIcon />
            <p className="mx-2 flex items-center text-sm font-light">
              682-429-6729
            </p>
          </div>
          <div className="hidden sm:flex">
            <NavButtons />
          </div>
          <div className="flex sm:hidden">
            <NavMenu />
          </div>
        </div>
        <div className="w-1/2 flex items-center px-5 font-light">
          <SpaIcon />
          <p className="text-sm ml-5">D&F LANDSCAPING</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
