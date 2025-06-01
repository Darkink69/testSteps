// import { useState, useEffect } from "react";
import "../src/App.css";

import BtnStart from "./components/BtnStart";
import Footer from "./components/Footer";
import GiftCards from "./components/GiftCards";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Slipper from "./components/Slipper";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="relative bg-[#1A1A1A] w-full sm:max-w-[360px] h-[100vh] md:h-[830px]">
          <div className="p-4">
            <Header />
            <Slipper />
            
            <GiftCards />
            <ProgressBar/>
            <div className="absolute w-10/12 -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BtnStart/>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
