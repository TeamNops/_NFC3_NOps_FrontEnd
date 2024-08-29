import React from "react";

const LoginForm = () => {
  const blockyTextStyle = {
    fontFamily: "'Orbitron', sans-serif",
    textShadow: "2.25px 2.25px 0px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease", // Keeps the 3D shadow effect
  };

  return (
    <div id="sign-in" className="w-full h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src="/background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex justify-center items-center w-full h-full flex-col"
        style={blockyTextStyle}>
         <h1 className="text-5xl font-extrabold text-white mb-10">Sign In</h1>
         <form action="" className="flex flex-col border-2 border-white rounded-lg p-5">
            <input
               type="email"
               placeholder="Email"
               className="w-96 h-12 px-4 border-2 border-black rounded-lg mb-5"></input>
            <input
               type="text"
               placeholder="Password"
               className="w-96 h-12 px-4 border-2 border-black rounded-lg mb-10"></input>
            <button className="mb-4 hover:scale-110" style={blockyTextStyle}>Forgot Password?</button>
            <button className="border-2 border-white rounded-lg m-auto px-2 bg-black bg-opacity-25 py-2 text-white hover:scale-110"
            style={blockyTextStyle}
            >
               Submit
            </button>
         </form>
      </div>
    </div>
  );
};

export default LoginForm;
