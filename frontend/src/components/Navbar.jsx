import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="w-full bg-[#292929] text-white">

        <div
          className="
            flex items-center justify-between
            px-4 py-3
            sm:px-6 sm:py-4
            md:px-12 md:py-6
            lg:px-20 lg:py-8
          "
        >

          {/* LOGO */}
          <div
            onClick={() => navigate('/')}
            className="cursor-pointer"
          >
            <p
              className="
                font-serif
                text-[#b58a5c]
                text-[10px]
                sm:text-sm
                md:text-xl
                tracking-[3px]
                sm:tracking-[4px]
                md:tracking-[5px]
              "
            >
              Salarjung
            </p>

            <h1
              className="
                font-serif
                font-bold
                text-xl
                sm:text-2xl
                md:text-4xl
                lg:text-6xl
                leading-none
                tracking-wide
              "
            >
              MUSEUM
            </h1>
          </div>


          {/* RIGHT ICONS */}
          <div
            className="
              flex items-center
              gap-3
              sm:gap-5
              md:gap-8
              lg:gap-10
            "
          >

            {/* SEARCH */}
            <button
              onClick={() => navigate('/search')}
              className="hover:opacity-70 transition"
            >
              <svg
                className="
                  w-6 h-6
                  sm:w-8 sm:h-8
                  md:w-12 md:h-12
                  lg:w-16 lg:h-16
                "
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
                className="
                  w-7 h-7
                  sm:w-9 sm:h-9
                  md:w-14 md:h-14
                  lg:w-[70px] lg:h-[70px]
                "
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
        className={`
          fixed inset-0 z-50
          bg-[#292929]
          text-white
          transition-all duration-300
          ${showMenu
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
          }
        `}
      >

        {/* MENU HEADER */}
        <div
          className="
            flex items-center justify-between
            px-4 py-3
            sm:px-6 sm:py-4
            md:px-12 md:py-6
            lg:px-20 lg:py-8
          "
        >

          {/* LOGO */}
          <div
            onClick={() => {
              navigate('/')
              setShowMenu(false)
            }}
            className="cursor-pointer"
          >
            <p
              className="
                font-serif
                text-[#b58a5c]
                text-[10px]
                sm:text-sm
                md:text-xl
                tracking-[3px]
                sm:tracking-[4px]
                md:tracking-[5px]
              "
            >
              Salarjung
            </p>

            <h1
              className="
                font-serif
                font-bold
                text-xl
                sm:text-2xl
                md:text-5xl
                leading-none
              "
            >
              MUSEUM
            </h1>
          </div>


          {/* CLOSE */}
          <button
            onClick={() => setShowMenu(false)}
            className="hover:opacity-70 transition"
          >
            <svg
              className="
                w-8 h-8
                sm:w-10 sm:h-10
                md:w-12 md:h-12
              "
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
        <div
          className="
            flex justify-center items-center
            h-[75vh]
            sm:h-[70vh]
          "
        >

          <ul
            className="
              text-center
              space-y-6
              sm:space-y-8
              md:space-y-10
            "
          >

            <li>
              <NavLink
                to="/"
                onClick={() => setShowMenu(false)}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-5xl
                  font-serif
                  hover:text-[#b58a5c]
                  transition-colors
                "
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/collection"
                onClick={() => setShowMenu(false)}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-5xl
                  font-serif
                  hover:text-[#b58a5c]
                  transition-colors
                "
              >
                COLLECTION
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setShowMenu(false)}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-5xl
                  font-serif
                  hover:text-[#b58a5c]
                  transition-colors
                "
              >
                ABOUT
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setShowMenu(false)}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-5xl
                  font-serif
                  hover:text-[#b58a5c]
                  transition-colors
                "
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