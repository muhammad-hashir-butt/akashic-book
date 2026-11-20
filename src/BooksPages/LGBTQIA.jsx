import React from "react";

// ==========================================
// LGBTQIA+ INTEREST BOOKS DATA
// ==========================================

const lgbtqiaBooks = [
  {
    id: 1,

    title:
      "A to Z of LGBTQ+ Terms, Colour Edition",

    author: "Katrina Maxwell / LGBT Llama",

    description:
      "An educational colouring and activity book for ages 11 and up. Featuring LGBTQ+ terminology, colouring pages, puzzles, activities, and historical information, this book offers an interactive introduction to LGBTQ+ identities and language.",

    image: "/LGBTQIA/LGBTQIA 1.jpg",

    amazonLink: "https://www.amazon.com/dp/B0BQ9KYFDV",
  },

  {
    id: 2,

    title:
      "Queerology 101: Rainbow Ally Understanding",

    author: "Shaun Lee ",

    description:
      "An introductory resource about LGBTQ+ identities, language, and experiences. Designed for readers interested in learning more about the queer community and developing greater awareness, understanding, and support for LGBTQ+ people.",

    image: "/LGBTQIA/LGBTQIA 2.jpg",

    amazonLink: "https://www.amazon.com/dp/B0GY1QK7FF",
  },

  {
    id: 3,

    title:
      "Consent in Queer Relationships",

    author: " Finn Harold Scott",

    description:
      "A guide focused on consent in LGBTQIA+ relationships. It introduces topics such as communication, personal boundaries, mutual respect, and the importance of understanding and honoring individual choices within relationships.",

    image: "/LGBTQIA/LGBTQIA 3.jpg",

    amazonLink: "https://www.amazon.com/dp/B0DJTC7R75",
  },

  {
    id: 4,

    title:
      "The Many Shapes of Love: Rose n’ Thorn Poetry, Vol. 3",

    author: "Vera Murphy",

    description:
      "A poetry collection exploring love, emotional vulnerability, self-discovery, and the complexity of human relationships. Through reflective verse, this volume considers what it means to love courageously while maintaining a sense of self.",

    image: "/LGBTQIA/LGBTQIA 4.jpg",

    amazonLink: "https://www.amazon.com/dp/B0HMSM3S7B",
  },

  {
    id: 5,

    title:
      "LGBTQIA+ Activism, Advocacy, Resistance & Community",

    author: " Yet Fry ",

    description:
      "An exploration of LGBTQIA+ advocacy and community action. This book introduces themes of activism, collective identity, resistance, solidarity, and efforts to promote visibility, equality, and inclusion.",

    image: "/LGBTQIA/LGBTQIA 5.jpg",

    amazonLink: "https://www.amazon.com/dp/B0GCRP6ZST",
  },

  {
    id: 6,

    title:
      "Understanding LGBTQ+: An Adult Guide to Inclusion",

    author: " Sunderland LGBT+ Network ",

    description:
      "An introductory guide for adults who want to better understand LGBTQ+ identities and experiences. It addresses the importance of respectful communication, awareness, acceptance, and creating more inclusive environments.",

    image: "/LGBTQIA/LGBTQIA 6.jpg",

    amazonLink: "https://www.amazon.com/dp/B0H3LPSMYF",
  },

  {
    id: 7,

    title:
      "LGBTQ+ Guide to Mixed-Orientation Marriages",

    author: "Alex Harper",

    description:
      "A relationship guide addressing the experiences and challenges of mixed-orientation marriages. Topics include emotional resilience, identity exploration, coming out, communication, and navigating relationships with understanding and care.",

    image: "/LGBTQIA/LGBTQIA 7.jpg",

    amazonLink: "https://www.amazon.com/dp/B0D6R9JSL7",
  },

  {
    id: 8,

    title:
      "Brave Queer Becoming: Identity & Self-Love",

    author: "Dr Richard L Travis ",

    description:
      "A reflective book centered on queer identity, self-acceptance, and personal growth. It explores themes of individuality, authenticity, courage, and the ongoing journey toward greater confidence and self-love.",

    image: "/LGBTQIA/LGBTQIA 8.jpg",

    amazonLink: "https://www.amazon.com/dp/B0F8TXLPJV",
  },
];

// ==========================================
// LGBTQIA+ INTEREST PAGE COMPONENT
// ==========================================

export default function LGBTQIA() {
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

          LGBTQIA+ Interest

        </h1>

      </div>

      {/* =====================================
          BOOKS GRID
      ===================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2">

        {lgbtqiaBooks.map((book, index) => (

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