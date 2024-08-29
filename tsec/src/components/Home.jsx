import React from 'react';
import NewSection from './NewSection';

const Home = () => {
  const blockyTextStyle = {
    fontFamily: "'Orbitron', sans-serif",
    textShadow: '2.25px 2.25px 0px rgba(0, 0, 0, 0.3)', // Keeps the 3D shadow effect
  };

  return (
    <div className='w-full h-screen relative'>
      <video
        autoPlay
        loop
        muted
        className='fixed inset-0 w-full h-full object-cover'
      >
        <source src='/background_video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 flex justify-center items-center w-full h-full flex-col' style={blockyTextStyle}>
        <h1 className='text-7xl font-extrabold text-white py-10'>AgriHelp</h1>
        <button className='text-lg font-extrabold text-white py-10 animate-bounceCustom'
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >Scroll Down to Learn More</button>
      </div>

      <NewSection />

    </div>
  );
};

export default Home;
