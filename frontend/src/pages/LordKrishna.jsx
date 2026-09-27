import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
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
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// Replace these with your actual museum/Krishna images
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

  const paintings = [
    {
      title: "Krishna with Radha",
      image: krishna1,
      artist: "Unknown Artist",
    },
    {
      title: "Krishna with Gopis",
      image: krishna2,
      artist: "Indian Miniature",
    },
    {
      title: "Krishna Playing Flute",
      image: krishna3,
      artist: "Pahari School",
    },
    {
      title: "Krishna Leela",
      image: krishna4,
      artist: "Rajasthani School",
    },
    {
      title: "Govardhan Krishna",
      image: krishna5,
      artist: "Mughal Period",
    },
    {
      title: "Radha Krishna",
      image: krishna6,
      artist: "Kangra School",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#292522]">

      {/* =====================================================
          TOP NAVIGATION
      ====================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#171717]/95 backdrop-blur-md text-white">

        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm hover:text-[#c58a5b] transition"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:block">Back</span>
          </button>

          <div className="text-sm font-medium tracking-wide">
            Museum Trails
          </div>

          <button
            onClick={() => setSaved(!saved)}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Bookmark
              size={19}
              fill={saved ? "#c58a5b" : "none"}
              className={saved ? "text-[#c58a5b]" : ""}
            />
          </button>

        </div>

      </header>


      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative pt-14">

        <div className="relative h-[500px] md:h-[620px] overflow-hidden">

          <img
            src={krishnaHero}
            alt="Krishna Leela"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/40 to-black/10" />

          <div className="absolute inset-x-0 bottom-0">

            <div className="max-w-7xl mx-auto px-5 md:px-10 pb-10 md:pb-14">

              <div className="max-w-2xl text-white">

                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#d8a16f] mb-3">
                  Hinduism · Indian Art
                </p>

                <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4">
                  Krishna Leela
                </h1>

                <p className="text-sm md:text-base leading-7 text-white/80 max-w-xl">
                  Radha and Krishna meet beneath a flowering tree.
                  This trail explores the stories of Indian art's most
                  enduring metaphors for devotion, longing between the
                  human and divine, and the intimate worlds that
                  bring these stories to life.
                </p>

                <div className="flex items-center gap-5 mt-6 text-xs text-white/70">

                  <span>7 artworks</span>

                  <span className="w-1 h-1 bg-white/50 rounded-full" />

                  <span>30–75 min</span>

                  <span className="w-1 h-1 bg-white/50 rounded-full" />

                  <span>Easy</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          AUDIO PLAYER
      ====================================================== */}
      <section className="relative z-20 -mt-8 px-4">

        <div className="max-w-5xl mx-auto">

          <div className="bg-[#202020] rounded-xl shadow-xl text-white overflow-hidden">

            {/* Player header */}
            <div className="px-5 pt-4">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#bd8a61]">
                    Krishna Leela
                  </p>

                  <h2 className="text-sm font-medium mt-1">
                    Chapter 2 · Painting Title
                  </h2>

                </div>

                <div className="flex items-center gap-1 text-[10px] text-white/40">
                  02 / 07
                  <ChevronDown size={14} />
                </div>

              </div>

            </div>


            {/* Progress */}
            <div className="px-5 mt-4">

              <div className="h-[2px] bg-white/20 relative">

                <div className="absolute left-0 top-0 h-full w-[35%] bg-[#c58a5b]" />

              </div>

            </div>


            {/* Controls */}
            <div className="flex justify-center items-center gap-7 py-4">

              <button className="text-white/70 hover:text-white">
                <SkipBack size={18} />
              </button>

              <button
                onClick={() => setPlaying(!playing)}
                className="w-11 h-11 rounded-full bg-[#c58a5b] flex items-center justify-center hover:bg-[#d49b6c] transition"
              >
                {playing ? (
                  <Pause size={19} fill="currentColor" />
                ) : (
                  <Play size={19} fill="currentColor" />
                )}
              </button>

              <button className="text-white/70 hover:text-white">
                <SkipForward size={18} />
              </button>

            </div>


            {/* Thumbnail strip */}
            <div className="px-4 pb-4 overflow-x-auto">

              <div className="flex gap-2 min-w-max">

                {paintings.map((painting, index) => (

                  <div
                    key={index}
                    className={`w-12 h-12 rounded-md overflow-hidden border-2 ${
                      index === 1
                        ? "border-[#c58a5b]"
                        : "border-transparent"
                    }`}
                  >

                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-full object-cover"
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="max-w-6xl mx-auto px-5 md:px-10">

        {/* =================================================
            TRAIL OVERVIEW
        ================================================== */}
        <section className="py-12 border-b border-[#ddd6cd]">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-xl md:text-2xl font-serif font-medium">
              Trail Overview
            </h2>

            <span className="text-xs text-[#8d8176]">
              7 Works
            </span>

          </div>

          <p className="text-sm md:text-base leading-7 text-[#6c6259] max-w-3xl">
            Follow Krishna through a selection of paintings that explore
            devotion, divine play, love and mythology. The trail moves
            through different artistic traditions while keeping the story
            easy to understand for first-time visitors.
          </p>


          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">

            {[
              "Category: Hinduism",
              "Sub Category: Krishna",
              "Theme: Devotion",
              "Character: Krishna",
              "Other Key Words",
            ].map((tag, index) => (

              <span
                key={index}
                className="px-3 py-1.5 rounded-full border border-[#d7cec4] bg-white text-[11px] text-[#71675f]"
              >
                {tag}
              </span>

            ))}

          </div>

        </section>


        {/* =================================================
            PAINTINGS INCLUDED
        ================================================== */}
        <section className="py-12">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl md:text-2xl font-serif">
              Paintings Included
            </h2>

            <span className="text-xs text-[#8d8176]">
              7 Works
            </span>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {paintings.map((painting, index) => (

              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden border border-[#e3ddd6] hover:shadow-lg transition"
              >

                <div className="aspect-[4/5] overflow-hidden">

                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-3">

                  <h3 className="text-sm font-medium">
                    {painting.title}
                  </h3>

                  <p className="text-[11px] text-[#92877d] mt-1">
                    {painting.artist}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =================================================
            WHY THIS TRAIL
        ================================================== */}
        <section className="border-t border-[#ddd6cd] py-12">

          <h2 className="text-xl md:text-2xl font-serif mb-5">
            Why?
          </h2>

          <p className="text-sm md:text-base leading-7 text-[#6c6259] max-w-3xl">
            Krishna's narrative occupies a unique place in Indian art
            history. Artists across centuries created scenes of worship,
            devotion, love and playful mythology. This trail brings
            together selected paintings to show how the story of Krishna
            has been interpreted across different artistic traditions.
          </p>

        </section>


        {/* =================================================
            TRAIL DETAILS
        ================================================== */}
        <section className="border-t border-[#ddd6cd] py-12">

          <h2 className="text-xl md:text-2xl font-serif mb-6">
            Trail Details
          </h2>


          <div className="grid grid-cols-3 gap-3">

            {/* Time */}
            <div className="bg-white border border-[#e1dad2] rounded-lg p-4">

              <Clock3
                size={18}
                className="text-[#b37a50] mb-3"
              />

              <p className="text-[10px] uppercase tracking-wider text-[#958a80]">
                Estimated Time
              </p>

              <p className="font-medium mt-1 text-sm">
                30–75 min
              </p>

            </div>


            {/* People */}
            <div className="bg-white border border-[#e1dad2] rounded-lg p-4">

              <Users
                size={18}
                className="text-[#b37a50] mb-3"
              />

              <p className="text-[10px] uppercase tracking-wider text-[#958a80]">
                Group Size
              </p>

              <p className="font-medium mt-1 text-sm">
                Any
              </p>

            </div>


            {/* Works */}
            <div className="bg-white border border-[#e1dad2] rounded-lg p-4">

              <MapPin
                size={18}
                className="text-[#b37a50] mb-3"
              />

              <p className="text-[10px] uppercase tracking-wider text-[#958a80]">
                Artworks
              </p>

              <p className="font-medium mt-1 text-sm">
                7 Works
              </p>

            </div>

          </div>


          {/* Difficulty */}
          <div className="mt-5 bg-white border border-[#e1dad2] rounded-lg p-5">

            <div className="flex justify-between items-center">

              <span className="text-sm font-medium">
                Difficulty
              </span>

              <span className="text-xs text-[#8b8179]">
                Easy
              </span>

            </div>

            <div className="flex gap-2 mt-4">

              <div className="h-1 flex-1 rounded-full bg-[#b37a50]" />
              <div className="h-1 flex-1 rounded-full bg-[#d8d0c8]" />
              <div className="h-1 flex-1 rounded-full bg-[#d8d0c8]" />

            </div>

          </div>

        </section>


        {/* =================================================
            RATING
        ================================================== */}
        <section className="pb-12">

          <div className="bg-[#292929] text-white rounded-xl p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-2xl font-serif">
                  1.4k
                </p>

                <p className="text-xs text-white/50 mt-1">
                  Saved
                </p>

              </div>


              <div className="text-center">

                <div className="flex items-center justify-center gap-1">

                  <Star
                    size={16}
                    fill="#c58a5b"
                    className="text-[#c58a5b]"
                  />

                  <span className="text-xl font-medium">
                    4.8
                  </span>

                </div>

                <p className="text-xs text-white/50 mt-1">
                  Rating
                </p>

              </div>


              <div className="text-right">

                <p className="text-2xl font-serif">
                  326
                </p>

                <p className="text-xs text-white/50 mt-1">
                  Reviews
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            ACTION BUTTONS
        ================================================== */}
        <section className="pb-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <button
              onClick={() => navigate("/plan-visit")}
              className="h-12 rounded-md bg-[#b77d52] text-white text-sm font-medium hover:bg-[#a86e45] transition flex items-center justify-center gap-2"
            >
              <MapPin size={17} />
              Plan Visit
            </button>


            <button
              onClick={() => navigate("/book-visit")}
              className="h-12 rounded-md border border-[#b77d52] text-[#9d673f] text-sm font-medium hover:bg-[#b77d52] hover:text-white transition flex items-center justify-center gap-2"
            >
              <Ticket size={17} />
              Book Tickets
            </button>

          </div>

        </section>

      </main>


      {/* =====================================================
          MOBILE PROGRESS / RESTART
      ====================================================== */}
      <div className="fixed bottom-4 right-4 z-40">

        <div className="bg-[#202020] text-white rounded-full shadow-xl px-3 py-2 flex items-center gap-2">

          <span className="text-[10px] font-medium">
            51 / 53
          </span>

          <button className="text-white/60 hover:text-white">

            <RotateCcw size={13} />

          </button>

        </div>

      </div>

    </div>
  );
};

export default LordKrishna;