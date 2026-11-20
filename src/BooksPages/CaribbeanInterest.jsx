
import React from "react";

// ======================================
// CARIBBEAN INTEREST BOOK COLLECTION
// ======================================

const caribbeanInterestBooks = [
  {
    id: 1,
    title: "Southern Caribbean Cruising Guide 2026",
    author: "Angela Renner",
    description:
      "A travel guide for exploring Southern Caribbean cruise destinations, tropical islands, ports, and memorable vacation experiences.",
    image: "/caribbean interest/caribbean interest 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GVZ1FXHD",
  },
  {
    id: 2,
    title: "Royal Caribbean Cruise Guide 2026/2027",
    author: "Sally Mina",
    description:
      "A practical guide to planning a Royal Caribbean cruise, including ships, destinations, travel tips, and vacation preparation.",
    image: "/caribbean interest/caribbean interest 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GYT533R3",
  },
  {
    id: 3,
    title: "115 Greatest Caribbean Recipes of All Time",
    author: "Grace Barrington-Shaw",
    description:
      "A Caribbean cookbook featuring a collection of traditional island dishes, vibrant flavors, and delicious recipes inspired by Caribbean cuisine.",
    image: "/caribbean interest/caribbean interest 3.jpg",
    amazonLink: "https://www.amazon.com/dp/1979572143",
  },
  {
    id: 4,
    title: "Caribbean Essentials: Clean Island Kitchen",
    author: "Madeline Layne",
    description:
      "A Caribbean-inspired cookbook exploring island cooking, fresh ingredients, and flavorful meals prepared with a modern approach.",
    image: "/caribbean interest/caribbean interest 4.jpg",
    amazonLink: "https://www.amazon.com/Caribbean-Essentials-Clean-Island-Kitchen/dp/B0HPT6RNP5/ref=sr_1_6?crid=3BG5YQZ3KW94A&dib=eyJ2IjoiMSJ9.BjNoMkNgVnPkCjlsXrrhwgOoQveg_pK33wHGsFbA2hEvdnzQGBSp-VLBttn9_nzs2D7lrWJEXgCuiV_mzNJkJyipyz1ED6saAoy_gYFUKxau2uUEEKEUCaWoxQkALFrAPmIsprUVnyJBH-60Bh4ibd5sXVZUvTy8Wze-YcdEHNfGhRHpPy_pGu956nXo2K7ymzysdJIz61TuOfB72Q8HDvYYcgKhx0T8vvqxYF3uO70.7eUxmKVzOoQpPtbd28mZKtdP5-u3_UX1NaMI9et9tms&dib_tag=se&keywords=caribbean+independent&qid=1794847772&s=books&sprefix=caribbean+independent%2Cstripbooks-intl-ship%2C322&sr=1-6",
  },
  {
    id: 5,
    title: "Castara Roots with Wings: Caribbean Sea Animals Coloring Book",
    author: "Julie Edwards",
    description:
      "A colorful underwater adventure featuring Caribbean sea creatures, tropical marine life, and creative coloring activities.",
    image: "/caribbean interest/caribbean interest 5.jpg",
    amazonLink: "https://www.amazon.com/Caribbean-Sea-Animals-Julie-Edwards/dp/B0HQVH7HCZ/ref=sr_1_9?crid=3BG5YQZ3KW94A&dib=eyJ2IjoiMSJ9.BjNoMkNgVnPkCjlsXrrhwgOoQveg_pK33wHGsFbA2hEvdnzQGBSp-VLBttn9_nzs2D7lrWJEXgCuiV_mzNJkJyipyz1ED6saAoy_gYFUKxau2uUEEKEUCaWoxQkALFrAPmIsprUVnyJBH-60Bh4ibd5sXVZUvTy8Wze-YcdEHNfGhRHpPy_pGu956nXo2K7ymzysdJIz61TuOfB72Q8HDvYYcgKhx0T8vvqxYF3uO70.7eUxmKVzOoQpPtbd28mZKtdP5-u3_UX1NaMI9et9tms&dib_tag=se&keywords=caribbean+independent&qid=1794847772&s=books&sprefix=caribbean+independent%2Cstripbooks-intl-ship%2C322&sr=1-9",
  },
  {
    id: 6,
    title: "Time to Cruise the Southern Caribbean",
    author: "W Smith",
    description:
      "A cruise planning guide covering Southern Caribbean destinations, beautiful ports, island experiences, and helpful travel information.",
    image: "/caribbean interest/caribbean interest 6.jpg",
    amazonLink: "https://www.amazon.com/dp/B0GNK1NY5Y",
  },
  {
    id: 7,
    title: "The Caribbean Drinks & Desserts Cookbook",
    author: "Prince Alex",
    description:
      "A collection of 50 Caribbean-inspired drinks and dessert recipes featuring tropical flavors, refreshing beverages, and sweet treats.",
    image: "/caribbean interest/caribbean interest 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HFKG3QML",
  },
  {
    id: 8,
    title: "Caribbean Cruise Pocket Guide 2026",
    author: "Mary McLaurin",
    description:
      "A compact travel companion offering Caribbean cruise information, destination highlights, packing guidance, and useful vacation tips.",
    image: "/caribbean interest/caribbean interest 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HBXG8VFZ",
  },
  {
    id: 9,
    title: "History of the Caribbean",
    author: "Sidney K. Torbett",
    description:
      "An exploration of Caribbean history, indigenous populations, pre-colonial societies, and the region's historical development.",
    image: "/caribbean interest/caribbean interest 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0G3K9PDL5",
  },
 
];

// ======================================
// CARIBBEAN INTEREST PAGE
// ======================================

export default function CaribbeanInterest() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Caribbean Interest
        </h1>
      </div>

      {/* Books Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {caribbeanInterestBooks.map((book, index) => (
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

              {/* Book Description */}
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
