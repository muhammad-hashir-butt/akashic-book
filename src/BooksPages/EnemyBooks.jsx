
import React from "react";

const enemyBooks = [
  {
    id: 1,
    title: "The Enemy Within (The Paladin Chronicles, Book 6)",
    author: "Neil Port",
    description:
      "An epic fantasy adventure involving an assassin sent to eliminate a powerful enemy, only to face unexpected dangers and complicated emotions.",
    image: "/enemy-books/enemy-books 1.png",
    amazonLink: "https://www.amazon.com/dp/B077NQSMKX",
  },
  {
    id: 2,
    title: "The Enemy Was Never Each Other",
    author: "Mike Roberts",
    description:
      "A thought-provoking examination of division in America, exploring how oligarchic power—rather than ordinary citizens—fuels social and political conflict.",
    image: "/enemy-books/enemy-books 2.png",
    amazonLink: "https://www.amazon.com/dp/B0HMFLX55Q",
  },
  {
    id: 3,
    title: "The Last Enemy: A Final Message to My Children",
    author: "R. W. Reed",
    description:
      "A heartfelt reflection and legacy of personal wisdom, faith, and enduring life lessons written as a final message from a parent to their children.",
    image: "/enemy-books/enemy-books 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HNTX8N84",
  },
  {
    id: 4,
    title:
      "Enemy at the Gate: Ancient Enemies and the God Who Never Loses",
    author: "DN Fairweather",
    description:
      "A faith-based study exploring ancient enemies, biblical history, spiritual challenges, and practical lessons for contemporary life.",
    image: "/enemy-books/enemy-books 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HHD4RX85",
  },
  {
    id: 5,
    title: "Friends and Enemies (Kings and Kingdoms, Book 2)",
    author: "Merry Farmer",
    description:
      "A historical fantasy romance exploring political alliances, loyalty, relationships, and the dangers of entering an enemy kingdom.",
    image: "/enemy-books/enemy-books 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0CBQ87G98",
  },
  {
    id: 6,
    title: "An Enemy of the People",
    author: "Henrik Ibsen",
    description:
      "A classic play examining truth, public opinion, political pressure, and the struggle of an individual who challenges the beliefs of society.",
    image: "/enemy-books/enemy-books 6.jpg",
    amazonLink: "https://www.amazon.com/dp/150258316X",
  },
  {
    id: 7,
    title: "Exposing the Enemy",
    author: "Holly Gernatt",
    description:
      "A Scripture-centered biblical workbook designed to help women recognize spiritual lies, overcome fear and insecurity, and walk in the truth and freedom of Christ.",
    image: "/enemy-books/enemy-books 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HHHGRGLP",
  },
  {
    id: 8,
    title:
      "Unmasking the Enemy Part Two: Equipped for Battle — Practical Application for Spiritual Warfare",
    author: "Frances Rey",
    description:
      "A Christian spiritual warfare guide offering practical applications, biblical reflections, and guidance for putting spiritual principles into action.",
    image: "/enemy-books/enemy-books 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GR5ZM7GR",
  },
  {
    id: 9,
    title: "All His Broken Pieces (Perfectly Imperfect)",
    author: "West Greene",
    description:
      "An emotional contemporary romance exploring vulnerability, relationships, personal struggles, and the possibility of healing.",
    image: "/enemy-books/enemy-books 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0BQ57Y38J",
  },
  {
    id: 10,
    title: "What the Enemy Intended for Evil",
    author: "Heather Spain",
    description:
      "An inspiring faith-based story of resilience and redemption, showing how pain and adversity can be transformed into strength, healing, and purpose.",
    image: "/enemy-books/enemy-books 10.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HLRSNV86",
  },
];

export default function EnemyBooks() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Enemy Books
        </h1>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {enemyBooks.map((book, index) => (
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

              {/* Book Title */}
              {book.title && (
                <h2 className="text-[13px] font-bold text-[#9e1b1b] leading-snug mb-1">
                  {book.title}
                </h2>
              )}

              {/* Author Name */}
              {book.author && (
                <p className="text-[11px] text-[#9e1b1b] mb-2">
                  By {book.author}
                </p>
              )}

              {/* Book Description */}
              {book.description && (
                <p className="text-[11px] text-gray-700 leading-relaxed mb-3">
                  {book.description}
                </p>
              )}

              {/* Amazon Button */}
              {book.amazonLink && (
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
              )}

            </div>

          </article>
        ))}

      </div>

    </div>
  );
}
