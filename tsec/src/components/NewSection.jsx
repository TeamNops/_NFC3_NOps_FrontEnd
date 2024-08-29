import React, { useRef, useEffect } from 'react';

const NewSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current.parentElement); // Observe the section container
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current.parentElement);
      }
    };
  }, []);

  const blockyTextStyle = {
    fontFamily: "'Orbitron', sans-serif",
    textShadow: '2.25px 2.25px 0px rgba(0, 0, 0, 0.3)', // Keeps the 3D shadow effect
    transition: 'transform 0.3s ease', // Smooth transition for scaling effect
  };

  const buttonHoverStyle = {
    transform: 'scale(1.2)', // Scale up to 120% on hover
  };

  return (
    <div className='w-full h-screen relative'>
      {/* Secondary Video */}
      <video
        ref={videoRef}
        muted
        className='absolute inset-0 w-full h-full object-cover z-0'
      >
        <source src='/foreground_video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 flex justify-start items-center w-full h-full px-20'>
        <div className='grid'>
          <button
            className='text-3xl font-bold text-blue-900 py-10 hover:scale-110'
            style={blockyTextStyle}
          >
            Crop Health Monitoring
          </button>
          <button
            className='text-3xl font-bold text-blue-900 py-10 hover:scale-110'
            style={blockyTextStyle}
          >
            Crop Health Monitoring
          </button>
          <button
            className='text-3xl font-bold text-blue-900 py-10 hover:scale-110'
            style={blockyTextStyle}
          >
            Crop Health Monitoring
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
