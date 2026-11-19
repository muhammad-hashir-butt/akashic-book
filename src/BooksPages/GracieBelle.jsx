import React from "react";

const gracieBelleBooks = [
  {
    id: 1,
    title: "Kids Fun Miniature Golf Coloring Book",
    author: "Gracie Belle",
    description:
      "A fun and creative coloring book inspired by the exciting world of miniature golf. Featuring golf-themed illustrations and playful scenes, this book encourages children to explore their imagination, practice coloring skills, and enjoy screen-free entertainment.",
    image: "/gracie-belle/gracie-belle 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0G4GWDL6J",
  },

  {
    id: 2,
    title: "Tiny Tails Coloring Book for Toddlers and Preschoolers",
    author: "GRACIE BELLE DOODLES ",
    description:
      "An adorable animal-themed coloring book designed for toddlers and preschoolers. With charming illustrations inspired by little animals, this book offers a fun opportunity for young children to practice coloring, develop creativity, and enjoy imaginative activities.",
    image: "/gracie-belle/gracie-belle 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HDZBYKJ4",
  },

  {
    id: 3,
    title: "Las Vegas Fun: A Colorful Adventure",
    author: "Gracie Belle ",
    description:
      "A colorful adventure inspired by the sights and excitement of Las Vegas. This creative activity book introduces entertaining illustrations that invite readers to explore the city's playful atmosphere while expressing themselves through coloring.",
    image: "/gracie-belle/gracie-belle 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0FXRCGHCV",
  },

  {
    id: 4,
    title: "Cozy Houses Coloring Book: Kawaii Edition",
    author: "Gracie Belle ",
    description:
      "A delightful coloring book featuring cozy houses and adorable kawaii-inspired designs. From charming homes to inviting little spaces, this collection offers a relaxing creative activity for readers who enjoy cute illustrations and imaginative settings.",
    image: "/gracie-belle/gracie-belle 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0FQ1S1WNL",
  },

  {
    id: 5,
    title: "Kids Little Vampires Coloring Book",
    author: "Gracie Belle ",
    description:
      "A playful coloring adventure featuring little vampires and spooky-inspired characters. Designed around a fun Halloween-style theme, this book encourages children to use their creativity while enjoying entertaining and imaginative illustrations.",
    image: "/gracie-belle/gracie-belle 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0G3F2WM7F",
  },

  {
    id: 6,
    title: "Meerkats Coloring Book: Desert Adventures",
    author: "Gracie Belle ",
    description:
      "Explore a world of adorable meerkats and desert-inspired adventures in this creative coloring book. Featuring animal-themed scenes, it offers an enjoyable activity for children and animal lovers while encouraging imagination and artistic expression.",
    image: "/gracie-belle/gracie-belle 6.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GQ9LVQRV",
  },

  {
    id: 7,
    title: "Kleine Arbeiter Malbuch",
    author: "Gracie Belle ",
    description:
      "A German-language coloring book inspired by little workers and everyday activities. Through playful illustrations, children can explore different work-related themes while developing creativity and enjoying hands-on coloring activities.",
    image: "/gracie-belle/gracie-belle 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GMQV9DGY",
  },

  {
    id: 8,
    title: "Prinzessinnen, Ritter & Burgen Malbuch",
    author: "Gracie Belle ",
    description:
      "A German-language coloring adventure featuring princesses, knights, castles, and medieval-inspired settings. This imaginative book invites children to explore a world of royal characters and historical fantasy through creative coloring.",
    image: "/gracie-belle/gracie-belle 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GJNQYWR8",
  },

  {
    id: 9,
    title: "Snowmen Coloring Book: Whimsical Coloring Fun",
    author: "Gracie Belle ",
    description:
      "Celebrate the magic of winter with a charming snowman-themed coloring book. Featuring whimsical seasonal illustrations, this creative collection provides relaxing entertainment for children and anyone who enjoys festive winter activities.",
    image: "/gracie-belle/gracie-belle 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0G4XMD85N",
  },

  {
    id: 10,
    title: "Kids Fun Afrika Malbuch",
    author: "Gracie Belle ",
    description:
      "A German-language coloring book featuring illustrations inspired by African settings and everyday scenes. Designed to encourage curiosity and artistic expression, this activity book offers children an enjoyable way to explore different themes through coloring.",
    image: "/gracie-belle/gracie-belle 10.jpg",
    amazonLink: "https://www.amazon.com/dp/B0G4WYLTCR",
  },
];

export default function GracieBelle() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">

        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Gracie Belle
        </h1>

      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {gracieBelleBooks.map((book, index) => (

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