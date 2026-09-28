import React from "react";
import {
  Home,
  Footprints,
  ListPlus,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Icon = () => {
  const navItems = [
    {
      label: "Home",
      icon: Home,
      path: "/",
    },
    {
      label: "Trails",
      icon: Footprints,
      path: "/trails",
    },
    {
      label: "Explore",
      icon: ListPlus,
      path: "/explore",
    },
    {
      label: "Profile",
      icon: UserRound,
      path: "/profile",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#292929] border-t border-white/10">
      <div className="mx-auto w-full max-w-[850px] h-[56px] sm:h-[64px] flex items-center justify-around px-4 sm:px-8">
        {navItems.map(({ label, icon: IconComponent, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-[3px] min-w-[48px] transition ${
                isActive
                  ? "text-[#b48a5a]"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <IconComponent
                  size={19}
                  strokeWidth={1.5}
                  className="sm:w-[21px] sm:h-[21px]"
                />

                <span className="text-[7px] sm:text-[9px] leading-none">
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </footer>
  );
};

export default Icon;