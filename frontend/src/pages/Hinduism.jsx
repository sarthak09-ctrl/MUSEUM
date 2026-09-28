import React from "react";
import {
  ArrowLeft,
  Search,
  Menu,
  ArrowRight,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

// ======================================================
// IMAGES
// Replace these with your actual Hinduism artwork images
// ======================================================

import krishnaHero from "../assets/salarjung-home.png";
import govardhanImg from "../assets/Museum_wallpaper.png";
import radhaKrishnaImg from "../assets/salarjung-img3.png";

// You can later replace these with:
// import fluteImg from "../assets/flute-krishna.jpg";
// import lordKrishnaImg from "../assets/lord-krishna.jpg";
// import krishnaLeelaImg from "../assets/krishna-leela.jpg";

const fluteImg = krishnaHero;
const lordKrishnaImg = govardhanImg;
const krishnaLeelaImg = radhaKrishnaImg;


// ======================================================
// TRAIL DATA
// ======================================================

const hinduismTrails = [
  {
    image: govardhanImg,
    title: "The Govardhan Narrative",
    time: "15 min",
    stops: "5 stops",
  },

  {
    image: radhaKrishnaImg,
    title: "Radha & Krishna: Love in Art",
    time: "20 min",
    stops: "7 stops",
  },

  {
    image: fluteImg,
    title: "Flute & Flower: Music of Krishna",
    time: "18 min",
    stops: "7 stops",
  },

  {
    image: lordKrishnaImg,
    title: "Lord Krishna",
    time: "15 min",
    stops: "6 stops",
  },

  {
    image: krishnaLeelaImg,
    title: "Krishna Leela",
    time: "25 min",
    stops: "8 stops",
  },
];


// ======================================================
// TRAIL CARD
// ======================================================

const TrailCard = ({
  image,
  title,
  time,
  stops,
}) => {
  return (
    <div
      className="
        relative
        w-full
        h-[112px]
        sm:h-[160px]
        md:h-[180px]
        overflow-hidden
        rounded-[5px]
        group
      "
    >

      {/* ================= IMAGE ================= */}

      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />


      {/* ================= GRADIENT ================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/45
          to-black/20
        "
      />


      {/* ================= CONTENT ================= */}

      <div
        className="
          absolute
          inset-0
          z-10
          flex
          flex-col
          justify-end
          p-3
          sm:p-5
        "
      >

        {/* TITLE */}

        <h2
          className="
            font-serif
            text-white
            text-[15px]
            sm:text-[23px]
            md:text-[26px]
            font-medium
            leading-tight
            pr-24 sm:pr-32
          "
        >
          {title}
        </h2>


        {/* META */}

        <div
          className="
            flex
            items-center
            gap-2
            mt-1
            text-white/70
            text-[7px]
            sm:text-[10px]
          "
        >

          <span>
            ◷ {time}
          </span>

          <span>
            •
          </span>

          <span>
            {stops}
          </span>

        </div>

      </div>


      {/* ================= VIEW TRAIL BUTTON ================= */}

      <Link
        to={`/trail/${title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")}`}
        className="
          absolute
          z-20
          right-2
          sm:right-5
          bottom-2
          sm:bottom-5
          flex
          items-center
          gap-1.5
          px-2.5
          sm:px-4
          py-1.5
          sm:py-2
          rounded-[3px]
          bg-[#b48a5a]
          text-white
          text-[7px]
          sm:text-[10px]
          font-medium
          hover:bg-[#c69a69]
          transition
        "
      >
        View Trail
        <ArrowRight size={12} />
      </Link>

    </div>
  );
};


// ======================================================
// HINDUISM PAGE
// ======================================================

const Hinduism = () => {

  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#292929]
        text-white
      "
    >

      {/* ==================================================
          HEADER
      ================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          h-[48px]
          sm:h-[58px]
          bg-[#292929]
          border-b
          border-white/5
          flex
          items-center
          px-3
          sm:px-8
        "
      >

        {/* BACK */}

        <button
          onClick={() => navigate(-1)}
          className="
            mr-3
            text-gray-400
            hover:text-white
            transition
          "
        >
          <ArrowLeft
            size={17}
            strokeWidth={1.5}
          />
        </button>


        {/* TITLE */}

        <h1
          className="
            flex-1
            font-serif
            text-[15px]
            sm:text-[20px]
            font-semibold
          "
        >
          Hinduism
        </h1>


        {/* SEARCH */}

        <button
          className="
            mr-4
            text-gray-400
            hover:text-white
          "
        >
          <Search
            size={18}
            strokeWidth={1.5}
          />
        </button>


        {/* MENU */}

        <button
          className="
            text-gray-400
            hover:text-white
          "
        >
          <Menu
            size={21}
            strokeWidth={1.4}
          />
        </button>

      </header>


      {/* ==================================================
          MAIN
      ================================================== */}

      <main
        className="
          w-full
          max-w-[850px]
          mx-auto
          px-3
          sm:px-8
          pb-12
          sm:pb-16
        "
      >

        {/* ==================================================
            FEATURED TRAIL
        ================================================== */}

        <section className="pt-3 sm:pt-5">

          <div
            className="
              relative
              w-full
              h-[160px]
              sm:h-[260px]
              md:h-[320px]
              overflow-hidden
              rounded-[5px]
              group
            "
          >

            {/* HERO IMAGE */}

            <img
              src={krishnaHero}
              alt="Lord Krishna"
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


            {/* DARK OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/35
                to-black/10
              "
            />


            {/* HERO CONTENT */}

            <div
              className="
                absolute
                bottom-3
                sm:bottom-6
                left-3
                sm:left-6
                right-3
                z-10
              "
            >

              {/* CATEGORY */}

              <p
                className="
                  text-[#c49a6c]
                  text-[7px]
                  sm:text-[9px]
                  tracking-[0.15em]
                  uppercase
                  mb-1
                "
              >
                12 Trails · Hinduism
              </p>


              {/* TITLE */}

              <h2
                className="
                  font-serif
                  text-white
                  text-[17px]
                  sm:text-[28px]
                  md:text-[34px]
                  font-semibold
                  leading-tight
                "
              >
                Lord Krishna · Ramayana · Mahabharata
              </h2>

            </div>

          </div>

        </section>


        {/* ==================================================
            TRAILS HEADER
        ================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            mt-5
            mb-3
          "
        >

          <div className="flex items-center">

            <div
              className="
                w-[3px]
                h-[16px]
                bg-[#b48a5a]
                mr-2
              "
            />

            <h2
              className="
                font-serif
                text-[15px]
                sm:text-[20px]
                font-semibold
              "
            >
              Hinduism Trails
            </h2>

          </div>


          <span
            className="
              text-[8px]
              sm:text-[10px]
              text-gray-500
            "
          >
            12 trails
          </span>

        </div>


        {/* ==================================================
            TRAIL LIST
        ================================================== */}

        <div className="space-y-2.5 sm:space-y-3">

          {hinduismTrails.map((trail, index) => (

            <TrailCard
              key={index}
              image={trail.image}
              title={trail.title}
              time={trail.time}
              stops={trail.stops}
            />

          ))}

        </div>


        {/* ==================================================
            FOOTER
        ================================================== */}

        <div
          className="
            text-center
            pt-8
            pb-4
          "
        >


        </div>

      </main>

    </div>
  );
};

export default Hinduism;