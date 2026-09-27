import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom'
import Journey from "../pages/Journey"

import salarjungHome from "../assets/salarjung-home.png";
import museum2 from "../assets/Museum_wallpaper.png";
import museum3 from "../assets/salarjung-img3.png";

const Header = () => {
    const navigate = useNavigate();

  const images = [salarjungHome, museum2, museum3];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden rounded-lg">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat
                    transition-transform duration-1000 ease-in-out
                    ${
                      index === currentImage
                        ? "translate-x-0"
                        : index < currentImage
                          ? "-translate-x-full"
                          : "translate-x-full"
                    }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4 px-8 md:px-16 lg:px-24">
          <p className="text-xl md:text-2xl lg:text-3xl text-orange-400 font-semibold">
            Where did you leave off?
          </p>

          <button
            //onClick={() => navigate("/journey")}
            className="
        flex items-center gap-3
        bg-white
        px-7 md:px-8
        py-3 md:py-4
        rounded-full
        text-[#292929]
        text-sm
        font-medium
        hover:bg-[#c49a6c]
        hover:text-white
        hover:scale-105
        transition-all duration-300
    "
          >
            Continue Your Journey
            <img className="w-3" src={assets.arrow_icon} alt="" />
          </button>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
