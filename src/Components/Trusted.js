import React, { useState, useEffect } from 'react';

const Trusted = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: process.env.PUBLIC_URL + '/amazon.jpg', alt: 'Amazon' },
    { src: process.env.PUBLIC_URL + '/spotify.jpg', alt: 'Spotify' },
    { src: process.env.PUBLIC_URL + '/reddit.jpg', alt: 'Reddit' },
    { src: process.env.PUBLIC_URL + '/ebay.jpg', alt: 'Ebay' },
    { src: process.env.PUBLIC_URL + '/coca.jpg', alt: 'Coca' },
    {src:process.env.PUBLIC_URL + '/NET 1.jpg', alt: 'netflix'},
  ];

  // Slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentSlide, images.length]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-inter">Trusted By</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={`w-16 h-16 mb-4 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Trusted;