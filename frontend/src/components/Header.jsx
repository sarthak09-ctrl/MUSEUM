import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

import salarjungHome from "../assets/salarjung-home.png";
import museum2 from "../assets/Museum_wallpaper.png";
import museum3 from "../assets/salarjung-img3.png";

const Header = () => {
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
    <section
      className="
        relative
        w-full
        overflow-hidden
        rounded-none
        sm:rounded-lg

        /* iPhone 16 */
        h-[205px]

        /* Small tablets */
        sm:h-[300px]

        /* Desktop */
        md:h-[500px]
        lg:h-[600px]
      "
    >
      {/* ================= BACKGROUND IMAGES ================= */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat

            transition-transform
            duration-1000
            ease-in-out

            ${
              index === currentImage
                ? "translate-x-0"
                : index < currentImage
                ? "-translate-x-full"
                : "translate-x-full"
            }
          `}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* ================= DARK OVERLAY ================= */}
      <div
        className="
          absolute
          inset-0
          bg-black/35
          z-10
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-20
          h-full
          w-full
          flex
          items-end
        "
      >
        <div
          className="
            w-full

            /* MOBILE */
            px-4
            pb-4

            /* TABLET */
            sm:px-8
            sm:pb-8

            /* DESKTOP */
            md:w-1/2
            md:px-16
            md:pb-16
            lg:px-24
            lg:pb-20
          "
        >
          {/* ================= MOBILE / DESKTOP TEXT ================= */}
          <p
            className="
              mb-2

              text-[12px]
              leading-tight
              text-[#e0b17f]
              font-medium

              sm:text-lg

              md:text-2xl
              lg:text-3xl
              md:mb-4
            "
          >
            Where did you leave off?
          </p>

          {/* ================= CONTINUE BUTTON ================= */}
          <button
            className="
              group
              flex
              items-center
              gap-2

              bg-white/95
              text-[#292929]

              rounded-full

              px-4
              py-2

              text-[10px]
              font-medium

              transition-all
              duration-300

              hover:bg-[#c49a6c]
              hover:text-white

              sm:px-5
              sm:py-2.5
              sm:text-xs

              md:px-7
              md:py-3
              md:text-sm
            "
          >
            <span>Continue Your Journey</span>

            <img
              src={assets.arrow_icon}
              alt=""
              className="
                w-2.5
                h-2.5
                object-contain

                sm:w-3
                sm:h-3
              "
            />
          </button>
        </div>
      </div>

      {/* ================= SLIDER DOTS ================= */}
      <div
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          z-30

          flex
          items-center
          gap-1.5

          sm:bottom-5
          sm:gap-2
        "
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300

              ${
                currentImage === index
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/50"
              }

              sm:h-2

              ${
                currentImage === index
                  ? "sm:w-7"
                  : "sm:w-2"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;