import React from "react";
import { ShoppingCart } from "lucide-react";

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
    <header className="max-w-[1140px] mx-auto px-3 pt-4 pb-0">
      {/* TOP BAR: Follow Us (Left), Logo (Center), Search & Cart (Right) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4">
        
        {/* LEFT: Follow Us */}
        <div className="flex items-center gap-2.5 lg:w-[260px] justify-center lg:justify-start order-2 lg:order-1">
          <span className="text-xs font-bold text-[#222]">
            Follow us:
          </span>
          <div className="flex items-center gap-2">
            <a
              href="#facebook"
              className="w-7 h-7 bg-[#3b5998] text-white rounded flex items-center justify-center font-bold text-sm shadow hover:opacity-90"
            >
              f
            </a>
            <a
              href="#twitter"
              className="w-7 h-7 bg-[#55acee] text-white rounded flex items-center justify-center font-bold text-xs shadow hover:opacity-90"
            >
              X
            </a>
            <a
              href="#instagram"
              className="w-7 h-7 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded flex items-center justify-center font-bold text-xs shadow hover:opacity-90"
            >
              IG
            </a>
          </div>
        </div>

        {/* CENTER: Logo */}
        <div className="flex justify-center order-1 lg:order-2">
          <button
            onClick={() => setActivePage("HOME")}
            className="text-center cursor-pointer"
          >
            <h1 className="text-3xl font-black tracking-tighter text-[#1a1a1a] leading-none drop-shadow-sm">
              AKASHIC
            </h1>
            <p className="text-sm font-extrabold tracking-[0.35em] text-[#222] pl-1">
              BOOKS
            </p>
          </button>
        </div>

        {/* RIGHT: Search & Shopping Cart */}
        <div className="flex items-center gap-2 w-full sm:w-auto lg:w-[260px] justify-center lg:justify-end order-3">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-1.5 w-full max-w-[230px]"
          >
            <input
              type="text"
              placeholder="Search term..."
              className="w-full bg-white border border-gray-400 rounded px-2.5 py-1.5 text-xs text-gray-700 focus:outline-none focus:border-red-800 shadow-inner"
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-[#a81818] to-[#7a0e0e] hover:from-[#c01e1e] hover:to-[#8f1212] text-white text-[11px] font-bold px-3 py-1.5 rounded shadow cursor-pointer shrink-0"
            >
              SEARCH
            </button>
          </form>

          <button
            className="p-1.5 text-[#9e1b1b] hover:text-black cursor-pointer shrink-0"
            title="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6 fill-[#9e1b1b]/20" />
          </button>
        </div>

      </div>

      {/* BOTTOM ROW: White Tab Navigation */}
      <nav className="flex flex-wrap items-end justify-center gap-1.5">
        {navItems.map((item) => {
          const isActive = activePage === item;
          return (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`px-3.5 py-2 text-xs font-bold tracking-wide rounded-t-sm transition-colors cursor-pointer ${
                isActive
                  ? "bg-white text-black pb-2.5 shadow-sm"
                  : "bg-white/95 text-[#9e1b1b] hover:bg-white hover:text-black mb-0.5"
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