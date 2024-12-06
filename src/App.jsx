import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div className="fixed z-50 left-0 top-0 w-full shadow-lg">
        <Navbar />
      </div>
      <div className="relative top-20">
        <Carousel />
        <Home />
      </div>
    </div>
  );
}

export default App;
