import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar/Navbar";
import HeroRight from "./components/HeroRight/HeroRight";
import HeroLeft from "./components/HeroLeft/HeroLeft";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
        <Navbar />
        <div className="flex flex-row w-full">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>

      {/* Desktop View */}
      <div className="flex-row hidden md:flex ">
        <div className="main-left w-1/4 bg-yellow-300">
          <HeroLeft />
        </div>
        <div className="main-right w-3/4 bg-orange-300">
          <Navbar />
          <HeroRight />
        </div>
      </div>
    </>
  );
}

export default App;
