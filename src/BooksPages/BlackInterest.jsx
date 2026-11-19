
import React from "react";

// ======================================
// BLACK INTEREST BOOK COLLECTION
// ======================================

const blackInterestBooks = [
  {
    id: 1,
    title: "The Black State",
    author: "Angry Biracial",
    description:
      "A dark, dystopian story exploring identity, power, oppression, and survival in a divided society.",
    image: "/Black Interest/book intrest 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0H3F9PJC1",
  },
  {
    id: 2,
    title: "The Mis-Education of the Negro",
    author: "Carter Godwin Woodson",
    description:
      "A landmark examination of the American education system and its historical impact on Black identity, culture, and intellectual independence.",
    image: "/Black Interest/book intrest 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B09VWRWW6K",
  },
  {
    id: 3,
    title: "Understanding Black Identity Extremism",
    author: "Kyle Shideler",
    description:
      "A study of Black Identity Extremism and its implications for law enforcement, public safety, and security.",
    image: "/Black Interest/book intrest 3.jpg",
    amazonLink: "https://www.amazon.co.jp/-/en/Kyle-Shideler/dp/B0CKT2YY2V",
  },
  {
    id: 4,
    title: "The Black Effect",
    author: "Charae Lewis",
    description:
      "A thought-provoking work exploring themes of influence, identity, power, and the consequences of personal choices.",
    image: "/Black Interest/book intrest 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0851LYC73",
  },
  {
    id: 5,
    title: "The Black Effect: The Day the Cold War Turned Hot",
    author: "Harvey Black",
    description:
      "A Cold War thriller exploring the danger of escalating international tensions and the possibility of global conflict.",
    image: "/Black Interest/book intrest 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B08TQCNGPD",
  },
  {
    id: 6,
    title: "The Negro Question Part 6: The 13 Black Colonies",
    author: "Lee Cummings",
    description:
      "An exploration of historical narratives, Black heritage, and the thirteen Black colonies.",
    image: "/Black Interest/book intrest 6.jpg",
    amazonLink: "https://www.amazon.com/dp/1539742210",
  },
  {
    id: 7,
    title: "The Negro Question Part 3: The Black Pentecost",
    author: "Lee Cummings",
    description:
      "Part of The Negro Question series, examining historical, cultural, and religious perspectives on Black identity.",
    image: "/Black Interest/book intrest 7.jpg",
    amazonLink: "https://www.amazon.com/dp/1503335763",
  },
  {
    id: 8,
    title: "500 Amazing Facts About the Negro: With Complete Proof",
    author: "Chase McGhee",
    description:
      "A collection of historical facts highlighting Black achievements, contributions, and heritage across North America and beyond.",
    image: "/Black Interest/book intrest 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0C12527KQ",
  },
  {
    id: 9,
    title:
      "Resilient Black America: Navigating Recession Amidst DEI and Federal Program Cuts",
    author: "Kiyon Harcum",
    description:
      "An examination of economic challenges, changing DEI initiatives, and the resilience of Black American communities.",
    image: "/Black Interest/book intrest 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0F4NPJVJS",
  },
  {
    id: 10,
    title: "Black Luck",
    author: "Brad Magnarella",
    description:
      "A supernatural urban fantasy adventure from the Prof Croft series, filled with magic, mystery, and danger.",
    image: "/Black Interest/book intrest 10.jpg",
    amazonLink: "https://www.amazon.com/dp/1720517681",
  },
];

// ======================================
// BLACK INTEREST PAGE
// ======================================

export default function BlackInterest() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Black Interest
        </h1>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {blackInterestBooks.map((book, index) => (
          <article
            key={book.id}
            className={`
              flex items-start gap-3
              p-4
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
                alt={`${book.title} by ${book.author}`}
                className="w-full h-auto object-contain border border-gray-200 shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Book Details */}
            <div className="flex-1 min-w-0">

              {/* Book Title */}
              <h2 className="text-[13px] font-bold text-[#9e1b1b] leading-snug mb-1">
                {book.title}
              </h2>

              {/* Author Name */}
              <p className="text-[11px] text-[#9e1b1b] mb-2">
                By {book.author}
              </p>

              {/* Book Description */}
              <p className="text-[11px] text-gray-700 leading-relaxed mb-3">
                {book.description}
              </p>

              {/* Amazon Button */}
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  gap-1
                  mt-1 px-3 py-1.5
                  bg-[#9e1b1b]
                  text-white
                  text-[10px] font-semibold
                  rounded-sm
                  hover:bg-[#7f1515]
                  transition-colors duration-200
                  no-underline
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
