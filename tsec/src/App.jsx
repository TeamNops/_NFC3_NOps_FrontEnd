import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SoilHealth from "./components/SoilHealth";
import CropHealth from "./components/CropHealth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<LoginForm />} />
          <Route path="soil" element={<SoilHealth />} />
          <Route path="crop" element={<CropHealth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
