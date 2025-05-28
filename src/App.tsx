// import { useState, useEffect } from "react";
import "../src/App.css";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="bg-[#1A1A1A] w-full sm:max-w-[360px] h-[100vh] md:h-[830px]">
          <div className="p-4 text-white">
            <h1 className="text-3xl font-maven-pro">Start</h1>
            <p className="mt-2 font-maven-pro">
              Это квадрат 360x830px на десктопе и на всю ширину экрана на
              мобильных устройствах
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
