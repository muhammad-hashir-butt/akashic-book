import React from "react";

const forthcomingBooks = [
  {
    id: 1,
    title: "Forthcoming: Serial Muse Chronicles Revisited",
    author: "Julie Voice ",
    description:
      "A literary exploration of creativity, storytelling, and artistic inspiration. This book invites readers to reflect on the ideas and experiences that shape creative expression.",
    image: "/forthcoming/forthcoming 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DL6F9CL4",
  },
  {
    id: 2,
    title:
      "His Name Was Shortly Forthcoming: How Capital Letters Came to Be",
    author: "Judy Grin",
    description:
      "A charming educational children's story that introduces the importance of capital letters. Through an imaginative tale, young readers discover how uppercase letters work and when to use them.",
    image: "/forthcoming/forthcoming 2.jpg",
    amazonLink: "https://www.amazon.com/dp/1546872906",
  },
  {
    id: 3,
    title: "Charting the Stars: Forthcoming Everyday Plans",
    author: "Alex Dugar",
    description:
      "An exploration of planning, personal goals, and looking toward the future. The book encourages readers to consider their aspirations and the steps involved in pursuing them.",
    image: "/forthcoming/forthcoming 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0CQ83D2NM",
  },
  {
    id: 4,
    title: "Forthcoming Emperors",
    author: " DeSean K Martin",
    description:
      "A thought-provoking work centered on ambition, perseverance, and the pursuit of success. It explores themes of personal growth, determination, and overcoming challenges.",
    image: "/forthcoming/forthcoming 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B084DG25PS",
  },
  {
    id: 5,
    title:
      "Reclaiming Your Identity: A Mom's Guide to Empowerment, Boundaries, and Peace Amid Estrangement",
    author: "Kendall L. Williams",
    description:
      "A supportive guide for mothers navigating family estrangement. It focuses on rebuilding self-worth, establishing healthy boundaries, finding emotional balance, and moving toward personal peace.",
    image: "/forthcoming/forthcoming 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0F2519TGV",
  },
  {
    id: 6,
    title: "Madness and Me: My Search for Sanity",
    author: "Lisa Suzanne Nugent",
    description:
      "A deeply personal memoir about mental health and the search for stability. Through her experiences, the author explores the challenges of emotional well-being, self-discovery, and resilience.",
    image: "/forthcoming/forthcoming 6.jpg",
    amazonLink: "https://www.amazon.com/dp/1797580566",
  },
  {
    id: 7,
    title:
      "Forget Them Kids: Challenging the One-Sided Narrative of the Estrangement Epidemic and the Biased Therapy Trends That Fuel It",
    author: "Vivian King",
    description:
      "An examination of family estrangement and the conversations surrounding it. The book questions prevailing narratives and explores the experiences of parents affected by fractured family relationships.",
    image: "/forthcoming/forthcoming 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0F5NTMN6H",
  },
  {
    id: 8,
    title: "Becoming a Son",
    author: "David Labrava",
    description:
      "A powerful autobiographical journey through life's darker moments, personal struggles, and redemption. David Labrava shares experiences that shaped his identity and his path toward transformation.",
    image: "/forthcoming/forthcoming 8.jpg",
    amazonLink: "https://www.amazon.com/dp/1522730796",
  },
];

export default function Forthcoming() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Forthcoming
        </h1>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {forthcomingBooks.map((book, index) => (
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
              >
                <img
                  src={encodeURI(book.image)}
                  alt={`${book.title} book cover`}
                  className="
                    w-full h-auto
                    object-contain
                    border border-gray-200
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