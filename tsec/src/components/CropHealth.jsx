import React from 'react'

const CropHealth = () => {
  return (
    <div id='crop'>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img
          src="/20.jpg" // Path relative to the public directory
          alt="Overlay"
          className="w-full h-full object-cover z-0"
        />
        </div>
    </div>
  )
}

export default CropHealth