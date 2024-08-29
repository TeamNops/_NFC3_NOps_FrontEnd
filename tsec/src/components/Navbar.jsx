import React from 'react';

const Navbar = () => {
  const blockyTextStyle = {
    fontFamily: "'Orbitron', sans-serif",
    textShadow: '2.25px 2.25px 0px rgba(0, 0, 0, 0.3)', // Keeps the 3D shadow effect
  };

  return (
    <nav className='flex justify-between items-center p-5 text-blue-900 fixed top-0 w-full z-20'>
      <div className='flex items-center' style={blockyTextStyle}>
        <h1 className='px-5 font-extrabold text-4xl' style={blockyTextStyle}>NOps</h1>
        <button className='px-5 text-xl transition-transform duration-200 hover:scale-110' style={blockyTextStyle}>
          Sign In
        </button>
      </div>
      <div className='inline-flex text-xl space-x-5' style={blockyTextStyle}>
        <button className='transition-transform duration-200 hover:scale-110' style={blockyTextStyle}>
          Home
        </button>
        <button className='transition-transform duration-200 hover:scale-110' style={blockyTextStyle}>
          About Us
        </button>
        <button className='transition-transform duration-200 hover:scale-110' style={blockyTextStyle}>
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
