import React from "react";

const infamousBooks = [
  {
    id: 1,
    title:
      "Infamous Lady: The True Story of Countess Erzsébet Báthory",
    author: "Kimberly L. Craft",
    description:
      "An extensively researched historical account of Countess Erzsébet Báthory, one of history's most controversial figures. Drawing on historical documents, letters, and trial records, the book examines the life, accusations, and enduring legends surrounding the infamous Hungarian countess.",
    image: "/infamous book/infamous book 1.jpg",
    amazonLink: "https://www.amazon.com/dp/1502581469",
  },

  {
    id: 2,
    title: "INFAMOUS: A Dark Serial Killer Romance",
    author: "Iris T Cannon ",
    description:
      "A dark romance centered on dangerous attraction, psychological tension, and morally complicated characters. Blending elements of suspense and romance, this story explores the unsettling boundaries between obsession, desire, and danger.",
    image: "/infamous book/infamous book 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B0G1KGZ71Q",
  },

  {
    id: 3,
    title:
      "American Hotel Story: History, Hauntings, and Heartbreak in LA's Infamous Hotel Cecil",
    author: "Richard Estep",
    description:
      "An exploration of the mysterious history of Los Angeles' notorious Cecil Hotel. Combining historical accounts with stories of tragedy and reported paranormal activity, this book examines the events and legends that have made the hotel infamous.",
    image: "/infamous book/infamous book 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0928FYTQJ",
  },

  {
    id: 4,
    title: "Infamous Sis: The Missing Link",
    author: " Loretta L. Mallory",
    description:
      "A story exploring identity, personal relationships, and the search for important connections. With themes of discovery and determination, the book invites readers into a narrative built around uncovering missing pieces of a larger story.",
    image: "/infamous book/infamous book 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DWHL83Y8",
  },

  {
    id: 5,
    title: "Infamous Vol. 1: Riders of Modern Mythology",
    author: " Malcolm Harris",
    description:
      "An illustrated adventure inspired by modern mythology and larger-than-life characters. Combining imaginative storytelling with striking visual themes, this volume introduces readers to a world of action, mystery, and legendary figures.",
    image: "/infamous book/infamous book 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DNBCLRXV",
  },

  {
    id: 6,
    title: "Infamous Boss",
    author: "G. Omonuwa",
    description:
      "A character-driven work exploring ambition, influence, and the complexities of leadership. Through themes of authority, personal choices, and determination, the book offers readers a story centered on power and its consequences.",
    image: "/infamous book/infamous book 6.jpg",
    amazonLink: "https://www.amazon.com/dp/B0BSS5FL2D",
  },

  {
    id: 7,
    title:
      "Infamous Darren and the Twelve Zodiacs: Issue #1",
    author: "Dorain P. Davis Jr.",
    description:
      "The opening installment of an illustrated series featuring Infamous Darren and the Twelve Zodiacs. Introducing a world of extraordinary characters and imaginative adventures, this issue begins a comic-inspired journey filled with mystery and action.",
    image: "/infamous book/infamous book 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B09X1R76JX",
  },

  {
    id: 8,
    title: "The Infamous Four-Way",
    author: "Travis B.",
    description:
      "A dramatic work exploring complicated relationships, conflicting interests, and the consequences of difficult decisions. The story's central theme invites readers to consider the tensions that emerge when different lives and choices intersect.",
    image: "/infamous book/infamous book 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0FQ1CG3SX",
  },

  {
    id: 9,
    title:
      "Infamous Darren and the Twelve Zodiacs",
    author: "Dorain P. Davis Jr.",
    description:
      "An illustrated installment in the Infamous Darren and the Twelve Zodiacs series. Featuring an imaginative cast and comic-book-inspired storytelling, this volume continues exploring the fictional world surrounding Darren and the zodiac-themed characters.",
    image: "/infamous book/infamous book 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0B7QP8PHP",
  },

  {
    id: 10,
    title: "Profiles of Infamous Thieves",
    author: " Shah Rukh",
    description:
      "A historical exploration of notorious thieves and the stories behind their reputations. Through biographical profiles, the book introduces readers to individuals associated with remarkable thefts, criminal exploits, and enduring historical intrigue.",
    image: "/infamous book/infamous book 10.jpg",
    amazonLink: "https://www.amazon.com/dp/B0D1Y1BD49",
  },
];

export default function InfamousBooks() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">

        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Infamous Books
        </h1>

      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {infamousBooks.map((book, index) => (

          <article
            key={book.id}
            className={`
              flex items-start gap-3 p-4
              min-h-[240px]
              border-b border-gray-200
              hover:bg-[#faf9f6]
              transition-colors duration-200
              ${index % 2 === 0 ? "md:border-r" : ""}
            `}
          >

            {/* Book Cover */}
            <div className="w-[85px] sm:w-[95px] shrink-0">

              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${book.title} on Amazon`}
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

            {/* Book Details */}
            <div className="flex-1 min-w-0">

              {/* Book Title */}
              <h2
                className="
                  text-[13px]
                  font-bold
                  text-[#9e1b1b]
                  leading-snug
                  mb-1
                "
              >
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
              <p
                className="
                  text-[11px]
                  text-gray-700
                  leading-relaxed
                  mb-3
                "
              >
                {book.description}
              </p>

              {/* Amazon Button */}
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