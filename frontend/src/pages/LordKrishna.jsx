import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Clock3,
  Users,
  Star,
  Bookmark,
  RotateCcw,
  Ticket,
  MapPin,
  Volume2,
  ChevronUp,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import krishnaHero from "../assets/header_img.png";
import krishna1 from "../assets/header_img.png";
import krishna2 from "../assets/header_img.png";
import krishna3 from "../assets/header_img.png";
import krishna4 from "../assets/header_img.png";
import krishna5 from "../assets/header_img.png";
import krishna6 from "../assets/header_img.png";

const LordKrishna = () => {
  const navigate = useNavigate();

  const [playing, setPlaying] = useState(false);
  const [saved, setSaved] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(true);

  const paintings = [
    {
      title: "Krishna with flute",
      image: krishna1,
      artist: "Acc. No. 2471",
    },
    {
      title: "Krishna with Radha",
      image: krishna2,
      artist: "Acc. No. 2471",
    },
    {
      title: "Krishna with Gopis",
      image: krishna3,
      artist: "Acc. No. 2471",
    },
    {
      title: "Krishna Leela",
      image: krishna4,
      artist: "Acc. No. 2471",
    },
    {
      title: "Govardhan Krishna",
      image: krishna5,
      artist: "Acc. No. 2471",
    },
    {
      title: "Radha Krishna",
      image: krishna6,
      artist: "Acc. No. 2471",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#292522] overflow-x-hidden">

      {/* =====================================================
          MOBILE HERO
      ====================================================== */}

      <section className="relative h-[100dvh] min-h-[680px] md:hidden">

        <img
          src={krishnaHero}
          alt="Krishna Leela"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

        {/* TOP CONTROLS */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            z-20
            pt-[calc(env(safe-area-inset-top)+10px)]
            px-5
          "
        >

          <div className="flex items-center justify-between">

            <button
              onClick={() => navigate(-1)}
              className="
                w-9 h-9
                rounded-full
                bg-black/25
                backdrop-blur-md
                border border-white/20
                flex items-center justify-center
                text-white
              "
            >
              <ArrowLeft size={19} />
            </button>

            <div className="flex items-center gap-5 text-white">

              <span className="text-[10px] font-medium">
                2/7
              </span>

              <Volume2 size={15} />

            </div>

          </div>

        </div>

        {/* HERO CONTENT */}
        <div
          className="
            absolute
            left-0
            right-0
            bottom-0
            z-10
            px-5
            pb-[145px]
          "
        >

          <p className="text-[8px] uppercase tracking-[0.18em] text-white/70 mb-2">
            Painting · c. 1820
          </p>

          <h1 className="font-serif text-[20px] leading-tight text-white mb-2">
            Krishna Leela
          </h1>

          <p
            className="
              text-[11px]
              leading-[1.55]
              tracking-[0.03em]
              text-white/80
              max-w-[340px]
            "
          >
            Radha and Krishna meet beneath a flowering tree.
            Their relationship became one of Indian art's most
            enduring metaphors for devotion: the longing between
            the human and the divine. The intimate scale asks us
            to look slowly and closely.
          </p>

          <p className="text-[8px] text-white/40 mt-3">
            Gallery 3
          </p>

        </div>

      </section>


      {/* =====================================================
          DESKTOP HERO
      ====================================================== */}

      <section className="hidden md:block relative h-[620px]">

        <img
          src={krishnaHero}
          alt="Krishna Leela"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute top-8 left-8 z-20">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white"
          >
            <ArrowLeft size={20} />
            Back
          </button>

        </div>

        <div className="absolute bottom-16 left-0 right-0 px-10">

          <div className="max-w-7xl mx-auto text-white">

            <p className="text-xs uppercase tracking-[0.25em] text-[#d8a16f] mb-3">
              Hinduism · Indian Art
            </p>

            <h1 className="font-serif text-5xl mb-4">
              Krishna Leela
            </h1>

            <p className="max-w-xl text-sm leading-7 text-white/80">
              Radha and Krishna meet beneath a flowering tree.
              This trail explores the stories of Indian art's most
              enduring metaphors for devotion.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="pb-[180px]">

        {/* TRAIL OVERVIEW */}

        <section className="bg-white px-5 py-6 md:max-w-6xl md:mx-auto md:bg-transparent md:px-10">

          <div className="border-l-[3px] border-[#b77d52] pl-2.5">

            <h2 className="font-serif text-[17px] md:text-2xl">
              Trail Overview
            </h2>

          </div>

          <p
            className="
              mt-4
              text-[11px]
              leading-[1.5]
              tracking-[0.04em]
              text-[#625b54]
              max-w-3xl
            "
          >
            Trail description will come here. Trail description will
            come here. Trail description will come here. Trail
            description will come here. Trail description will come
            here.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">

            {[
              "Category Name",
              "Sub Category Name",
              "Theme",
              "Character",
              "Other Key Words",
            ].map((tag) => (

              <span
                key={tag}
                className="
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-[#dfd2c7]
                  bg-[#faf8f5]
                  text-[8px]
                  text-[#8b7d72]
                "
              >
                {tag}
              </span>

            ))}

          </div>

        </section>


        {/* =====================================================
            PAINTINGS
        ====================================================== */}

        <section className="px-5 py-6 bg-[#f5f1eb] md:max-w-6xl md:mx-auto md:px-10">

          <div className="flex justify-between items-center mb-4">

            <div className="border-l-[3px] border-[#b77d52] pl-2.5">

              <h2 className="font-serif text-[17px] md:text-2xl">
                Paintings Included
              </h2>

            </div>

            <span className="text-[9px] text-[#94887e]">
              7 Works
            </span>

          </div>


          {/* MOBILE = HORIZONTAL SCROLL */}
          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-2
              scrollbar-hide
              md:grid
              md:grid-cols-3
              lg:grid-cols-4
              md:overflow-visible
            "
          >

            {paintings.map((painting, index) => (

              <div
                key={index}
                className="
                  min-w-[110px]
                  w-[110px]
                  md:min-w-0
                  md:w-auto
                  flex-shrink-0
                  md:bg-white
                  md:border
                  md:border-[#e1dad2]
                  md:rounded-lg
                  overflow-hidden
                "
              >

                <div className="h-[142px] md:h-[280px] overflow-hidden rounded-md md:rounded-none">

                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition
                      duration-500
                      md:hover:scale-105
                    "
                  />

                </div>

                <div className="pt-2 md:p-3">

                  <h3 className="text-[9px] md:text-sm font-medium truncate">
                    {painting.title}
                  </h3>

                  <p className="text-[7px] md:text-[11px] text-[#9b8f85] mt-1">
                    {painting.artist}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            GALLERY LOCATIONS
        ====================================================== */}

        <section className="bg-white border-t border-[#ded6ce] px-5 py-6">

          <div className="border-l-[3px] border-[#b77d52] pl-2.5 mb-5">

            <h2 className="font-serif text-[17px]">
              Gallery Locations
            </h2>

          </div>

          <div className="space-y-3">

            {[
              "Gallery 20 — South Asian Paintings",
              "Gallery 28 — South Asian Paintings",
              "Gallery 30 — South Asian Paintings",
            ].map((location, index) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <div className="w-6 h-6 rounded-full bg-[#f1ebe5] flex items-center justify-center text-[8px] text-[#9b7c65]">
                  {index + 1}
                </div>

                <p className="text-[9px] text-[#716860]">
                  {location}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            ESTIMATED TIME
        ====================================================== */}

        <section className="px-5 py-6 bg-[#f5f1eb]">

          <div className="border-l-[3px] border-[#b77d52] pl-2.5 mb-5">

            <h2 className="font-serif text-[17px]">
              Estimated Time
            </h2>

          </div>

          <div className="grid grid-cols-3 gap-2">

            <InfoBox
              icon={<Clock3 size={15} />}
              title="Time"
              value="30–75 min"
            />

            <InfoBox
              icon={<Users size={15} />}
              title="Group"
              value="Any"
            />

            <InfoBox
              icon={<MapPin size={15} />}
              title="Works"
              value="7 Works"
            />

          </div>

          <div className="bg-white rounded-lg border border-[#dfd7cf] p-4 mt-3">

            <div className="flex justify-between">

              <span className="text-[10px] font-medium">
                Difficulty
              </span>

              <span className="text-[9px] text-[#96897e]">
                Easy
              </span>

            </div>

            <div className="flex gap-2 mt-3">

              <div className="h-[2px] flex-1 bg-[#b77d52]" />
              <div className="h-[2px] flex-1 bg-[#ddd4cc]" />
              <div className="h-[2px] flex-1 bg-[#ddd4cc]" />

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY
        ====================================================== */}

        <section className="bg-white px-5 py-7 border-t border-[#ded6ce]">

          <div className="border-l-[3px] border-[#b77d52] pl-2.5 mb-4">

            <h2 className="font-serif text-[17px]">
              Why?
            </h2>

          </div>

          <p className="text-[11px] leading-[1.6] text-[#716860]">
            Krishna's narrative occupies a unique place in Indian
            art history. Artists across centuries created scenes
            of worship, devotion, love and playful mythology.
          </p>

        </section>


        {/* =====================================================
            RATING
        ====================================================== */}

        <section className="bg-[#292929] text-white px-6 py-5">

          <div className="grid grid-cols-3 text-center">

            <div>
              <p className="font-serif text-xl">1.4k</p>
              <p className="text-[8px] text-white/50">Saved</p>
            </div>

            <div>
              <div className="flex justify-center items-center gap-1">

                <Star
                  size={13}
                  fill="#c58a5b"
                  className="text-[#c58a5b]"
                />

                <span className="text-xl">
                  4.8
                </span>

              </div>

              <p className="text-[8px] text-white/50">
                Rating
              </p>

            </div>

            <div>
              <p className="font-serif text-xl">326</p>
              <p className="text-[8px] text-white/50">
                Reviews
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            BUTTONS
        ====================================================== */}

        <section className="px-5 py-5 bg-white">

          <div className="grid grid-cols-2 gap-2">

            <button
              onClick={() => navigate("/plan-visit")}
              className="
                h-11
                rounded
                bg-[#b77d52]
                text-white
                text-[11px]
                flex
                items-center
                justify-center
                gap-1.5
              "
            >
              <MapPin size={14} />
              Plan Visit
            </button>

            <button
              onClick={() => navigate("/book-visit")}
              className="
                h-11
                rounded
                border
                border-[#b77d52]
                text-[#9d673f]
                text-[11px]
                flex
                items-center
                justify-center
                gap-1.5
              "
            >
              <Ticket size={14} />
              Book Tickets
            </button>

          </div>

        </section>

      </main>


      {/* =====================================================
          FIXED AUDIO PLAYER
          THIS IS THE BIGGEST DIFFERENCE FROM YOUR CURRENT CODE
      ====================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[100]
          bg-[#191919]
          text-white
          rounded-t-[22px]
          shadow-[0_-8px_30px_rgba(0,0,0,0.25)]
          pb-[calc(env(safe-area-inset-bottom)+8px)]
          md:left-1/2
          md:-translate-x-1/2
          md:max-w-5xl
          md:rounded-xl
          md:bottom-5
        "
      >

        {/* COLLAPSE ARROW */}

        <div className="flex justify-end px-5 pt-2">

          <button
            onClick={() => setPlayerOpen(!playerOpen)}
            className="text-[#c58a5b]"
          >
            {playerOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronUp size={18} />
            )}
          </button>

        </div>


        {playerOpen && (

          <>

            {/* TRACK INFO */}

            <div className="px-8">

              <div className="flex justify-between items-end">

                <div>

                  <p className="text-[7px] uppercase tracking-[0.2em] text-[#b77d52]">
                    Krishna Leela
                  </p>

                  <p className="text-[9px] mt-1">
                    Chapter 2 · Painting Title
                  </p>

                </div>

                <span className="text-[7px] text-white/50">
                  8s / 20s
                </span>

              </div>


              {/* PROGRESS */}

              <div className="h-[2px] bg-white/25 mt-3">

                <div className="h-full w-[38%] bg-[#b77d52]" />

              </div>

            </div>


            {/* CONTROLS */}

            <div className="flex items-center justify-center gap-9 py-3">

              <button className="text-white/70">

                <SkipBack size={15} />

              </button>

              <button
                onClick={() => setPlaying(!playing)}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#b77d52]
                  flex
                  items-center
                  justify-center
                "
              >

                {playing ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" />
                )}

              </button>

              <button className="text-white/70">

                <SkipForward size={15} />

              </button>

            </div>


            {/* THUMBNAILS */}

            <div className="px-8 overflow-x-auto scrollbar-hide">

              <div className="flex gap-2 min-w-max">

                {paintings.map((painting, index) => (

                  <div
                    key={index}
                    className={`
                      w-[38px]
                      h-[31px]
                      rounded-sm
                      overflow-hidden
                      border
                      ${
                        index === 1
                          ? "border-[#c58a5b]"
                          : "border-white/30"
                      }
                    `}
                  >

                    <img
                      src={painting.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  </div>

                ))}

              </div>

            </div>

          </>

        )}

      </div>


      {/* =====================================================
          MOBILE PROGRESS
      ====================================================== */}

      <div
        className="
          fixed
          right-3
          bottom-[155px]
          z-[110]
          md:hidden
        "
      >

        <div className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/70 flex items-center justify-center">

          <RotateCcw
            size={13}
            className="text-white"
          />

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   INFO BOX
========================================================= */

const InfoBox = ({ icon, title, value }) => {

  return (
    <div className="bg-white border border-[#dfd7cf] rounded-lg p-3">

      <div className="text-[#b77d52] mb-2">
        {icon}
      </div>

      <p className="text-[7px] uppercase tracking-wider text-[#958a80]">
        {title}
      </p>

      <p className="text-[9px] font-medium mt-1">
        {value}
      </p>

    </div>
  );
};

export default LordKrishna;