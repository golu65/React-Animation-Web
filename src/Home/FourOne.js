import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
// Import the CSS file for styling

const images = [
  'Image/2.jpg',
  'Image/3.jpg',
  'Image/4.jpg',
  // Add more image file names as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
            <>
             <img key={index} src={image} alt={`Image ${index + 1}`} className="slide" />
             {/* <Typography>Heelo</Typography> */}
            </>
         
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>Previous</button>
      <button className="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
