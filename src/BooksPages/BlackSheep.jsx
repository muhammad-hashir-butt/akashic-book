
import React from "react";

// ======================================
// BLACK SHEEP BOOK COLLECTION
// ======================================

const blackSheepBooks = [
  {
    id: 1,
    title: "The Black Sheep",
    author: "Rebecca Suzanne",
    description:
      "A work exploring the experience of being different, belonging, and finding one's place.",
    image: "/Black Sheep/black sheep 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0BQ6JQ21C",
  },
  {
    id: 2,
    title: "Black Sheep Conspiracies: Poems of Enlightenment",
    author: "Shawn Stoner",
    description:
      "A collection of poetry exploring unconventional perspectives, personal reflection, and enlightenment.",
    image: "/Black Sheep/black sheep 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B09RC28LBP",
  },
  {
    id: 3,
    title: "The Black Sheep: Breaking the Cycle",
    author: "Adrienne Dominique",
    description:
      "A work centered on breaking harmful patterns, overcoming personal challenges, and creating a different path forward.",
    image: "/Black Sheep/black sheep 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HN2612ND",
  },
  {
    id: 4,
    title: "The Black Sheep",
    author: "Dedric Green",
    description:
      "A story exploring themes of isolation, adversity, identity, and the experience of standing apart from others.",
    image: "/Black Sheep/black sheep 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HPTZ8Y4B",
  },
  {
    id: 5,
    title: "Black Sheep",
    author: "Gabreella Jones",
    description:
      "A poetry collection reflecting on individuality, emotional experiences, and personal expression.",
    image: "/Black Sheep/black sheep 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DS61KRTY",
  },
  {
    id: 6,
    title: "Black Sheep",
    author: "Shirley Berard",
    description:
      "A novel exploring individuality, personal relationships, and the challenges of finding acceptance.",
    image: "/Black Sheep/black sheep 6.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DZFJ249L",
  },
  {
    id: 7,
    title: "The Black Sheep Who Told the Truth",
    author: "Anomaly",
    description:
      "A memoir about breaking cycles of abuse, silence, and shame while discovering the courage to speak the truth.",
    image: "/Black Sheep/black sheep 7.jpg",
    amazonLink: "https://www.amazon.in/Black-Sheep-Who-Told-Truth-ebook/dp/B0H46WQLV2",
  },
  {
    id: 8,
    title: "Black Sheep: The Journey!!!",
    author: "Milton Russell",
    description:
      "A personal journey examining identity, resilience, transformation, and the experience of being different.",
    image: "/Black Sheep/black sheep 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0H24CP7SW",
  },
  {
    id: 9,
    title: "Black Sheep at Altitude: Pappy Boyington and the Discipline of Marine Air",
    author: "Bill Johns",
    description:
      "An aviation history work examining Pappy Boyington and the discipline, courage, and challenges of Marine aviation.",
    image: "/Black Sheep/black sheep 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GQRCLSS8",
  },
  {
    id: 10,
    title: "Black Sheep: Unique Tales of Terror and Wonder",
    author: "",
    description:
      "A magazine featuring imaginative stories of terror, science fiction, fantasy, and the extraordinary.",
    image: "/Black Sheep/black sheep 10.jpg",
    amazonLink: "https://www.amazon.com/dp/B0D5F84NWM",
  },
];

// ======================================
// BLACK SHEEP PAGE COMPONENT
// ======================================

export default function BlackSheep() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Black Sheep
        </h1>
      </div>

      {/* Books Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {blackSheepBooks.map((book, index) => (
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
