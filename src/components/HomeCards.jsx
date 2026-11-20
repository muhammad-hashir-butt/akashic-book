import React from "react";

// ======================================
// THUNDERSMOUTH PRESS
// FEATURED BOOKS
// ======================================

const featuredBooks = [
  {
    id: 1,
    title: "What the Water Kept",
    author: "Edward Obi",
    description:
      "A haunting literary novel exploring motherhood, grief, family secrets, and supernatural forces.",
    image: "/literary fiction/literary fiction 1.jpg",
    amazonLink: "https://www.amazon.com/dp/9786452704",
  },
  {
    id: 2,
    title: "The Mis-Education of the Negro",
    author: "Carter Godwin Woodson",
    description:
      "An influential examination of education, history, Black identity, and intellectual independence.",
    image: "/Black Interest/book intrest 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B09VWRWW6K",
  },
  {
    id: 3,
    title: "Infamous Lady",
    author: "Kimberly L. Craft",
    description:
      "A historical account exploring the life, accusations, and enduring legends of Countess Erzsébet Báthory.",
    image: "/infamous book/infamous book 1.jpg",
    amazonLink: "https://www.amazon.com/dp/1502581469",
  },
  {
    id: 4,
    title: "Black Luck",
    author: "Brad Magnarella",
    description:
      "A supernatural urban fantasy adventure filled with magic, mystery, and unexpected danger.",
    image: "/Black Interest/book intrest 10.jpg",
    amazonLink: "https://www.amazon.com/dp/1720517681",
  },
];

// ======================================
// BOOK DISCOVERY LINKS
// ======================================

const insiderBullets = [
  {
    title: "Discover Literary Fiction",
    description: "Explore imaginative stories and compelling narratives.",
    amazonLink: "https://www.amazon.com/dp/9786452704",
  },
  {
    title: "Explore Historical Nonfiction",
    description: "Discover books inspired by history and real events.",
    amazonLink: "https://www.amazon.com/dp/1502581469",
  },
  {
    title: "Find Your Next Fantasy Adventure",
    description: "Step into worlds of magic, mystery, and adventure.",
    amazonLink: "https://www.amazon.com/dp/1720517681",
  },
  {
    title: "Discover Books for Young Readers",
    description: "Find creative stories and engaging children's books.",
    amazonLink: "https://www.amazon.com/dp/B0HRHMKZ9Y",
  },
];

// ======================================
// NEWS & FEATURES
// ======================================

const newsBullets = [
  {
    title: "Explore Our Growing Collection of Books",
    amazonLink: "https://www.amazon.com/dp/B0D3974HBW",
  },
  {
    title: "Discover Voices in Contemporary Fiction",
    amazonLink: "https://www.amazon.com/dp/B0GD848ZR5",
  },
  {
    title: "Find Inspiring Books for Children",
    amazonLink: "https://www.amazon.com/dp/B0HNSMX5S9",
  },
  {
    title: "Explore Mystery and Suspense",
    amazonLink: "https://www.amazon.com/dp/B0CKPYW9Z7",
  },
];

// ======================================
// MAIN HOMECARDS COMPONENT
// ======================================

