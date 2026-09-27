import React from "react";
import {
  ArrowLeft,
  Search,
  Menu,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

// Replace these with your actual images
import categoryImg from "../assets/Museum_wallpaper.png";
import durationImg from "../assets/salarjung-img3.png";
import themeImg from "../assets/salarjung-home.png";


// ======================================================
// TOP STORIES
// ======================================================

const topStories = [
  {
    image: "../assets/story1.jpg",
    title: "Trail Title Will Come",
    stories: "8 stops",
    time: "70 min",
  },
  {
    image: "../assets/story2.jpg",
    title: "Trail Title Will Come",
    stories: "4 stops",
    time: "50 min",
  },
  {
    image: "../assets/story3.jpg",
    title: "Trail Title Will Come",
    stories: "6 stops",
    time: "60 min",
  },
];


// ======================================================
// NEW THIS MONTH
// ======================================================

const newThisMonth = [
  {
    image: "../assets/story3.jpg",
    title: "Voices of the Bronze",
  },
  {
    image: "../assets/story2.jpg",
    title: "Voices of the Bronze",
  },
  {
    image: "../assets/story1.jpg",
    title: "Voices of the Museum",
  },
];


// ======================================================
// BROWSE CARD
// ======================================================

const BrowseCard = ({ image, title, subtitle, to }) => {
  return (
    <Link
      to={to}
      onClick={() => window.scrollTo(0, 0)}
      className="
        relative
        block
        h-[82px]
        sm:h-[110px]
        overflow-hidden
        rounded-[4px]
        cursor-pointer
        group
      "
    >

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition
          duration-500
          group-hover:scale-105
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/45
          group-hover:bg-black/35
          transition
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-center
          px-5
          pr-14
        "
      >

        <p className="text-[9px] text-[#d8b889] mb-1">
          Browse by
        </p>

        <h2 className="text-white text-[18px] sm:text-[22px] font-serif">
          {title}
        </h2>

        <p className="text-white/70 text-[7px] sm:text-[9px] mt-1 truncate">
          {subtitle}
        </p>

      </div>

      {/* ARROW */}
      <div
        className="
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          text-white
          opacity-0
          group-hover:opacity-100
          transition
        "
      >
        <ChevronRight size={20} />
      </div>

    </Link>
  );
};


// ======================================================
// STORY CARD
// ======================================================

const StoryCard = ({ image, title, stories, time }) => {
  return (
    <div
      className="
        bg-white
        rounded-[3px]
        overflow-hidden
        flex
        min-h-[78px]
        sm:min-h-[95px]
        cursor-pointer
        hover:shadow-md
        transition
      "
    >

      <img
        src={image}
        alt={title}
        className="w-[82px] sm:w-[105px] object-cover"
      />

      <div className="flex-1 p-3 flex items-center justify-between">

        <div>

          <p className="text-[7px] sm:text-[8px] text-[#a18765] tracking-wide mb-1">
            STORY TRAIL
          </p>

          <h3 className="font-serif text-[13px] sm:text-[16px] text-[#282621]">
            {title}
          </h3>

          <p className="text-[7px] sm:text-[9px] text-gray-400 mt-1">
            {stories} &nbsp; • &nbsp; {time}
          </p>

        </div>

        <ChevronRight
          size={18}
          strokeWidth={1.5}
          className="text-[#9d815c]"
        />

      </div>
    </div>
  );
};


// ======================================================
// NEW CARD
// ======================================================

const NewCard = ({ image, title }) => {
  return (
    <div className="min-w-[135px] sm:min-w-[180px]">

      <div className="h-[105px] sm:h-[135px] overflow-hidden rounded-[3px]">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition
            duration-500
          "
        />

      </div>

      <h3 className="text-white font-serif text-[13px] sm:text-[16px] mt-2 truncate">
        {title}
      </h3>

      <p className="text-[#a18765] text-[8px] mt-1">
        • New
      </p>

    </div>
  );
};


// ======================================================
// JOURNEY
// ======================================================

const Journey = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eee9e2] text-[#292722]">

      {/* ================= NAVBAR ================= */}

      <header
        className="
          sticky
          top-0
          z-50
          h-[62px]
          bg-[#272727]
          text-white
          flex
          items-center
          px-4
          sm:px-8
        "
      >

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mr-3"
        >
          <ArrowLeft
            size={17}
            strokeWidth={1.5}
            className="text-gray-300"
          />
        </button>


        <h1 className="font-serif text-[17px] sm:text-[20px] font-semibold flex-1">
          Explore Trails
        </h1>


        {/* SEARCH */}
        <button className="mr-4">

          <Search
            size={20}
            strokeWidth={1.5}
            className="text-gray-300"
          />

        </button>


        {/* MENU */}
        <button>

          <Menu
            size={23}
            strokeWidth={1.4}
            className="text-gray-300"
          />

        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="max-w-[850px] mx-auto">


        {/* ================= BROWSE BY ================= */}

        <section className="px-5 sm:px-8 pt-8 pb-7">

          {/* HEADING */}

          <div className="flex items-center mb-4">

            <div className="w-[3px] h-[17px] bg-[#b48a5a] mr-2" />

            <h2 className="font-serif text-[15px] sm:text-[18px] font-bold">
              Browse By
            </h2>

          </div>


          {/* ================= CLICKABLE CARDS ================= */}

          <div className="space-y-3">

            {/* CATEGORIES */}

            <BrowseCard
              image={categoryImg}
              title="Categories"
              subtitle="Hindu Art • Islamic Heritage • Royal • Decorative Art & more"
              to="/categories"
            />


            {/* DURATION */}

            <BrowseCard
              image={durationImg}
              title="Duration"
              subtitle="30 min • 60 min • 90 min • Half Day"
              to="/duration"
            />


            {/* THEMES */}

            <BrowseCard
              image={themeImg}
              title="Themes"
              subtitle="History • People • Art • Culture • Architecture"
              to="/themes"
            />

          </div>

        </section>


        {/* ================= TOP STORIES ================= */}

        <section className="bg-[#eee9e2] px-5 sm:px-8 pb-8">

          <div className="flex items-center justify-between mb-4">

            <div className="flex items-center">

              <div className="w-[3px] h-[17px] bg-[#b48a5a] mr-2" />

              <h2 className="font-serif text-[16px] sm:text-[19px] font-bold">
                Top Stories
              </h2>

            </div>


            <Link
              to="/journey"
              className="
                flex
                items-center
                gap-1
                text-[9px]
                sm:text-[11px]
                text-[#927b62]
              "
            >
              See All
              <ArrowRight size={12} />
            </Link>

          </div>


          <div className="space-y-3">

            {topStories.map((story, index) => (

              <StoryCard
                key={index}
                image={story.image}
                title={story.title}
                stories={story.stories}
                time={story.time}
              />

            ))}

          </div>

        </section>


        {/* ================= NEW THIS MONTH ================= */}

        <section className="bg-[#292929] px-5 sm:px-8 pt-8 pb-14">

          <div className="flex items-center justify-between mb-5">

            <div className="flex items-center">

              <div className="w-[3px] h-[17px] bg-[#b48a5a] mr-2" />

              <h2 className="font-serif text-white text-[16px] sm:text-[19px] font-bold">
                New This Month
              </h2>

            </div>


            <Link
              to="/journey"
              className="
                flex
                items-center
                gap-1
                text-[9px]
                sm:text-[11px]
                text-gray-300
              "
            >
              See All
              <ArrowRight size={12} />
            </Link>

          </div>


          {/* HORIZONTAL SCROLL */}

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">

            {newThisMonth.map((item, index) => (

              <NewCard
                key={index}
                image={item.image}
                title={item.title}
              />

            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default Journey;