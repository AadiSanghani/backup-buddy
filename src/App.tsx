import React from "react";
import "./css/App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import LandingPage from "./components/LandingPage";
import MidSection from "./components/MidSection";
import HowItWorks from "./components/HotItWorks"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <LandingPage />
      <MidSection/>
      <HowItWorks/>
    </div>
  );
}

export default App;
