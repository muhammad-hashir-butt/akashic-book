import React from "react";
import logo from "../assets/Thundersmouth Press Logo.png";

export default function Header({ activePage, setActivePage }) {
  const navItems = [
    "HOME",
    "BOOKS",
    "AUTHORS",
    "NEWS & FEATURES",
    "EVENTS",
    "ABOUT US",
  ];

  return (
    <header className="max-w-[1140px] mx-auto pl-3 pr-7 pt-4 pb-0">
      {/* TOP BAR: Logo (Left) & Search Bar (Right) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4">
        
        {/* LEFT: Logo (Moved from Center) */}
        <div className="flex justify-center lg:justify-start">
          <button
            onClick={() => setActivePage("HOME")}
            className="text-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Thundersmouth Press Logo"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </button>
        </div>

        {/* RIGHT: Redesigned Search Bar (Dark Gray Button) */}
        <div className="flex items-center w-full sm:w-auto lg:w-[260px] justify-center lg:justify-end">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full max-w-[260px] bg-white border border-gray-400 rounded-md overflow-hidden shadow-sm"
          >
            <input
              type="text"
              placeholder="Search term..."
              className="w-full bg-transparent px-3 py-1.5 text-xs text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#333333] text-white text-[11px] font-bold px-3.5 py-2 cursor-pointer shrink-0 tracking-wide"
            >
              SEARCH
            </button>
          </form>
        </div>

      </div>

      {/* BOTTOM ROW: Single Dark Gray Navbar Strip */}
      <nav className="w-full bg-[#333333] border-b-2 border-[#9e1b1b] rounded-t-sm shadow-md flex flex-wrap items-center justify-center">
        {navItems.map((item) => {
          const isActive = activePage === item;
          return (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`flex-1 min-w-fit px-4 py-2.5 text-xs font-bold tracking-wider text-center cursor-pointer ${
                isActive
                  ? "bg-[#9e1b1b] text-white"
                  : "text-gray-200"
              }`}
            >
              {item}
            </button>
          );
        })}
      </nav>
    </header>
  );
}