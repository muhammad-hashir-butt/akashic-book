import React from "react";

const literaryFictionBooks = [
  {
    id: 1,
    title:
      "What the Water Kept: A Dark African Literary Novel of Grief, Motherhood, and Supernatural Dread",
    author: "Edward Obi",
    description:
      "A haunting African literary novel exploring grief, motherhood, family inheritance, and supernatural forces. When Wira discovers that an ancient deity has claimed the women of her family for generations, she must fight to protect her children and confront a terrifying legacy connected to the water. Moving through Port Harcourt, Lagos, and Accra, the story explores a mother's determination to resist a fate that has haunted her family for years.",
    image: "/literary fiction/literary fiction 1.jpg",
    amazonLink: "https://www.amazon.com/dp/9786452704",
  },

  {
    id: 2,
    title:
      "The Mummy's Vengeance: Case Files From the Nightfall Detective Agency",
    author: "David Alyn Gordon",
    description:
      "A supernatural mystery combining ancient Egyptian secrets, detective fiction, and classic monster horror. The first installment in the Case Files From the Nightfall Detective Agency series follows an unusual investigation connected to an ancient Egyptian mystery. With suspense, supernatural danger, and unexpected discoveries, this adventure brings a traditional mummy tale into the world of paranormal detection.",
    image: "/literary fiction/literary fiction 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B0CKPYW9Z7",
  },

  {
    id: 3,
    title: "The Four Jacks: Annotated, Uncensored",
    author: "Robert Pavchick",
    description:
      "A provocative coming-of-age novel combining satire, outrageous comedy, and reflections on faith, identity, and society. Inspired in part by college experiences, the story follows a young man's journey from inherited beliefs toward a more questioning understanding of the world. Filled with unconventional humor, memorable encounters, and extensive annotations, this literary work challenges expectations while exploring personal transformation.",
    image: "/literary fiction/literary fiction 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GV1NBF5W",
  },

  {
    id: 4,
    title:
      "Beneath the Angels of Mons: Tales of the Supernatural and Psychological",
    author: "Gregg F. Bartley",
    description:
      "A historical supernatural novel inspired by the mysterious legends surrounding the Battle of Mons during World War I. As exhausted British soldiers face overwhelming enemy forces, strange figures appear through the battlefield mist and unexplained events challenge their understanding of reality. Blending military history, psychological suspense, and supernatural horror, the story explores the uncertain boundary between divine intervention and something far more terrifying.",
    image: "/literary fiction/literary fiction 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DJY557WN",
  },

  {
    id: 5,
    title: "Hold My Bones",
    author: "Michael Stuart",
    description:
      "A deeply emotional contemporary novel about love, relationships, parenthood, and the challenges of growing together. Following two people from the beginning of their relationship through the demanding realities of family life, the story examines personal weaknesses, difficult choices, and the lasting commitment required to maintain a meaningful connection. A thoughtful exploration of the imperfections and resilience of human relationships.",
    image: "/literary fiction/literary fiction 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GD848ZR5",
  },

  {
    id: 6,
    title: "A Sky Littered with Stories: A Collection of Short Fiction",
    author: "RD Pires",
    description:
      "An imaginative collection of short fiction exploring the extraordinary moments hidden within everyday life. From unusual competitions and unexpected encounters to fantastical situations and deeply human experiences, these stories introduce a diverse cast of characters. Combining humor, emotion, and creative storytelling, the collection celebrates the complexity of human relationships and the countless stories that shape individual lives.",
    image: "/literary fiction/literary fiction 6.jpg",
    amazonLink: "https://www.amazon.com/dp/1729293425",
  },

  {
    id: 7,
    title: "The Library Story: A Novella",
    author: "Dana Andrews",
    description:
      "A work of short fiction associated with the Night Shift title in its Amazon listing. Written in novella form, it offers readers a compact literary experience. Further plot and author details can be confirmed through the linked Amazon product page.",
    image: "/literary fiction/literary fiction 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DHWCC3SD",
  },

  {
    id: 8,
    title: "Adulting at the Moto-Lodge: A Humorous Family Life Romp",
    author: "Joshua Berkov",
    description:
      "A humorous contemporary novel about relationships, personal mistakes, and unexpected second chances. After his marriage collapses following a disastrous betrayal, Rob Cunningham finds himself searching for somewhere to live. His circumstances lead him to an unusual motel run by an eccentric widow named Doris. Surrounded by colorful personalities and unpredictable situations, Rob begins navigating the complicated business of rebuilding his life.",
    image: "/literary fiction/literary fiction 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B09M5552L7",
  },

  {
    id: 9,
    title: "Book of Wishes: Stories of Light, Time and Wonder",
    author: "Yanira A Rivera ",
    description:
      "A collection of imaginative stories centered on wonder, possibility, and the power of storytelling. Its themes of light, time, and wishes invite readers into a world of reflection and imagination. The collection offers a literary experience for those who enjoy creative short fiction and stories that explore life's mysteries.",
    image: "/literary fiction/literary fiction 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0FVVZLXJK",
  },

  {
    id: 10,
    title: "The Wallace House of Pain: A Novelette",
    author: "S.M. Stevens",
    description:
      "A thought-provoking contemporary novelette exploring difficult family relationships, generational differences, and modern social issues. Activist Xander Wallace struggles to connect with his father Jim, whose views on race, immigration, gender, and sexuality clash with his own. As tensions rise following his father's remarriage, Xander must decide whether he can reveal a deeply personal secret while preserving their complicated relationship.",
    image: "/literary fiction/literary fiction 10.jpg",
    amazonLink: "https://www.amazon.com/dp/B0BBJHK6TH",
  },
];

export default function LiteraryFiction() {
  return (
    <div className="w-full min-h-[600px] bg-white border border-gray-300 shadow-lg">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200 bg-white">

        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Literary Fiction
        </h1>

      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {literaryFictionBooks.map((book, index) => (

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

              {/* Author Name */}
              {book.author && (

                <p className="mb-2 text-[11px] text-gray-600">
                  By{" "}
                  <span className="font-semibold text-[#333]">
                    {book.author}
                  </span>
                </p>

              )}

              {/* Book Description */}
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
          Showing {literaryFictionBooks.length} books in Literary Fiction.
        </p>

      </div>

    </div>
  );
}