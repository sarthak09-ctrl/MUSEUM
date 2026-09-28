import React from "react";
import { useNavigate } from "react-router-dom";
import Journey from "../pages/Journey";
// import trail1 from "../assets/trail1.jpg";
// import trail2 from "../assets/trail2.jpg";
// import trail3 from "../assets/trail3.jpg";
// import trail4 from "../assets/trail4.jpg";

const ExploreTrails = () => {
  const navigate = useNavigate();

  const trails = [
    {
      id: 1,
      title: "Category 1",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Category 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGin0kVBilObzNdpSd-d3KadVDbioq2B97qbA58BtXg&s=10",
    },
    {
      id: 3,
      title: "Category 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQ6G4Ogjbg4lK7taqszOvHniTruHslmCpcQ-DkiePfA&s=10",
    },
    {
      id: 4,
      title: "Category 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56vs1_uIP29Apc18aS8g6ctwvZ5Bs5SbMyyHRFb0y7w&s=10",
    },
  ];

  return (
    <section className="w-full bg-[#f5f0ea] py-4 sm:py-8 md:py-16 overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-6 md:px-10 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="mb-3 sm:mb-6 md:mb-10 flex items-center justify-between">
          {/* LEFT TITLE */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
            <div
              className="
              h-5 w-[2px]
              sm:h-8 sm:w-[3px]
              md:h-16 md:w-[6px]
              bg-[#a9784d]
            "
            ></div>

            <h2
              className="
              font-serif
              text-[15px]
              font-semibold
              tracking-tight
              text-[#171717]
              sm:text-2xl
              md:text-5xl
            "
            >
              Explore Trails
            </h2>
          </div>

          {/* BROWSE - DESKTOP */}
          <button
            onClick={() => navigate("/journey")}
            className="
            group
            hidden
            sm:flex
            items-center
            gap-1
            md:gap-4
            text-[11px]
            md:text-2xl
            text-[#a9784d]
            transition-all
            duration-300
          "
          >
            <span>Browse</span>

            <span
              className="
              text-sm
              md:text-3xl
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
            >
              →
            </span>
          </button>
        </div>

        {/* ================= TRAILS GRID ================= */}
        <div
          className="
          grid
          grid-cols-2
          gap-2

          sm:gap-4
          md:grid-cols-2
          md:gap-8
        "
        >
          {trails.map((trail) => (
            <div
              key={trail.id}
              onClick={() => navigate(`/trails/${trail.id}`)}
              className="
              group
              relative
              w-full
              h-[82px]
              sm:h-[150px]
              md:h-[320px]
              cursor-pointer
              overflow-hidden
              rounded-[5px]
              sm:rounded-[12px]
              md:rounded-[20px]
            "
            >
              {/* IMAGE */}
              <img
                src={trail.image}
                alt={trail.title}
                className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
              />

              {/* DARK GRADIENT */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/65
                via-black/10
                to-transparent
              "
              ></div>

              {/* TITLE */}
              <div
                className="
                absolute
                bottom-2
                left-2
                sm:bottom-4
                sm:left-4
                md:bottom-8
                md:left-8
              "
              >
                <h3
                  className="
                  text-[8px]
                  font-medium
                  text-white
                  sm:text-sm
                  md:text-3xl
                "
                >
                  {trail.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE BROWSE ================= */}
        <div className="mt-3 flex justify-end sm:hidden">
          <button
            onClick={() => navigate("/trails")}
            className="
            flex
            items-center
            gap-1
            text-[8px]
            text-[#a9784d]
          "
          >
            <span>Browse</span>

            <span className="text-[11px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreTrails;
