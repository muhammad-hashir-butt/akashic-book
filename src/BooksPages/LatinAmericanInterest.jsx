import React from "react";

// ==========================================
// LATIN AMERICAN INTEREST BOOKS
// ==========================================

const latinAmericanBooks = [
  {
    id: 1,

    title:
      "The Latin American Surf Tales: A Solo Surf Journey Through Mexico, Central & South America",

    author: "Dan Harmon",

    description:
      "An adventurous travel memoir following a solo surfing journey through Latin America. From Mexico to Central and South America, this book explores beautiful coastlines, memorable experiences, local cultures, and the pursuit of incredible waves.",

    image: "/latin-american/latin-american 1.jpg",

    amazonLink: "https://www.amazon.com/dp/B0D3974HBW",
  },

  {
    id: 2,

    title: "Short Stories in Spanish for Beginners: Two",

    author: "Mind Smith ",

    description:
      "A Spanish-language learning book featuring short stories designed for beginner readers. It offers an enjoyable way to practice reading comprehension, build vocabulary, and become more comfortable understanding written Spanish.",

    image: "/latin-american/latin-american 2.jpg",

    amazonLink: "https://www.amazon.com/dp/B0HBXMB44W",
  },

  {
    id: 3,

    title: "Latin American Cookbook: Traditional Caribbean Recipes",

    author: "Brad Hoskinson",

    description:
      "Explore the flavors of Latin American and Caribbean cooking through a collection of traditional recipes. A cookbook for readers interested in regional cuisine, ingredients, culinary traditions, and preparing flavorful meals at home.",

    image: "/latin-american/latin-american 3.jpg",

    amazonLink: "https://www.amazon.com/dp/B0GHYKR3J6",
  },

  {
    id: 4,

    title: "Myths and Legends of Latin America",

    author: "Frédéric Veau",

    description:
      "Discover the folklore, myths, and legends associated with Latin American cultures. This book introduces readers to traditional tales, legendary characters, and stories that reflect the region's rich cultural imagination.",

    image: "/latin-american/latin-american 4.jpg",

    amazonLink: "https://www.amazon.com/dp/B0CRB66DLM",
  },

  {
    id: 5,

    title: "Latin American Civilization",

    author: " Mr Erik Haindl Rondanelli ",

    description:
      "An exploration of Latin American civilization, including the historical and cultural influences that have shaped the region. A title for readers interested in Latin American societies, historical development, and cultural identity.",

    image: "/latin-american/latin-american 5.jpg",

    amazonLink: "https://www.amazon.com/dp/B0HFV7835L",
  },

  {
    id: 6,

    title: "Short Stories: Father Latin American",

    author: "Horacio Quiroga",

    description:
      "A collection of short stories connected to Latin American themes. This title offers readers an opportunity to explore storytelling, personal experiences, and perspectives associated with the region.",

    image: "/latin-american/latin-american 6.jpg",

    amazonLink: "https://www.amazon.com/dp/B0B6LF72WF",
  },

  {
    id: 7,

    title: "5-Minute Latin American Spanish Journal",

    author: "Digital Polyglot ",

    description:
      "A language practice journal designed to encourage short, regular writing sessions in Latin American Spanish. It can help learners build consistency, practice vocabulary, and develop confidence in expressing everyday thoughts.",

    image: "/latin-american/latin-american 7.jpg",

    amazonLink: "https://www.amazon.com/dp/B0CYSWCMW8",
  },

  {
    id: 8,

    title:
      "Latin American Spanish Expressions: Upper-Intermediate",

    author: "Wordstay ",

    description:
      "A Spanish-language learning resource focused on expressions used in Latin American Spanish. Designed for upper-intermediate learners who want to expand their vocabulary and strengthen their understanding of everyday language.",

    image: "/latin-american/latin-american 8.jpg",

    amazonLink: "https://www.amazon.com/dp/B0HQJ9PKF7",
  },

  {
    id: 9,

    title: "Maravillas de Latinoamérica",

    author: "Digital Polyglot",

    description:
      "A colorful introduction to the wonders of Latin America, celebrating the region's beauty and cultural variety. This book invites readers to discover distinctive places, traditions, and the rich heritage of Latin American countries.",

    image: "/latin-american/latin-american 9.jpg",

    amazonLink: "https://www.amazon.com/dp/B0D5HD3W5V",
  },

  {
    id: 10,

    title:
      "Human Systems and Resources in Latin American Organizations",

    author: "Karen Tinoco",

    description:
      "A book examining human systems and organizational resources in a Latin American context. It introduces themes related to workplace structures, organizational practices, and the people and processes involved in institutions.",

    image: "/latin-american/latin-american 10.jpg",

    amazonLink: "https://www.amazon.com/dp/B0GZ4SH5Y2",
  },
];

// ==========================================
// LATIN AMERICAN INTEREST PAGE
// ==========================================

export default function LatinAmericanInterest() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className="px-5 py-3 border-b border-gray-200">

        <h1 className="text-[14px] font-bold text-[#222]">

          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}

          Latin American Interest

        </h1>

      </div>

      {/* =====================================
          BOOKS GRID
      ===================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2">

        {latinAmericanBooks.map((book, index) => (

          <article
            key={book.id}
            className={`
              flex
              items-start
              gap-3
              p-4
              min-h-[240px]
              border-b
              border-gray-200
              hover:bg-[#faf9f6]
              transition-colors
              duration-200
              ${index % 2 === 0 ? "md:border-r" : ""}
            `}
          >

            {/* =====================================
                BOOK COVER
            ===================================== */}

            <div className="w-[85px] sm:w-[95px] shrink-0">

              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${book.title} on Amazon`}
              >

                <img
                  src={encodeURI(book.image)}
                  alt={`${book.title} book cover`}
                  className="
                    w-full
                    h-auto
                    object-contain
                    border
                    border-gray-200
                    shadow-sm
                  "
                  loading="lazy"
                />

              </a>

            </div>

            {/* =====================================
                BOOK INFORMATION
            ===================================== */}

            <div className="flex-1 min-w-0">

              {/* BOOK TITLE */}

              <h2 className="text-[13px] font-bold text-[#9e1b1b] leading-snug mb-1">

                {book.title}

              </h2>

              {/* AUTHOR NAME */}

              {book.author && (

                <p className="text-[11px] text-gray-600 mb-2">

                  By{" "}

                  <span className="font-semibold">
                    {book.author}
                  </span>

                </p>

              )}

              {/* BOOK DESCRIPTION */}

              <p className="text-[11px] text-gray-700 leading-relaxed mb-3">

                {book.description}

              </p>

              {/* =====================================
                  AMAZON BUTTON
              ===================================== */}

              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1
                  mt-1
                  px-3
                  py-1.5
                  bg-[#9e1b1b]
                  text-white
                  text-[10px]
                  font-semibold
                  rounded-sm
                  hover:bg-[#7f1515]
                  transition-colors
                  duration-200
                "
              >

                View on Amazon

                <span aria-hidden="true">
                  ↗
                </span>

              </a>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
}