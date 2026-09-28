import React from "react";
import { ArrowRight } from "lucide-react";

const Featured = () => {
  const featuredTrail = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ykh6KpQ2AxS7z-5HW0FYv75X0Quwi-fzOKoX8rZBXg&s",
    tag: "STORY OF THE WEEK",
    title: "Trail Title",
    curator: "Elena Vasquez",
    curatorRole: "Top Curator",
  };

  const trails = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2k6eB5Dxh15g5ueetj2JvGSHHH6TA3Um2IXzWC1QUKA&s=10",
      title: "A Room of Marble",
      curator: "Curator’s Name",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2k6eB5Dxh15g5ueetj2JvGSHHH6TA3Um2IXzWC1QUKA&s=10",
      title: "A Room of Marble",
      curator: "Curator’s Name",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-white
        px-4
        sm:px-5
        md:px-8
        lg:px-16
        py-6
        sm:py-8
        md:py-10
      "
    >

      {/* ================= HEADER ================= */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-4
          sm:mb-6
          md:mb-8
        "
      >

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

          <div
            className="
              w-[3px]
              sm:w-[5px]
              md:w-[6px]
              h-7
              sm:h-9
              md:h-12
              bg-[#B58A5A]
              rounded-sm
            "
          ></div>

          <h2
            className="
              font-serif
              text-xl
              sm:text-2xl
              md:text-4xl
              lg:text-5xl
              font-semibold
              text-[#252525]
            "
          >
            Featured
          </h2>

        </div>

        <button
          className="
            flex
            items-center
            gap-1
            sm:gap-2
            md:gap-4
            text-[#B58A5A]
            text-[10px]
            sm:text-xs
            md:text-lg
            lg:text-xl
            font-medium
            hover:gap-6
            transition-all
            duration-300
          "
        >
          See All

          <ArrowRight
            size={16}
            className="sm:w-5 sm:h-5 md:w-[30px] md:h-[30px]"
            strokeWidth={1.8}
          />
        </button>

      </div>


      {/* ================= MAIN FEATURED CARD ================= */}
      <div
        className="
          relative
          w-full
          h-[220px]
          sm:h-[280px]
          md:h-[450px]
          lg:h-[600px]
          rounded-[12px]
          sm:rounded-[16px]
          md:rounded-[22px]
          overflow-hidden
          group
        "
      >

        <img
          src={featuredTrail.image}
          alt={featuredTrail.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/20
            to-transparent
          "
        ></div>


        {/* Featured content */}
        <div
          className="
            absolute
            left-4
            sm:left-6
            md:left-8
            lg:left-12
            bottom-4
            sm:bottom-6
            md:bottom-10
            lg:bottom-12
            text-white
          "
        >

          {/* Tag */}
          <div
            className="
              inline-block
              bg-[#C49560]
              px-3
              sm:px-4
              md:px-6
              py-1.5
              sm:py-2
              md:py-3
              rounded-sm
              sm:rounded-md
              mb-2
              sm:mb-3
              md:mb-5
              text-[8px]
              sm:text-[10px]
              md:text-sm
              tracking-wide
              font-medium
            "
          >
            {featuredTrail.tag}
          </div>


          {/* Title */}
          <h1
            className="
              font-serif
              text-2xl
              sm:text-3xl
              md:text-5xl
              lg:text-6xl
              font-bold
              mb-1
              sm:mb-2
              md:mb-3
            "
          >
            {featuredTrail.title}
          </h1>


          {/* Curator */}
          <p
            className="
              text-[9px]
              sm:text-xs
              md:text-base
              lg:text-xl
              text-gray-200
            "
          >
            by{" "}
            <span className="font-medium">
              {featuredTrail.curator}
            </span>{" "}
            <span className="text-gray-300">
              ({featuredTrail.curatorRole})
            </span>
          </p>

        </div>
      </div>


      {/* ================= SMALL TRAILS ================= */}
      <div
        className="
          flex
          md:grid
          md:grid-cols-2
          gap-3
          sm:gap-4
          md:gap-10
          mt-5
          sm:mt-7
          md:mt-12
          pb-3
          overflow-x-auto
          md:overflow-visible
          scrollbar-hide
          snap-x
          snap-mandatory
        "
      >

        {trails.map((trail, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-3
              sm:gap-4
              md:gap-7
              group
              cursor-pointer
              flex-shrink-0
              w-[235px]
              sm:w-[300px]
              md:w-auto
              snap-start
            "
          >

            {/* Thumbnail */}
            <div
              className="
                flex-shrink-0
                w-[75px]
                h-[75px]
                sm:w-[95px]
                sm:h-[95px]
                md:w-[150px]
                md:h-[150px]
                lg:w-[175px]
                lg:h-[175px]
                rounded-[10px]
                sm:rounded-[14px]
                md:rounded-[18px]
                overflow-hidden
              "
            >
              <img
                src={trail.image}
                alt={trail.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>


            {/* Text */}
            <div>

              <h3
                className="
                  font-serif
                  text-sm
                  sm:text-base
                  md:text-3xl
                  lg:text-4xl
                  leading-tight
                  font-semibold
                  text-[#292929]
                  mb-1
                  sm:mb-2
                  md:mb-5
                  group-hover:text-[#B58A5A]
                  transition-colors
                "
              >
                {trail.title}
              </h3>

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-lg
                  lg:text-xl
                  text-gray-400
                "
              >
                {trail.curator}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Featured;