import React from "react";

const subjects = [
  "Black Interest",
  "Black Sheep",
  "Caribbean Interest",
  "Children's",
  "Digits & E-Books",
  "Edge of Sports",
  "Enemy Books",
  "Forthcoming",
  "Gift Books",
  "Gracie Belle",
  "Infamous Books",
  "Kaylie Jones Books",
  "Latin American Interest",
  "LGBTQIA+ Interest",
  "Limited Edition/Collectibles",
  "Literary Fiction",
];

// ======================================
// FEATURED BOOKS
// ======================================

const featuredBooks = [
  {
    id: 1,
    title: "What the Water Kept",
    author: "Edward Obi",
    desc:
      "A haunting literary novel exploring motherhood, grief, family secrets, and supernatural forces.",
    img: "/literary fiction/literary fiction 1.jpg",
    amazonLink: "https://www.amazon.com/dp/9786452704",
  },
  {
    id: 2,
    title: "The Mis-Education of the Negro",
    author: "Carter Godwin Woodson",
    desc:
      "An influential examination of education, history, Black identity, and intellectual independence.",
    img: "/Black Interest/book intrest 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B09VWRWW6K",
  },
  {
    id: 3,
    title: "Black Luck",
    author: "Brad Magnarella",
    desc:
      "A supernatural urban fantasy adventure filled with magic, mystery, and unexpected danger.",
    img: "/Black Interest/book intrest 10.jpg",
    amazonLink: "https://www.amazon.com/dp/1720517681",
  },
];

export default function SubjectsSidebar({ setActivePage }) {

  // ======================================
  // SUBJECT NAVIGATION
  // ======================================

  const handleSubjectClick = (subject) => {
    if (!setActivePage) return;

    if (subject === "Black Interest") {
      setActivePage("BLACK_INTEREST");
    } else if (subject === "Black Sheep") {
      setActivePage("BLACK_SHEEP");
    } else if (subject === "Caribbean Interest") {
      setActivePage("CARIBBEAN_INTEREST");
    } else if (subject === "Children's") {
      setActivePage("CHILDRENS");
    } else if (subject === "Digits & E-Books") {
      setActivePage("DIGITS_EBOOKS");
    } else if (subject === "Edge of Sports") {
      setActivePage("EDGE_OF_SPORTS");
    } else if (subject === "Enemy Books") {
      setActivePage("ENEMY_BOOKS");
    } else if (subject === "Forthcoming") {
      setActivePage("FORTHCOMING");
    } else if (subject === "Gift Books") {
      setActivePage("GIFT_BOOKS");
    } else if (subject === "Gracie Belle") {
      setActivePage("GRACIE_BELLE");
    } else if (subject === "Infamous Books") {
      setActivePage("INFAMOUS_BOOKS");
    } else if (subject === "Kaylie Jones Books") {
      setActivePage("KAYLIE_JONES");
    } else if (subject === "Latin American Interest") {
      setActivePage("LATIN_AMERICAN");
    } else if (subject === "LGBTQIA+ Interest") {
      setActivePage("LGBTQIA");
    } else if (subject === "Limited Edition/Collectibles") {
      setActivePage("LIMITED_EDITION");
    } else if (subject === "Literary Fiction") {
      setActivePage("LITERARY_FICTION");
    } else {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const availableSubjects = [
    "Black Interest",
    "Black Sheep",
    "Caribbean Interest",
    "Children's",
    "Digits & E-Books",
    "Edge of Sports",
    "Enemy Books",
    "Forthcoming",
    "Gift Books",
    "Gracie Belle",
    "Infamous Books",
    "Kaylie Jones Books",
    "Latin American Interest",
    "LGBTQIA+ Interest",
    "Limited Edition/Collectibles",
    "Literary Fiction",
  ];

  return (
    <aside className="w-full lg:w-[225px] shrink-0 space-y-4">

      {/* ======================================
          BOX 1: FEATURED BOOKS
      ====================================== */}

      <div className="bg-white border border-gray-300 shadow-md">

        <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2 flex items-center justify-between gap-2">

          <h2 className="text-xs font-bold text-[#222]">
            Featured Books
          </h2>

          <button
            type="button"
            onClick={() => handleSubjectClick("Black Interest")}
            className="text-[10.5px] font-bold text-[#9e1b1b] hover:underline shrink-0"
          >
            More &raquo;
          </button>

        </div>

        <div className="divide-y divide-gray-200">

          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="p-2.5 text-[11px]"
            >

              <div className="flex gap-2 items-start justify-between">

                {/* BOOK INFORMATION */}
                <div className="flex-1 min-w-0">

                  {/* BOOK TITLE */}
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#9e1b1b] hover:underline leading-snug block mb-1"
                  >
                    {book.title}
                  </a>

                  {/* AUTHOR NAME */}
                  <p className="text-[10px] text-gray-500 mb-1.5">
                    By {book.author}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-gray-700 leading-snug">
                    {book.desc}
                  </p>

                </div>

                {/* BOOK COVER */}
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                  aria-label={`View ${book.title}`}
                >
                  <img
                    src={encodeURI(book.img)}
                    alt={`${book.title} book cover`}
                    className="w-16 h-20 object-contain border border-gray-200 hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ======================================
          BOX 2: SUBJECTS
      ====================================== */}

      <div className="bg-white border border-gray-300 shadow-md">

        <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

          <h2 className="text-sm font-bold text-[#222]">
            Subjects
          </h2>

        </div>

        <ul className="px-3 py-3 space-y-1.5 text-[12px]">

          {subjects.map((subject) => (
            <li key={subject}>

              {availableSubjects.includes(subject) ? (

                <button
                  type="button"
                  onClick={() => handleSubjectClick(subject)}
                  className="text-[#9e1b1b] hover:underline hover:text-black block leading-snug text-left w-full"
                >
                  {subject}
                </button>

              ) : (

                <a
                  href={`#${subject
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")}`}
                  className="text-[#9e1b1b] hover:underline hover:text-black block leading-snug"
                >
                  {subject}
                </a>

              )}

            </li>
          ))}

        </ul>

      </div>

    </aside>
  );
}