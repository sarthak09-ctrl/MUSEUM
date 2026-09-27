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
    <section className="w-full bg-white px-5 sm:px-8 md:px-12 lg:px-16 py-10">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-4">
          <div className="w-[6px] h-12 bg-[#B58A5A] rounded-sm"></div>

          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#252525]">
            Featured
          </h2>
        </div>

        <button
          className="
            flex items-center gap-4
            text-[#B58A5A]
            text-lg md:text-xl
            font-medium
            hover:gap-6
            transition-all duration-300
          "
        >
          See All
          <ArrowRight size={30} strokeWidth={1.8} />
        </button>
      </div>


      {/* ================= MAIN FEATURED CARD ================= */}
      <div
        className="
          relative
          w-full
          h-[400px]
          sm:h-[450px]
          md:h-[520px]
          lg:h-[600px]
          rounded-[22px]
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
            left-6
            sm:left-8
            md:left-10
            lg:left-12
            bottom-8
            sm:bottom-10
            md:bottom-12
            text-white
          "
        >

          {/* Tag */}
          <div
            className="
              inline-block
              bg-[#C49560]
              px-6
              py-3
              rounded-md
              mb-5
              text-sm
              sm:text-base
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
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              mb-3
            "
          >
            {featuredTrail.title}
          </h1>


          {/* Curator */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
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
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          mt-12
          pb-5
        "
      >

        {trails.map((trail, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-7
              group
              cursor-pointer
            "
          >

            {/* Thumbnail */}
            <div
              className="
                flex-shrink-0
                w-[150px]
                h-[150px]
                sm:w-[175px]
                sm:h-[175px]
                rounded-[18px]
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
                  text-3xl
                  sm:text-4xl
                  leading-tight
                  font-semibold
                  text-[#292929]
                  mb-5
                  group-hover:text-[#B58A5A]
                  transition-colors
                "
              >
                {trail.title}
              </h3>

              <p className="text-lg sm:text-xl text-gray-400">
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