export default function HomeCards() {
  return (
    <div className="space-y-4">

      {/* ======================================
          TWO-COLUMN ROW
          THUNDERSMOUTH INSIDER + NEWS
      ====================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* ======================================
            LEFT BOX: THUNDERSMOUTH INSIDER
        ====================================== */}

        <div className="border border-gray-300 bg-white flex flex-col justify-between">

          <div>

            {/* Header */}
            <div className="bg-[#e8e6df] border-b border-gray-300 px-3.5 py-2 flex items-center justify-between gap-2">

              <h3 className="text-sm font-bold text-[#222]">
                Thundersmouth Insider
              </h3>

              <a
                href={featuredBooks[0].amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#9e1b1b] hover:underline"
              >
                Explore Books &raquo;
              </a>

            </div>

            <div className="p-3.5 text-xs space-y-3">

              {/* FEATURED BOOK 1 */}
              <div className="flex gap-3 items-start">

                <div className="flex-1">

                  <a
                    href={featuredBooks[0].amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                  >
                    Featured Book: {featuredBooks[0].title}
                  </a>

                  <p className="text-[10.5px] text-gray-500 mb-1">
                    By {featuredBooks[0].author}
                  </p>

                  <p className="text-gray-700 leading-snug">
                    {featuredBooks[0].description}
                  </p>

                </div>

                <a
                  href={featuredBooks[0].amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >

                  <img
                    src={encodeURI(featuredBooks[0].image)}
                    alt={`${featuredBooks[0].title} book cover`}
                    className="w-24 h-24 object-contain border border-gray-200 bg-white"
                    loading="lazy"
                  />

                </a>

              </div>

              {/* BRAND SPOTLIGHT */}
              <div>

                <div className="w-40 h-36 bg-black text-white mx-auto mb-3 flex flex-col items-center justify-center p-3 text-center">

                  <span className="text-base font-black tracking-wide mb-1.5">
                    DISCOVER MORE
                  </span>

                  <p className="text-[10.5px] text-gray-200 leading-snug">
                    Explore stories that entertain, inspire,
                    and stay with you.
                  </p>

                  <span className="text-[9px] text-yellow-300 mt-2 font-semibold">
                    THUNDERSMOUTH PRESS
                  </span>

                </div>

                {/* FEATURED BOOK 2 */}
                <a
                  href={featuredBooks[2].amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                >
                  Discover: {featuredBooks[2].title}
                </a>

                <p className="text-gray-700 leading-snug">
                  {featuredBooks[2].description}
                </p>

              </div>

              {/* BOOK DISCOVERY LINKS */}
              <ul className="space-y-1 list-disc pl-4 text-[#9e1b1b]">

                {insiderBullets.map((item) => (
                  <li key={item.title}>

                    <a
                      href={item.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      title={item.description}
                    >
                      {item.title}
                    </a>

                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

        {/* ======================================
            RIGHT BOX: NEWS & FEATURES
        ====================================== */}

        <div className="border border-gray-300 bg-white flex flex-col justify-between">

          <div>

            {/* Header */}
            <div className="bg-[#e8e6df] border-b border-gray-300 px-3.5 py-2 flex items-center justify-between gap-2">

              <h3 className="text-sm font-bold text-[#222]">
                News & Features
              </h3>

              <a
                href={featuredBooks[3].amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#9e1b1b] hover:underline"
              >
                More Books &raquo;
              </a>

            </div>

            <div className="p-3.5 text-xs space-y-3">

              {/* DISCOVERY LINKS */}
              <ul className="space-y-1 list-disc pl-4 text-[#9e1b1b]">

                {newsBullets.map((item) => (
                  <li key={item.title}>

                    <a
                      href={item.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>

                  </li>
                ))}

              </ul>

              {/* FEATURED AUTHOR & BOOK */}
              <div className="pt-2 border-t border-gray-200">

                <a
                  href={featuredBooks[3].amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                >
                  Author Spotlight: {featuredBooks[3].author}
                </a>

                <p className="text-gray-700 mb-3 leading-snug">
                  Discover {featuredBooks[3].title}, a supernatural
                  fantasy adventure featuring mystery, magic,
                  and unforgettable challenges. Explore the book
                  and discover the world created by{" "}
                  {featuredBooks[3].author}.
                </p>

                <a
                  href={featuredBooks[3].amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-fit mx-auto"
                >

                  <img
                    src={encodeURI(featuredBooks[3].image)}
                    alt={`${featuredBooks[3].title} book cover`}
                    className="w-40 h-40 object-contain mx-auto border border-gray-200 bg-white hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />

                </a>

                <div className="text-center mt-3">

                  <a
                    href={featuredBooks[3].amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#9e1b1b] text-white text-[10px] font-bold px-3 py-1.5 rounded-sm hover:bg-[#7f1515] transition-colors"
                  >
                    View Book on Amazon
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}