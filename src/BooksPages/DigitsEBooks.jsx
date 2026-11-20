
import React from "react";

const digitsEBooks = [
  {
    id: 1,
    title: "Digit's Place",
    author: " Megan Bell Smith ",
    description:
      "An illustrated children's book introducing young readers to a colorful world of numbers and learning.",
    image: "/Digit and ebook/digit 1.png",
    amazonLink:
      "https://www.amazon.com/dp/B09BYPQY2Y",
  },
  {
    id: 2,
    title: "Meet the Digits",
    author: " Stacey Samuels ",
    description:
      "A fun, colorful introduction to digits, designed to make early number learning engaging for children.",
    image: "/Digit and ebook/digit 2.png",
    amazonLink:
      "https://www.amazon.com/dp/B0HPM32JH9",
  },
  {
    id: 3,
    title: "Digits of √2",
    author: "T. Jobe",
    description:
      "A mathematics-inspired literary work featuring an artistic black-and-white cover.",
    image: "/Digit and ebook/digit 3.png",
    amazonLink:
      "https://www.amazon.com/dp/B0CV6B3F2S",
  },
  {
    id: 4,
    title: "Death by Digits: Murder Mystery Sudoku",
    author: "Creative Masterson",
    description:
      "A collection of murder-mystery-themed Sudoku puzzles for readers who enjoy numbers, logic, and a good challenge.",
    image: "/Digit and ebook/digit 4.jpg",
    amazonLink:
      "https://www.amazon.com/dp/B0HRW17G2X",
  },
  
  {
    id: 6,
    title: "Multi-Digit Multiplication Workbook: Grades 4–6",
    author: "saviola tinno",
    description:
      "A step-by-step multiplication workbook with practice exercises and an answer key to help students build confidence.",
    image: "/Digit and ebook/digit 6.jpg",
    amazonLink:
      "https://www.amazon.com/dp/B0HRJ3T7L8",
  },
  {
    id: 7,
    title: "The Digit Zero",
    author: "Moshood Abiola",
    description:
      "A story centered on a professor, an intelligent student, an answer, and the secret of great achievement.",
    image: "/Digit and ebook/digit 7.jpg",
    amazonLink:
      "https://www.amazon.com/dp/B0FSCBMCTZ",
  },
  {
    id: 8,
    title: "Single Digit Addition Vertical Worksheet",
    author: "narinzoon",
    description:
      "A beginner-friendly worksheet book featuring vertical single-digit addition exercises for young learners.",
    image: "/Digit and ebook/digit 8.jpg",
    amazonLink:
      "https://www.amazon.com/dp/B0DJBRCJ6S",
  },
  {
    id: 9,
    title: "Multi-Digit Multiplication Workbook: Grade 4",
    author: "H M Shafique ",
    description:
      "A grade 4 multiplication practice workbook covering multi-digit problems with space for working out answers.",
    image: "/Digit and ebook/digit 9.jpg",
    amazonLink:
      "https://www.amazon.com/dp/B0HRTDY6RS",
  },
  
];

export default function DigitsEBooks() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">
      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Digits &amp; E-Books
        </h1>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {digitsEBooks.map((book, index) => (
          <article
            key={book.id}
            className={`
              flex items-start gap-3 p-4
              min-h-[190px]
              border-b border-gray-200
              hover:bg-[#faf9f6]
              transition-colors duration-200
              ${index % 2 === 0 ? "md:border-r" : ""}
            `}
          >
            {/* Book Cover */}
            <div className="w-[85px] sm:w-[95px] shrink-0">
              <img
                src={encodeURI(book.image)}
                alt={book.title}
                className="
                  w-full h-auto object-contain
                  border border-gray-200 shadow-sm
                "
                loading="lazy"
              />
            </div>

            {/* Book Information */}
            <div className="flex-1 min-w-0">
              {/* Title */}
              <h2 className="text-[13px] font-bold text-[#9e1b1b] leading-snug mb-1">
                {book.title}
              </h2>

              {/* Author */}
              {book.author && (
                <p className="text-[11px] text-[#9e1b1b] mb-2">
                  By {book.author}
                </p>
              )}

              {/* Description */}
              <p className="text-[11px] text-gray-700 leading-relaxed mb-3">
                {book.description}
              </p>

              {/* Amazon Link */}
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  justify-center gap-1
                  mt-1 px-3 py-1.5
                  bg-[#9e1b1b] text-white
                  text-[10px] font-semibold
                  rounded-sm
                  hover:bg-[#7f1515]
                  transition-colors duration-200
                "
              >
                View on Amazon
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
