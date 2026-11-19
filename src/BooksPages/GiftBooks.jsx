import React from "react";

const giftBooks = [
  {
    id: 1,
    title: "101 Things to Do While You're Alive: A Bucket List",
    author: "Thriving Minds",
    description:
      "An inspiring bucket-list book designed to encourage adventure, creativity, and unforgettable experiences. Packed with ideas for making meaningful memories, it offers an engaging way to explore new possibilities and celebrate life's special moments.",
    image: "/gift books/gift books 1.png",
    amazonLink: "https://www.amazon.com/dp/1764858182",
  },
  {
    id: 2,
    title: "Baptism Book for Boys: Faith-Building Activities",
    author: "Kingdom Press",
    description:
      "A faith-centered activity book designed to help young boys understand and celebrate baptism. Featuring engaging educational activities, it encourages spiritual growth, reflection, and a deeper connection with Christian values.",
    image: "/gift books/gift books 2.jpg",
    amazonLink: "https://www.amazon.com/dp/1764574346",
  },
  {
    id: 3,
    title: "The Greatest Six-Seven Activity Book",
    author: "Premium Press",
    description:
      "A fun-filled activity book inspired by the popular 6-7 trend. Featuring puzzles, mazes, word searches, crosswords, Sudoku, and other entertaining challenges, it offers screen-free entertainment for children ages 8–12.",
    image: "/gift books/gift books 3.jpg",
    amazonLink: "https://www.amazon.com/dp/1764574303",
  },
  {
    id: 4,
    title: "The Twelve Gifts of Christmas",
    author: "Kevin Finson",
    description:
      "A Christmas-themed book celebrating the joy of giving and the meaning of the holiday season. Its festive subject makes it a thoughtful choice for readers who enjoy seasonal stories and holiday traditions.",
    image: "/gift books/gift books 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DKZNYSX4",
  },
  {
    id: 5,
    title: "Now What? The Ultimate Graduation Guide",
    author: "Thomas B. Dowd III",
    description:
      "A practical guide for graduates preparing for the next chapter of life. Focusing on the transition from education to professional opportunities, it introduces themes of career planning, personal development, and building confidence for the future.",
    image: "/gift books/gift books 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B01D4V4USO",
  },
  {
    id: 6,
    title: "The Saving Tree: A Season of Devotion for Easter",
    author: "Donna Pool",
    description:
      "An Easter-themed devotional that invites readers to reflect on faith, hope, and spiritual renewal. With its focus on the Easter season, the book provides an opportunity for meaningful contemplation and connection with Christian beliefs.",
    image: "/gift books/gift books 6.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GMY4T5P7",
  },
  {
    id: 7,
    title: "The Velveteen Rabbit: A Haiku Classic",
    author: "Devin Munroe",
    description:
      "A poetic interpretation inspired by the beloved children's classic The Velveteen Rabbit. Through the concise beauty of haiku, it introduces themes of love, belonging, imagination, and the emotional bonds that make childhood stories memorable.",
    image: "/gift books/gift books 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0H22MVMDT",
  },
  {
    id: 8,
    title: "Desperately Seeking the Perfect Pointe Shoe",
    author: "Sage Michaels ",
    description:
      "A ballet-focused book exploring the search for the right pointe shoe. Its subject will interest dancers and ballet enthusiasts who appreciate the importance of comfort, fit, technique, and personal expression in dance.",
    image: "/gift books/gift books 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HBHMN3DD",
  },
];

export default function GiftBooks() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">

        <h1 className="text-[14px] font-bold text-[#222]">

          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Gift Books

        </h1>

      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {giftBooks.map((book, index) => (

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

            {/* Book Information */}
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