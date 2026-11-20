import React from "react";

const limitedEditionBooks = [
  {
    id: 1,
    title: "Limited Chronicle",
    author: "Jörg van Hooven",
    description:
      "A distinctive chronicle offering readers an engaging literary experience. This book explores its subject through a carefully presented narrative, making it an interesting addition to a collection of independent publications.",
    image: "/limited edition/limited edition 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HRFQBN1Q",
  },

  {
    id: 2,
    title: "A Prose and Cons Cozy Mystery",
    author: "Paige Cassel",
    description:
      "A cozy mystery set around a bookstore and literary festival. When a murder disrupts the celebrations, bookstore owner Helga Henderson becomes caught up in a puzzling investigation filled with suspicious characters, unexpected discoveries, and secrets waiting to be uncovered.",
    image: "/limited edition/limited edition 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B0FHQFD9F6",
  },

  {
    id: 3,
    title: "Level Complete: Limited Edition Geburtstag Notizbuch",
    author: "Gaming Geburtstag Geschenke by FS",
    description:
      "A German-language birthday-themed notebook with a gaming-inspired design. Suitable for writing notes, recording ideas, making lists, and everyday journaling. Its playful presentation makes it a thoughtful gift for someone who enjoys games and stationery.",
    image: "/limited edition/limited edition 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0BCSH4MHF",
  },

  {
    id: 4,
    title:
      "Beyond Limits: Infinitesimals, Abstract Algebra, Category Theory, Synthetic Differential Geometry, and Automatic Differentiation",
    author: "Stephen Fratini",
    description:
      "An exploration of advanced mathematical ideas, including infinitesimals, abstract algebra, category theory, synthetic differential geometry, and automatic differentiation. Written for readers interested in mathematical structures and the concepts underlying modern mathematical analysis.",
    image: "/limited edition/limited edition 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0G7FXMQ6V",
  },

  {
    id: 5,
    title: "S.T.P. Beyond the Blueprint Workbook",
    author: "Kezia Conyers",
    description:
      "A workbook designed to support structured learning and practical exercises. Its workbook format provides space for readers to engage with ideas, develop their understanding, and work through activities at their own pace.",
    image: "/limited edition/limited edition 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HPY76SJH",
  },

  

  {
    id: 7,
    title:
      "AB Study Guide: Able Body Seaman — AB Unlimited, AB Limited, AB Special, and Lifeboatman",
    author: "Timothy Spears",
    description:
      "A practical examination preparation guide for maritime professionals pursuing Able Body Seaman and Lifeboatman qualifications. It includes sample examination material covering AB Unlimited, AB Limited, AB Special, and Lifeboatman categories, helping readers prepare for United States Coast Guard merchant marine examinations.",
    image: "/limited edition/limited edition 7.jpg",
    amazonLink: "https://www.amazon.com/dp/1973516047",
  },

  {
    id: 8,
    title: "Limit",
    author: "Sybil Bartel",
    description:
      "A romantic suspense novel from the Alpha Antihero series. With intense relationships, strong personalities, emotional conflict, and high-stakes situations, this story offers a dramatic reading experience for fans of contemporary romance and alpha-hero fiction.",
    image: "/limited edition/limited edition 8.jpg",
    amazonLink: "https://www.amazon.com/dp/1713318636",
  },
];

export default function LimitedEdition() {
  return (
    <div className="w-full min-h-[600px] bg-white border border-gray-300 shadow-lg">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200 bg-white">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Limited Edition/Collectibles
        </h1>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {limitedEditionBooks.map((book, index) => (

          <article
            key={book.id}
            className={`
              flex items-start gap-3
              p-4
              min-h-[240px]
              border-b border-gray-200
              hover:bg-[#faf9f6]
              transition-colors duration-200
              ${index % 2 === 0 ? "md:border-r md:border-gray-200" : ""}
            `}
          >

            {/* Book Cover */}
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
                    border border-gray-200
                    shadow-sm
                    hover:opacity-90
                    transition-opacity
                  "
                  loading="lazy"
                />
              </a>

            </div>

            {/* Book Information */}
            <div className="flex-1 min-w-0">

              {/* Book Title */}
              <h2 className="mb-1 text-[13px] font-bold leading-snug">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9e1b1b] hover:underline"
                >
                  {book.title}
                </a>
              </h2>

              {/* Author */}
              {book.author && (
                <p className="mb-2 text-[11px] text-gray-600">
                  By{" "}
                  <span className="font-semibold text-[#333]">
                    {book.author}
                  </span>
                </p>
              )}

              {/* Description */}
              <p className="mb-3 text-[11px] text-gray-700 leading-relaxed">
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

      {/* Bottom Footer */}
      <div className="px-5 py-3 border-t border-gray-200 bg-[#fafafa]">
        <p className="text-[11px] text-gray-500">
          Showing {limitedEditionBooks.length} books in
          Limited Edition/Collectibles.
        </p>
      </div>

    </div>
  );
}