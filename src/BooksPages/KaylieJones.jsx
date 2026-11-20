import React from "react";

// =====================================
// KAYLIE JONES BOOKS DATA
// =====================================

const kaylieJonesBooks = [
  {
    id: 1,

    title: "I Will Never Give Up Because My Name Is Kaylie",

    author: "Book For Kaylie ",

    description:
      "An inspiring personalized book featuring the name Kaylie and a positive message about determination, confidence, and never giving up. A thoughtful gift for someone named Kaylie.",

    image: "/kaylie-jones/kaylie-jones 1.png",

    amazonLink: "https://www.amazon.com/dp/B09YJVBV4H",
  },

  {
    id: 2,

    title: "A Blessing for Kaylie",

    author: " Miles Tucker",

    description:
      "A beautifully illustrated personalized book celebrating the name Kaylie. With its gentle and uplifting theme, this book makes a charming keepsake and a meaningful gift for a child named Kaylie.",

    image: "/kaylie-jones/kaylie-jones 2.jpg",

    amazonLink: "https://www.amazon.com/dp/B09L3YWNPX",
  },

  {
    id: 3,

    title: "Kyle & Kaylie: A Transplant Tale",

    author: "Hyewon Suh",

    description:
      "A children's story centered on Kyle and Kaylie, introducing the subject of transplantation through an illustrated tale. A title for readers interested in stories about health, care, and understanding.",

    image: "/kaylie-jones/kaylie-jones 3.jpg",

    amazonLink: "https://www.amazon.com/dp/B0CDNJ64QT",
  },

  {
    id: 4,

    title: "I'm Kaylie Doing Kaylie Things",

    author: " Christian Lattimer",

    description:
      "A personalized notebook featuring a bold cover designed around the name Kaylie. Suitable for writing notes, keeping reminders, journaling, or recording everyday thoughts and ideas.",

    image: "/kaylie-jones/kaylie-jones 4.jpg",

    amazonLink: "https://www.amazon.com/dp/B085RTT7BM",
  },

  {
    id: 5,

    title: "Where in the World Is Kaylie?",

    author: "Miles Tucker ",

    description:
      "A colorful personalized search-and-find activity book featuring the name Kaylie. A playful choice for children who enjoy looking for hidden details and exploring busy illustrated scenes.",

    image: "/kaylie-jones/kaylie-jones 5.jpg",

    amazonLink: "https://www.amazon.com/dp/B08DBVR79J",
  },

  {
    id: 6,

    title: "The Amazing Thoughts and Brilliant Ideas of Kaylie",

    author: "",

    description:
      "A personalized notebook created for capturing thoughts, creative ideas, plans, and everyday notes. Its stylish cover makes it a practical writing companion and a fun gift for Kaylie.",

    image: "/kaylie-jones/kaylie-jones 6.jpg",

    amazonLink: "https://www.amazon.com/dp/B0BYRC1TDW",
  },

  {
    id: 7,

    title: "Kaylie: Personalized Journal Notebook",

    author: " Trlen Chhan ",

    description:
      "A personalized journal featuring the name Kaylie and a decorative cover. Ideal for recording memories, personal reflections, daily experiences, plans, and creative writing.",

    image: "/kaylie-jones/kaylie-jones 7.jpg",

    amazonLink: "https://www.amazon.com/dp/B09WHJSC7B",
  },

 
];

// =====================================
// KAYLIE JONES PAGE COMPONENT
// =====================================

export default function KaylieJones() {
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

          Kaylie Jones Books

        </h1>

      </div>

      {/* =====================================
          BOOKS GRID
      ===================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2">

        {kaylieJonesBooks.map((book, index) => (

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
                BOOK DETAILS
            ===================================== */}

            <div className="flex-1 min-w-0">

              {/* Book Title */}

              <h2 className="text-[13px] font-bold text-[#9e1b1b] leading-snug mb-1">

                {book.title}

              </h2>

              {/* Author Name */}

              {book.author && (

                <p className="text-[11px] text-gray-600 mb-2">

                  By{" "}

                  <span className="font-semibold">
                    {book.author}
                  </span>

                </p>

              )}

              {/* Book Description */}

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