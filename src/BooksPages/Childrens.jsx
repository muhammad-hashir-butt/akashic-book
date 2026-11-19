
import React from "react";

// ======================================
// CHILDREN'S BOOK COLLECTION
// ======================================

const childrensBooks = [
  {
    id: 1,
    title:
      "The American History Mystery Series: The Declaration of Independence",
    author: " Sam Bright ",
    description:
      "An illustrated history adventure introducing young readers to the Declaration of Independence and an important moment in American history.",
    image: "/childrens/childrens 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0FVW2WGPM",
  },
  {
    id: 2,
    title: "Pride in San Francisco: A Coloring Book",
    author: " S. Lambert ",
    description:
      "A colorful activity book celebrating San Francisco, its iconic landmarks, community, diversity, and joyful moments through creative coloring.",
    image: "/childrens/childrens 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HRQXLYJP",
  },
  {
    id: 3,
    title: "2nd Grade Social Studies and U.S. History Workbook",
    author: "Christa Nonnemaker",
    description:
      "An educational workbook designed to introduce second-grade students to American history, social studies, geography, and engaging learning activities.",
    image: "/childrens/childrens 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HLN8FBCJ",
  },
  {
    id: 4,
    title: "New Cat at the Lake!",
    author: "J. S. Hanes",
    description:
      "A charming illustrated children's story featuring a curious cat and a lakeside adventure, celebrating friendship and discovery.",
    image: "/childrens/childrens 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HRHMKZ9Y",
  },
  {
    id: 5,
    title: "Growing with God Every Day",
    author: "Courtney S. Warren",
    description:
      "A children's devotional workbook encouraging young readers to grow in faith through daily reflections, inspirational lessons, and activities.",
    image: "/childrens/childrens 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HP9M5F69",
  },
  {
    id: 6,
    title: "The Birth of a Savior: A KJV Bible Story Coloring Book for Children",
    author: "Charles S. Smith",
    description:
      "A Bible-themed coloring book introducing children to the story of Jesus' birth through illustrations inspired by the King James Version.",
    image: "/childrens/childrens 6.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HR743VPN",
  },
  {
    id: 7,
    title: "Whoosh! The Thankful Jar Adventure",
    author: "C. S. Kalapala",
    description:
      "A heartwarming illustrated children's adventure featuring Peanut, Biscuit, and Pepper as they explore gratitude, kindness, and friendship.",
    image: "/childrens/childrens 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HNSMX5S9",
  },
  {
    id: 8,
    title: "Adina's Chanukah Lights: A Coloring Book Story",
    author: "Mary S.",
    description:
      "A festive children's coloring story celebrating Chanukah traditions, family togetherness, holiday lights, and meaningful moments.",
    image: "/childrens/childrens 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HRFDRTJX",
  },
  {
    id: 9,
    title: "Kingdom Kids ABC: Learning God's Word from A to Z",
    author: "Jewel Simpson",
    description:
      "A faith-based alphabet learning book helping young children explore letters, biblical concepts, and positive Christian values.",
    image: "/childrens/childrens 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HRLTRR7V",
  },
  {
    id: 10,
    title: "The Grumbly Jumbly Again",
    author: "Don S. Roth",
    description:
      "An imaginative illustrated children's story featuring the mysterious Grumbly Jumbly and a whimsical adventure.",
    image: "/childrens/childrens 10.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HNKTR5CV",
  },
];

// ======================================
// CHILDREN'S PAGE COMPONENT
// ======================================

export default function Childrens() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Children's
        </h1>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {childrensBooks.map((book, index) => (
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
                alt={book.title}
                className="w-full h-auto object-contain border border-gray-200 shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Book Information */}
            <div className="flex-1 min-w-0">

              {/* Book Title */}
              <h2 className="text-[13px] font-bold text-[#9e1b1b] leading-snug mb-1">
                {book.title}
              </h2>

              {/* Author Name */}
              {book.author && (
                <p className="text-[11px] text-[#9e1b1b] mb-2">
                  By {book.author}
                </p>
              )}

              {/* Description */}
              <p className="text-[11px] text-gray-700 leading-relaxed mb-3">
                {book.description}
              </p>

              {/* View on Amazon Button */}
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
