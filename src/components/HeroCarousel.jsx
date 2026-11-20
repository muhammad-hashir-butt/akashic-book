import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Welcome to Thundersmouth Press",
    author: "Discover Stories Worth Reading",
    quote:
      "“Every book opens the door to a new world. Explore compelling stories, unforgettable characters, and fresh perspectives through a diverse collection of books.”",
    source: "— Thundersmouth Press",
    bgGradient: "from-[#262626] via-[#333333] to-[#4f1414]",
  },
  {
    title: "Explore Our Book Collection",
    author: "Find Your Next Great Read",
    quote:
      "“From captivating fiction and fascinating nonfiction to inspiring children's books, discover titles that entertain, inform, and spark the imagination.”",
    source: "— Browse Our Books",
    bgGradient: "from-[#5e1111] via-[#7a1818] to-[#2a2a2a]",
  },
  {
    title: "Discover Remarkable Authors",
    author: "Meet the Voices Behind the Books",
    quote:
      "“Behind every memorable book is a creative voice with something meaningful to share. Explore our author directory and discover the stories that make each writer unique.”",
    source: "— Explore Our Authors",
    bgGradient: "from-[#292929] via-[#551717] to-[#333333]",
  },
  {
    title: "Your Next Story Starts Here",
    author: "Books for Every Kind of Reader",
    quote:
      "“Whether you enjoy literary fiction, imaginative adventures, thought-provoking nonfiction, or books for young readers, there's always something new waiting to be discovered.”",
    source: "— Thundersmouth Press",
    bgGradient: "from-[#4f1414] via-[#333333] to-[#262626]",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  const slide = slides[current];

  return (
    <div className="mb-5 border border-gray-300 bg-white shadow-md rounded-sm overflow-hidden">

      {/* Top Dark Header Bar (Matches Navbar Theme) */}
      <div className="bg-[#333333] border-b-2 border-[#9e1b1b] px-4 py-2 flex items-center justify-between gap-2">

        <div className="flex items-center gap-2.5 min-w-0">

          <span className="bg-[#9e1b1b] text-yellow-300 text-[10px] font-extrabold px-2 py-0.5 rounded-sm tracking-wider uppercase shrink-0">
            Featured
          </span>

          <span className="text-white text-xs sm:text-sm font-bold tracking-wide truncate">
            {slide.title}
          </span>

        </div>

        {/* Clickable Slide Indicator Dots */}
        <div className="flex items-center gap-1.5 shrink-0">

          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={current === idx ? "true" : undefined}
              className={`h-2 rounded-full cursor-pointer ${
                current === idx
                  ? "w-5 bg-[#9e1b1b]"
                  : "w-2 bg-gray-500"
              }`}
            />
          ))}

        </div>

      </div>

      {/* Main Showcase Banner */}
      <div
        className={`bg-gradient-to-r ${slide.bgGradient} text-white px-5 sm:px-7 py-6 flex flex-col md:flex-row items-center gap-6`}
      >

        {/* LEFT: Book Imagery */}
        <div className="flex items-end gap-3.5 shrink-0">

          {/* Book Image */}
          <div className="relative w-28 h-40 sm:w-32 sm:h-44 bg-[#1a1a1a] border-2 border-white/80 shadow-xl">

            <img
              src="https://plus.unsplash.com/premium_photo-1775113885027-d0f57ce69c99?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Books and reading inspiration"
              className="w-full h-full object-cover"
            />

            <span className="absolute -top-2.5 -left-2.5 bg-[#9e1b1b] text-yellow-300 text-[10px] font-extrabold px-2.5 py-1 rounded-sm border border-yellow-300/60 shadow">
              DISCOVER!
            </span>

          </div>

          {/* Reading Image */}
          <div className="w-24 h-32 sm:w-28 sm:h-36 bg-[#1a1a1a] border border-white/40 shadow-lg overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&q=80"
              alt="Reader enjoying a book"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        {/* RIGHT: Editorial Text */}
        <div className="flex-1 text-center md:text-left">

          <h3 className="text-yellow-300 text-xl sm:text-2xl font-extrabold leading-tight tracking-tight">
            {slide.title}
          </h3>

          <p className="text-gray-200 text-sm sm:text-base font-semibold mt-0.5 mb-3">
            {slide.author}
          </p>

          {/* Description Card */}
          <div className="bg-black/25 border-l-4 border-[#9e1b1b] px-4 py-3 rounded-r-sm max-w-lg mx-auto md:mx-0">

            <p className="text-xs sm:text-sm italic text-gray-100 leading-relaxed">
              {slide.quote}
            </p>

            {slide.source && (
              <p className="text-xs font-bold text-yellow-300/90 mt-1.5">
                {slide.source}
              </p>
            )}

          </div>

        </div>

      </div>

      {/* Bottom Navigation Strip */}
      <div className="bg-[#e8e6df] border-t border-gray-300 px-4 py-2 flex items-center justify-between">

        <span className="text-[11px] font-bold text-[#333333] uppercase tracking-wider">
          Spotlight {current + 1} of {slides.length}
        </span>

        <div className="flex items-center gap-1.5">

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="bg-[#333333] text-white px-2.5 py-1 rounded-sm flex items-center gap-1 text-[11px] font-bold cursor-pointer hover:bg-[#222222] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Prev
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="bg-[#9e1b1b] text-white px-2.5 py-1 rounded-sm flex items-center gap-1 text-[11px] font-bold cursor-pointer hover:bg-[#7f1515] transition-colors"
          >
            Next
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

    </div>
  );
}