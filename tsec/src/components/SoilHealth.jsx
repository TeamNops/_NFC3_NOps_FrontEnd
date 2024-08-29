import React from "react";

const SoilHealth = () => {
  const blockyTextStyle = {
    fontFamily: "'Orbitron', sans-serif",
    textShadow: "2.25px 2.25px 0px rgba(0, 0, 0, 0.3)", // Keeps the 3D shadow effect
    transition: "transform 0.3s ease", // Smooth transition for scaling effect
  };

  const buttonHoverStyle = {
    transform: "scale(1.2)", // Scale up to 120% on hover
  };

  return (
    <div id="soil" className="w-full h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center" // Place image behind content
      >
        <img
          src="/20.jpg" // Path relative to the public directory
          alt="Overlay"
          className="w-full h-full object-cover z-10"
        />
      </div>
      <div className="h-screen flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-6xl text-white" style={blockyTextStyle}>
          Manual Soil Health Analysis
        </h1>
      </div>
    </div>
  );
};

export default SoilHealth;
