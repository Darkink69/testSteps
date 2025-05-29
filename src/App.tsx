// import { useState, useEffect } from "react";
import "../src/App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="bg-[#1A1A1A] w-full sm:max-w-[360px] h-[100vh] md:h-[830px]">
          <div className="p-4">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
