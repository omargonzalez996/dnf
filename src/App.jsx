import { useState } from "react";
import NavMenu from "./components/NavMenu";
import SpaIcon from "@mui/icons-material/Spa";
function App() {
  return (
    <>
      <div className="p-2 shadow-md flex flex-row-reverse">
        {/* Navbar */}
        <div className="w-1/2 flex items-center justify-end">
          <NavMenu />
        </div>
        <div className="w-1/2 flex items-center justify-start px-5 font-light justify-between">
          <SpaIcon />
          <p className="text-sm">D&F LANDSCAPING</p>
        </div>
      </div>
    </>
  );
}

export default App;
