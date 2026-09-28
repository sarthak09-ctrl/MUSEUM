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

        h-[58px]
        sm:h-[82px]
        md:h-[110px]

        overflow-hidden
        rounded-[3px]

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

          px-3
          sm:px-5

          pr-10
          sm:pr-14
        "
      >

        <p
          className="
            text-[6px]
            sm:text-[9px]

            text-[#d8b889]

            mb-0.5
            sm:mb-1
          "
        >
          Browse by
        </p>

        <h2
          className="
            text-white

            text-[13px]
            sm:text-[18px]
            md:text-[22px]

            font-serif

            leading-none
          "
        >
          {title}
        </h2>

        <p
          className="
            text-white/70

            text-[5px]
            sm:text-[7px]
            md:text-[9px]

            mt-0.5
            sm:mt-1

            truncate
          "
        >
          {subtitle}
        </p>

      </div>


      {/* ARROW */}

      <div
        className="
          absolute

          right-3
          sm:right-5

          top-1/2
          -translate-y-1/2

          text-white

          opacity-100
          md:opacity-0

          group-hover:opacity-100

          transition
        "
      >
        <ChevronRight
          size={15}
          className="sm:w-5 sm:h-5"
        />
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

        min-h-[62px]
        sm:min-h-[78px]
        md:min-h-[95px]

        cursor-pointer

        hover:shadow-md
        transition
      "
    >

      <img
        src={image}
        alt={title}
        className="
          w-[68px]
          sm:w-[82px]
          md:w-[105px]

          object-cover

          flex-shrink-0
        "
      />


      <div
        className="
          flex-1

          p-2
          sm:p-3

          flex
          items-center
          justify-between

          min-w-0
        "
      >

        <div className="min-w-0">

          <p
            className="
              text-[6px]
              sm:text-[7px]
              md:text-[8px]

              text-[#a18765]

              tracking-wide

              mb-0.5
              sm:mb-1
            "
          >
            STORY TRAIL
          </p>

          <h3
            className="
              font-serif

              text-[11px]
              sm:text-[13px]
              md:text-[16px]

              text-[#282621]

              leading-tight

              truncate
            "
          >
            {title}
          </h3>

          <p
            className="
              text-[6px]
              sm:text-[7px]
              md:text-[9px]

              text-gray-400

              mt-0.5
              sm:mt-1
            "
          >
            {stories} &nbsp; • &nbsp; {time}
          </p>

        </div>


        <ChevronRight
          size={14}
          className="
            sm:w-[18px]
            sm:h-[18px]

            stroke-[1.5]

            text-[#9d815c]

            flex-shrink-0
          "
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
    <div
      className="
        min-w-[105px]
        sm:min-w-[135px]
        md:min-w-[180px]

        flex-shrink-0
      "
    >

      <div
        className="
          h-[82px]
          sm:h-[105px]
          md:h-[135px]

          overflow-hidden

          rounded-[3px]
        "
      >

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


      <h3
        className="
          text-white

          font-serif

          text-[10px]
          sm:text-[13px]
          md:text-[16px]

          mt-1.5
          sm:mt-2

          truncate
        "
      >
        {title}
      </h3>


      <p
        className="
          text-[#a18765]

          text-[6px]
          sm:text-[8px]

          mt-0.5
          sm:mt-1
        "
      >
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
    <div
      className="
        min-h-screen
        bg-[#eee9e2]
        text-[#292722]
      "
    >

      {/* ================= NAVBAR ================= */}

      <header
        className="
          sticky
          top-0
          z-50

          h-[46px]
          sm:h-[54px]
          md:h-[62px]

          bg-[#272727]
          text-white

          flex
          items-center

          px-3
          sm:px-5
          md:px-8
        "
      >

        {/* BACK */}

        <button
          onClick={() => navigate(-1)}
          className="
            mr-2
            sm:mr-3

            flex-shrink-0
          "
        >
          <ArrowLeft
            size={15}
            className="
              sm:w-[17px]
              sm:h-[17px]

              stroke-[1.5]

              text-gray-300
            "
          />
        </button>


        <h1
          className="
            font-serif

            text-[14px]
            sm:text-[17px]
            md:text-[20px]

            font-semibold

            flex-1
          "
        >
          Explore Trails
        </h1>


        {/* SEARCH */}

        <button
          className="
            mr-3
            sm:mr-4
          "
        >
          <Search
            size={17}
            className="
              sm:w-5
              sm:h-5

              stroke-[1.5]

              text-gray-300
            "
          />
        </button>


        {/* MENU */}

        <button>
          <Menu
            size={20}
            className="
              sm:w-[23px]
              sm:h-[23px]

              stroke-[1.4]

              text-gray-300
            "
          />
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main
        className="
          w-full
          max-w-[850px]
          mx-auto
        "
      >


        {/* ================= BROWSE BY ================= */}

        <section
          className="
            px-3
            sm:px-5
            md:px-8

            pt-4
            sm:pt-6
            md:pt-8

            pb-4
            sm:pb-6
            md:pb-7
          "
        >

          {/* HEADING */}

          <div
            className="
              flex
              items-center

              mb-2.5
              sm:mb-4
            "
          >

            <div
              className="
                w-[2px]
                sm:w-[3px]

                h-[14px]
                sm:h-[17px]

                bg-[#b48a5a]

                mr-1.5
                sm:mr-2
              "
            />

            <h2
              className="
                font-serif

                text-[12px]
                sm:text-[15px]
                md:text-[18px]

                font-bold
              "
            >
              Browse By
            </h2>

          </div>


          {/* CLICKABLE CARDS */}

          <div
            className="
              space-y-2
              sm:space-y-3
            "
          >

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

        <section
          className="
            bg-[#eee9e2]

            px-3
            sm:px-5
            md:px-8

            pb-5
            sm:pb-7
            md:pb-8
          "
        >

          <div
            className="
              flex
              items-center
              justify-between

              mb-2.5
              sm:mb-4
            "
          >

            <div className="flex items-center">

              <div
                className="
                  w-[2px]
                  sm:w-[3px]

                  h-[14px]
                  sm:h-[17px]

                  bg-[#b48a5a]

                  mr-1.5
                  sm:mr-2
                "
              />

              <h2
                className="
                  font-serif

                  text-[13px]
                  sm:text-[16px]
                  md:text-[19px]

                  font-bold
                "
              >
                Top Stories
              </h2>

            </div>


            <Link
              to="/journey"
              className="
                flex
                items-center

                gap-0.5
                sm:gap-1

                text-[7px]
                sm:text-[9px]
                md:text-[11px]

                text-[#927b62]
              "
            >
              See All
              <ArrowRight
                size={9}
                className="sm:w-3 sm:h-3"
              />
            </Link>

          </div>


          <div
            className="
              space-y-2
              sm:space-y-3
            "
          >

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

        <section
          className="
            bg-[#292929]

            px-3
            sm:px-5
            md:px-8

            pt-5
            sm:pt-7
            md:pt-8

            pb-8
            sm:pb-10
            md:pb-14
          "
        >

          <div
            className="
              flex
              items-center
              justify-between

              mb-3
              sm:mb-5
            "
          >

            <div className="flex items-center">

              <div
                className="
                  w-[2px]
                  sm:w-[3px]

                  h-[14px]
                  sm:h-[17px]

                  bg-[#b48a5a]

                  mr-1.5
                  sm:mr-2
                "
              />

              <h2
                className="
                  font-serif
                  text-white

                  text-[13px]
                  sm:text-[16px]
                  md:text-[19px]

                  font-bold
                "
              >
                New This Month
              </h2>

            </div>


            <Link
              to="/journey"
              className="
                flex
                items-center

                gap-0.5
                sm:gap-1

                text-[7px]
                sm:text-[9px]
                md:text-[11px]

                text-gray-300
              "
            >
              See All

              <ArrowRight
                size={9}
                className="sm:w-3 sm:h-3"
              />
            </Link>

          </div>


          {/* HORIZONTAL SCROLL */}

          <div
            className="
              flex

              gap-2.5
              sm:gap-4

              overflow-x-auto

              scrollbar-hide

              pb-1

              snap-x
              snap-mandatory

              overscroll-x-contain
            "
          >

            {newThisMonth.map((item, index) => (

              <div
                key={index}
                className="snap-start"
              >
                <NewCard
                  image={item.image}
                  title={item.title}
                />
              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default Journey;