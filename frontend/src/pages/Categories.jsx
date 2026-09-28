import React from "react";
import {
  ArrowLeft,
  Search,
  Menu,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Replace these with your actual images
import museumImg from "../assets/Museum_wallpaper.png";
import museum2 from "../assets/salarjung-img3.png";
import museum3 from "../assets/salarjung-home.png";


// ======================================================
// CATEGORY DATA
// ======================================================

const categories = [
  {
    name: "Hinduism",
    description:
      "Hindu Art • Sacred Heritage • Mythology • Decorative Arts & more",
    trails: 12,
    image: museumImg,
  },
  {
    name: "Persian Art",
    description:
      "Persian Art • Textiles • Manuscripts • Decorative Arts",
    trails: 10,
    image: museum2,
  },
  {
    name: "Birds",
    description:
      "Birds • Nature • Wildlife • Decorative Arts",
    trails: 8,
    image: museum3,
  },
  {
    name: "Islam",
    description:
      "Islamic Art • Architecture • Calligraphy • Heritage",
    trails: 14,
    image: museumImg,
  },
  {
    name: "Fables",
    description:
      "Stories • Animals • Mythology • Illustrated Traditions",
    trails: 11,
    image: museum2,
  },
  {
    name: "Women",
    description:
      "Women • Culture • Society • Stories & Heritage",
    trails: 9,
    image: museum3,
  },
  {
    name: "Hindu Mythology",
    description:
      "Mythology • Gods • Legends • Sacred Stories",
    trails: 18,
    image: museumImg,
  },
];


// ======================================================
// FILTER CHIPS
// ======================================================

const filters = [
  "All",
  "Category A",
  "Category B",
  "Category C",
  "Category D",
];


// ======================================================
// CATEGORY CARD
// ======================================================

const CategoryCard = ({
  image,
  name,
  description,
  trails,
}) => {
  return (
    <Link
      to={`/categories/${name
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
      onClick={() => window.scrollTo(0, 0)}
      className="
        relative
        block
        w-full
        h-[76px]
        xs:h-[82px]
        sm:h-[105px]
        md:h-[120px]
        overflow-hidden
        rounded-[5px]
        group
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <img
        src={image}
        alt={name}
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


      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/45
          to-black/30
          group-hover:from-black/65
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
          items-center
          justify-between
          px-3
          sm:px-6
        "
      >

        {/* LEFT CONTENT */}
        <div className="min-w-0 pr-3">

          {/* TITLE */}
          <h2
            className="
              font-serif
              text-white
              text-[14px]
              sm:text-[23px]
              md:text-[27px]
              leading-none
              mb-1
            "
          >
            {name}
          </h2>


          {/* DESCRIPTION */}
          <p
            className="
              text-white/70
              text-[6.5px]
              sm:text-[9px]
              md:text-[10px]
              leading-tight
              truncate
              max-w-[245px]
              sm:max-w-[500px]
            "
          >
            {description}
          </p>

        </div>


        {/* RIGHT CONTENT */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            flex-shrink-0
            min-w-[32px]
            sm:min-w-[50px]
          "
        >

          <span
            className="
              text-[#d8b889]
              text-[9px]
              sm:text-[14px]
              font-medium
            "
          >
            {trails}
          </span>

          <span
            className="
              text-white/60
              text-[5.5px]
              sm:text-[8px]
              uppercase
              tracking-wide
            "
          >
            Trails
          </span>

        </div>

      </div>

    </Link>
  );
};


// ======================================================
// MAIN PAGE
// ======================================================

const Categories = () => {

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
          NAVBAR
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
            text-gray-300
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
          Categories
        </h1>


        {/* SEARCH */}
        <button
          className="
            mr-4
            text-gray-400
            hover:text-white
            transition
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
            transition
          "
        >
          <Menu
            size={21}
            strokeWidth={1.4}
          />
        </button>

      </header>


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main
        className="
          w-full
          max-w-[850px]
          mx-auto
          px-3
          sm:px-8
          pb-16
        "
      >


        {/* ==================================================
            FILTER CHIPS
        ================================================== */}

        <div
          className="
            flex
            gap-1.5
            overflow-x-auto
            scrollbar-hide
            pt-3
            pb-2
            -mx-1
            px-1
          "
        >

          {filters.map((filter, index) => (

            <button
              key={filter}
              className={`
                flex-shrink-0
                px-2.5
                py-[4px]
                rounded-full
                border
                text-[7px]
                sm:text-[10px]
                transition

                ${
                  index === 0
                    ? `
                      bg-[#b48a5a]
                      border-[#b48a5a]
                      text-white
                    `
                    : `
                      bg-[#292929]
                      border-[#555]
                      text-gray-400
                      hover:border-[#b48a5a]
                      hover:text-[#d8b889]
                    `
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>


        {/* ==================================================
            CATEGORY COUNT
        ================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            mt-2
            mb-2
          "
        >

          <p
            className="
              text-[8px]
              sm:text-[10px]
              text-gray-500
            "
          >
            6 categories • 82 trails
          </p>

        </div>


        {/* ==================================================
            CATEGORY LIST
        ================================================== */}

        <div className="space-y-2 sm:space-y-3">

          {categories.map((category, index) => (

            <CategoryCard
              key={index}
              image={category.image}
              name={category.name}
              description={category.description}
              trails={category.trails}
            />

          ))}

        </div>


      </main>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer
        className="
          mt-4
          bg-[#242424]
          border-t
          border-white/5
          py-8 sm:py-10
          flex
          flex-col
          items-center
          justify-center
        "
      >

        <p
          className="
            font-serif
            text-[#b48a5a]
            text-xl
            tracking-wide
          "
        >
          Salarjung
        </p>

        <h2
          className="
            font-serif
            text-white
            text-2xl
            font-semibold
            tracking-wide
          "
        >
          MUSEUM
        </h2>

        <p
          className="
            text-gray-600
            text-[8px]
            mt-3
          "
        >
          Explore • Discover • Remember
        </p>

      </footer>

    </div>
  );
};

export default Categories;