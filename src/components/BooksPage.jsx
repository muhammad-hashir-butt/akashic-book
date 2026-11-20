import React, { useState, useEffect, useRef } from "react";

// Existing Subject Pages
import BlackInterest from "../BooksPages/BlackInterest";
import BlackSheep from "../BooksPages/BlackSheep";
import CaribbeanInterest from "../BooksPages/CaribbeanInterest";
import Childrens from "../BooksPages/Childrens";
import DigitsEBooks from "../BooksPages/DigitsEBooks";
import EdgeOfSports from "../BooksPages/EdgeOfSports";
import EnemyBooks from "../BooksPages/EnemyBooks";
import Forthcoming from "../BooksPages/Forthcoming";
import GiftBooks from "../BooksPages/GiftBooks";
import GracieBelle from "../BooksPages/GracieBelle";
import InfamousBooks from "../BooksPages/InfamousBooks";
import KaylieJones from "../BooksPages/KaylieJones";
import LatinAmerican from "../BooksPages/LatinAmericanInterest";
import LGBTQIA from "../BooksPages/LGBTQIA";
import LimitedEdition from "../BooksPages/LimitedEdition";
import LiteraryFiction from "../BooksPages/LiteraryFiction";

// ======================================
// SUBJECTS
// ======================================

const allSubjects = [
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
// EXISTING BOOK PAGE COMPONENTS
// ======================================

const subjectBookPages = {
  "Black Interest": BlackInterest,
  "Black Sheep": BlackSheep,
  "Caribbean Interest": CaribbeanInterest,
  "Children's": Childrens,
  "Digits & E-Books": DigitsEBooks,
  "Edge of Sports": EdgeOfSports,
  "Enemy Books": EnemyBooks,
  Forthcoming: Forthcoming,
  "Gift Books": GiftBooks,
  "Gracie Belle": GracieBelle,
  "Infamous Books": InfamousBooks,
  "Kaylie Jones Books": KaylieJones,
  "Latin American Interest": LatinAmerican,
  "LGBTQIA+ Interest": LGBTQIA,
  "Limited Edition/Collectibles": LimitedEdition,
  "Literary Fiction": LiteraryFiction,
};

// ======================================
// POPULAR TAGS
// ======================================

const popularTags = [
  { name: "Noir Series", size: "text-base font-bold" },
  { name: "Akashic Noir Series", size: "text-xs" },
  { name: "New York City", size: "text-xs" },
  { name: "noir", size: "text-[11px]" },
  { name: "Jamaica", size: "text-[11px]" },
  { name: "mystery", size: "text-[11px]" },
  { name: "debut", size: "text-[11px]" },
  { name: "children's picture book", size: "text-[10px]" },
  { name: "fiction", size: "text-[10px]" },
  { name: "crime", size: "text-[10px]" },
  { name: "Kaylie Jones Books", size: "text-[10px]" },
  { name: "Black Sheep", size: "text-[10px]" },
  { name: "Chris Abani", size: "text-[10px]" },
  { name: "memoir", size: "text-[10px]" },
  { name: "Caribbean", size: "text-[10px]" },
  { name: "Kaylie Jones", size: "text-[10px]" },
  { name: "literary fiction", size: "text-[10px]" },
  { name: "music", size: "text-[10px]" },
  { name: "Kwame Dawes", size: "text-[10px]" },
  { name: "historical fiction", size: "text-[10px]" },
  { name: "punk rock", size: "text-[10px]" },
  { name: "LyricPop", size: "text-[10px]" },
  { name: "young adult", size: "text-[10px]" },
];

// ======================================
// ALPHABET
// ======================================

const alphabet = [
  "#",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// ======================================
// NEWS
// ======================================

const sidebarNews = [
  "SCAM ALERT!!!",
  "Exclusive Chuck D Preorder",
  "Exclusive Natasha Howard Preorder Package",
  "Exclusive David Duchovny Preorder Package",
  "Exclusive Gina Gershon Preorder Package",
  "Exclusive Robyn Hitchcock Preorder Package",
];

// ======================================
// EVENTS
// ======================================



// ======================================
// CHECK BOOK TITLE AGAINST LETTER
// ======================================

function matchesLetter(title, letter) {
  const cleanTitle = title.trim().replace(/^[^a-zA-Z0-9]+/, "");

  if (letter === "#") {
    return /^[0-9]/.test(cleanTitle);
  }

  return cleanTitle.toUpperCase().startsWith(letter);
}

// ======================================
// A-Z ALPHABET BAR
// ======================================

function BrowseByTitleBar({ selectedLetter, onSelectLetter }) {
  return (
    <div className="text-center py-2">

      <p className="text-[11px] font-bold text-gray-700 mb-1">
        Browse by Title
      </p>

      <div className="flex flex-wrap items-center justify-center gap-1 text-[10.5px]">

        {alphabet.map((letter, index) => (
          <React.Fragment key={letter}>

            <button
              type="button"
              onClick={() => onSelectLetter(letter)}
              className={`
                cursor-pointer
                hover:underline
                ${
                  selectedLetter === letter
                    ? "font-extrabold text-black underline"
                    : "text-[#9e1b1b]"
                }
              `}
            >
              {letter}
            </button>

            {index < alphabet.length - 1 && (
              <span className="text-gray-400">|</span>
            )}

          </React.Fragment>
        ))}

      </div>

    </div>
  );
}

// ======================================
// BOOK COLLECTION
// REUSES EXISTING SUBJECT BOOK PAGES
// ======================================

function BookCollection({
  subjectName,
  BookComponent,
  selectedLetter,
  onSubjectClick,
}) {
  const collectionRef = useRef(null);

  const [matchingCount, setMatchingCount] = useState(null);

  useEffect(() => {
    const container = collectionRef.current;

    if (!container) return;

    const bookCards = container.querySelectorAll("article");

    let count = 0;

    bookCards.forEach((card) => {
      // Existing subject pages show book titles in h2 elements.
      const titleElement = card.querySelector("h2");

      const bookTitle = titleElement?.textContent?.trim() || "";

      const isMatch =
        !selectedLetter || matchesLetter(bookTitle, selectedLetter);

      card.style.display = isMatch ? "" : "none";

      if (isMatch) {
        count += 1;
      }
    });

    setMatchingCount(count);
  }, [selectedLetter, BookComponent]);

  if (selectedLetter && matchingCount === 0) {
    return (
      <div ref={collectionRef} className="hidden" aria-hidden="true">
        <BookComponent />
      </div>
    );
  }

  return (
    <div className="mb-7">

      {/* Subject Heading */}
      <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-gray-200">

        <h2 className="text-[13px] font-bold text-[#333]">
          {subjectName}
        </h2>

        <button
          type="button"
          onClick={() => onSubjectClick(subjectName)}
          className="text-[11px] font-semibold text-[#9e1b1b] hover:underline shrink-0"
        >
          View All &raquo;
        </button>

      </div>

      {/* Original Book Cards */}
      <div ref={collectionRef}>
        <BookComponent />
      </div>

    </div>
  );
}

// ======================================
// MAIN BOOKS PAGE
// ======================================

export default function BooksPage() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const [selectedLetter, setSelectedLetter] = useState("");

  const handleSubjectClick = (subject) => {
    setSelectedFilter(subject);

    setSelectedLetter("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    setSelectedFilter("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClearFilter = () => {
    setSelectedFilter("");

    setSelectedLetter("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const SelectedSubjectPage = subjectBookPages[selectedFilter];

  const isFiltering = Boolean(selectedFilter || selectedLetter);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">

      {/* ======================================
          LEFT SIDEBAR
      ====================================== */}

      <aside className="w-full lg:w-[225px] shrink-0 space-y-4">

        {/* Catalog */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">
              Catalog
            </h2>
          </div>

          <ul className="px-3 py-2.5 space-y-1 text-[11px]">

            <li className="text-gray-700 font-semibold">
              Full Catalog
            </li>

            <li>
              <a
                href="#authors-list"
                className="text-[#9e1b1b] hover:underline"
              >
                List of Authors
              </a>
            </li>

            

          </ul>

        </div>

        {/* Subjects */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">
              Subjects
            </h2>
          </div>

          <ul className="px-3 py-2.5 space-y-1 text-[11px]">

            {allSubjects.map((subject) => (
              <li key={subject}>

                <button
                  type="button"
                  onClick={() => handleSubjectClick(subject)}
                  className={`
                    text-left
                    cursor-pointer
                    hover:underline
                    hover:text-black
                    ${
                      selectedFilter === subject
                        ? "font-bold text-black"
                        : "text-[#9e1b1b]"
                    }
                  `}
                >
                  {subject}
                </button>

              </li>
            ))}

          </ul>

        </div>

        {/* Popular Catalog Tags */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">
              Popular Catalog Tags
            </h2>
          </div>

          <div className="p-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-1 leading-tight">

            {popularTags.map((tag) => (
              <button
                key={tag.name}
                type="button"
                onClick={() => handleSubjectClick(tag.name)}
                className={`
                  text-[#9e1b1b]
                  hover:underline
                  cursor-pointer
                  ${tag.size}
                `}
              >
                {tag.name}
              </button>
            ))}

          </div>

        </div>

      </aside>

      {/* ======================================
          CENTER BOOK CONTENT
      ====================================== */}

      <section className="flex-1 min-w-0 bg-white p-5 shadow-lg border border-gray-300 w-full">

        {/* TOP A-Z ALPHABET BAR */}
        <BrowseByTitleBar
          selectedLetter={selectedLetter}
          onSelectLetter={handleLetterClick}
        />

        {/* ACTIVE FILTER */}
        {isFiltering && (
          <div className="my-3 px-3 py-2 bg-[#f7f6f2] border border-gray-300 text-xs flex items-center justify-between gap-3">

            <span>
              Filtering catalog by:{" "}

              <strong className="text-[#9e1b1b]">

                {selectedLetter
                  ? selectedLetter === "#"
                    ? "Titles starting with numbers"
                    : `Titles starting with ${selectedLetter}`
                  : selectedFilter}

              </strong>
            </span>

            <button
              type="button"
              onClick={handleClearFilter}
              className="text-[#9e1b1b] font-bold hover:underline cursor-pointer shrink-0"
            >
              Clear Filter
            </button>

          </div>
        )}

        {/* ======================================
            SUBJECT FILTER RESULTS
        ====================================== */}

        {selectedFilter ? (

          SelectedSubjectPage ? (

            <div className="mt-4">

              <SelectedSubjectPage />

            </div>

          ) : (

            <div className="py-10 text-center">

              <h2 className="text-sm font-semibold text-gray-700">
                {selectedFilter}
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                No books have been added to this category yet.
              </p>

            </div>

          )

        ) : (

          /* ======================================
              ALL BOOKS / ALPHABET FILTER
          ====================================== */

          <div className="mt-4">

            <h2 className="text-sm text-gray-800 mb-5">

              {selectedLetter
                ? selectedLetter === "#"
                  ? "Books Starting With Numbers"
                  : `Books Starting With "${selectedLetter}"`
                : "Browse All Books"}

            </h2>

            {/* ALL 16 BOOK COLLECTIONS */}
            {Object.entries(subjectBookPages).map(
              ([subjectName, SubjectComponent]) => (

                <BookCollection
                  key={`${subjectName}-${selectedLetter}`}
                  subjectName={subjectName}
                  BookComponent={SubjectComponent}
                  selectedLetter={selectedLetter}
                  onSubjectClick={handleSubjectClick}
                />

              )
            )}

          </div>

        )}

        {/* BOTTOM DIVIDER */}
        <hr className="border-t border-dotted border-gray-300 my-7" />

        {/* BOTTOM A-Z ALPHABET BAR */}
        <BrowseByTitleBar
          selectedLetter={selectedLetter}
          onSelectLetter={handleLetterClick}
        />

      </section>

      {/* ======================================
          RIGHT SIDEBAR
      ====================================== */}

      <aside className="w-full lg:w-[235px] shrink-0 space-y-4">

        {/* NEWS & FEATURES */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

            <h2 className="text-xs font-bold text-[#222]">
              News & Features
            </h2>

          </div>

          <div className="p-3 text-[11px]">

            <ul className="space-y-1.5 list-disc pl-4 text-[#9e1b1b] mb-3">

              {sidebarNews.map((item) => (
                <li key={item}>

                  <a
                    href="#news"
                    className="hover:underline"
                  >
                    {item}
                  </a>

                </li>
              ))}

            </ul>

            <a
              href="#more-news"
              className="text-[10.5px] font-bold text-[#9e1b1b] hover:underline"
            >
              More News & Features &raquo;
            </a>

          </div>

        </div>

      

        

      </aside>

    </div>
  );
}