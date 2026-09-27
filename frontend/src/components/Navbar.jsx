import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="w-full bg-[#292929] text-white">

        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-8">

          {/* LOGO */}
          <div
            onClick={() => navigate('/')}
            className="cursor-pointer"
          >
            <p className="font-serif text-[#b58a5c] text-xl md:text-2xl tracking-[5px]">
              Salarjung
            </p>

            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-none tracking-wide">
              MUSEUM
            </h1>
          </div>


          {/* RIGHT ICONS */}
          <div className="flex items-center gap-10">

            {/* SEARCH */}
            <button
              onClick={() => navigate('/search')}
              className="hover:opacity-70 transition"
            >
              <svg
                className="w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle
                  cx="27"
                  cy="27"
                  r="19"
                  stroke="#AEB8C4"
                  strokeWidth="5"
                />

                <line
                  x1="41"
                  y1="41"
                  x2="57"
                  y2="57"
                  stroke="#AEB8C4"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </button>


            {/* MENU */}
            <button
              onClick={() => setShowMenu(true)}
              className="hover:opacity-70 transition"
            >
              <svg
                className="w-14 h-14 md:w-[70px] md:h-[70px]"
                viewBox="0 0 70 70"
                fill="none"
              >
                <line
                  x1="5"
                  y1="15"
                  x2="65"
                  y2="15"
                  stroke="#AEB8C4"
                  strokeWidth="5"
                />

                <line
                  x1="5"
                  y1="35"
                  x2="65"
                  y2="35"
                  stroke="#AEB8C4"
                  strokeWidth="5"
                />

                <line
                  x1="5"
                  y1="55"
                  x2="65"
                  y2="55"
                  stroke="#AEB8C4"
                  strokeWidth="5"
                />
              </svg>
            </button>

          </div>

        </div>
      </div>


      {/* ================= MENU ================= */}
      <div
        className={`fixed inset-0 z-50 bg-[#292929] text-white transition-all duration-300 ${
          showMenu
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >

        {/* MENU HEADER */}
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-8">

          <div onClick={() => {
            navigate('/')
            setShowMenu(false)
          }}
            className="cursor-pointer"
          >
            <p className="font-serif text-[#b58a5c] text-xl tracking-[5px]">
              Salarjung
            </p>

            <h1 className="font-serif font-bold text-4xl md:text-5xl leading-none">
              MUSEUM
            </h1>
          </div>


          {/* CLOSE */}
          <button onClick={() => setShowMenu(false)}>
            <svg
              className="w-12 h-12"
              viewBox="0 0 50 50"
              fill="none"
            >
              <line
                x1="10"
                y1="10"
                x2="40"
                y2="40"
                stroke="#AEB8C4"
                strokeWidth="4"
              />

              <line
                x1="40"
                y1="10"
                x2="10"
                y2="40"
                stroke="#AEB8C4"
                strokeWidth="4"
              />
            </svg>
          </button>

        </div>


        {/* LINKS */}
        <div className="flex justify-center items-center h-[70vh]">

          <ul className="text-center space-y-8">

            <li>
              <NavLink
                to="/"
                onClick={() => setShowMenu(false)}
                className="text-3xl md:text-5xl font-serif hover:text-[#b58a5c]"
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/collection"
                onClick={() => setShowMenu(false)}
                className="text-3xl md:text-5xl font-serif hover:text-[#b58a5c]"
              >
                COLLECTION
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setShowMenu(false)}
                className="text-3xl md:text-5xl font-serif hover:text-[#b58a5c]"
              >
                ABOUT
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setShowMenu(false)}
                className="text-3xl md:text-5xl font-serif hover:text-[#b58a5c]"
              >
                CONTACT
              </NavLink>
            </li>

          </ul>

        </div>

      </div>
    </>
  )
}

export default Navbar