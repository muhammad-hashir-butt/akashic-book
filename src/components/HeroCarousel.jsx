import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "A Good Haunting: Stories",
    author: "by Carol Mitchel",
    quote:
      "“This ghostly collection about death, motherhood, and impossible choices is perfect for fans of Beloved.”",
    source: "—Booklist",
    bgGradient: "from-[#4e4ca0] via-[#6260b8] to-[#3c59a8]",
  },
  {
    title: "New Fiction & Noir Releases",
    author: "Explore Our Latest Catalog",
    quote:
      "“Independent publishing with bold voices from Brooklyn and around the world.”",
    source: "—Akashic Books",
    bgGradient: "from-[#7a1c1c] via-[#9b2b2b] to-[#4a1010]",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const slide = slides[current];

  return (
    <div className="mb-5">
      {/* Top Dark Caption Strip */}
      <div className="bg-[#333333] text-white text-center py-2 text-xs sm:text-sm font-bold tracking-wide">
        {slide.title}
      </div>

      {/* Yellow Border Frame */}
      <div className="border-2 border-[#e5c100] bg-[#fffbe0] p-1.5 relative">
        <div
          className={`relative bg-gradient-to-r ${slide.bgGradient} text-white min-h-[230px] sm:min-h-[255px] flex flex-col sm:flex-row items-center justify-between gap-5 px-10 py-5 overflow-hidden`}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/80 text-white p-1.5 cursor-pointer z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* LEFT: Text Content */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-[#f7e27d] text-xl sm:text-2xl font-bold leading-tight">
              {slide.title}
            </h3>
            <p className="text-[#f7e27d] text-base sm:text-lg font-semibold mb-3">
              {slide.author}
            </p>
            <p className="text-xs sm:text-sm italic text-white/95 max-w-md mx-auto sm:mx-0">
              {slide.quote}
            </p>
            <p className="text-xs italic text-white/90 mt-1">{slide.source}</p>
          </div>

          {/* RIGHT: Book Cover + Author Portrait */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Book Cover + OUT NOW Badge */}
            <div className="relative w-28 h-40 bg-black/40 border border-white/40 shadow-xl shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80"
                alt="Book Cover"
                className="w-full h-full object-cover"
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-extrabold px-2 py-2 rounded-full border-2 border-white shadow">
                OUT NOW!
              </span>
            </div>

            {/* Author Portrait */}
            <div className="w-32 h-40 sm:w-36 sm:h-44 bg-black/30 border border-white/30 overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&q=80"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/80 text-white p-1.5 cursor-pointer z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}