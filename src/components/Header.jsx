import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/Thundersmouth Press Logo.png";

// ======================================
// NAVIGATION ITEMS
// ======================================

const navItems = [
  "HOME",
  "BOOKS",
  "AUTHORS",
  "NEWS & FEATURES",
  "BLOGS",
  "ABOUT US",
];

// ======================================
// SEARCHABLE WEBSITE PAGES
// ======================================

const searchablePages = [
  {
    name: "Home",
    page: "HOME",
    type: "Main Page",
    keywords: ["home", "homepage", "main page"],
  },
  {
    name: "Books",
    page: "BOOKS",
    type: "Main Page",
    keywords: ["books", "book collection", "catalog", "all books"],
  },
  {
    name: "Authors",
    page: "AUTHORS",
    type: "Main Page",
    keywords: ["authors", "writers", "author directory"],
  },
  {
    name: "News & Features",
    page: "NEWS & FEATURES",
    type: "Main Page",
    keywords: ["news", "features", "articles", "updates"],
  },
  {
    name: "Blogs",
    page: "BLOGS",
    type: "Main Page",
    keywords: ["blogs", "blog", "blog articles", "writing tips"],
  },
  {
    name: "About Us",
    page: "ABOUT US",
    type: "Main Page",
    keywords: ["about", "about us", "company", "thundersmouth press"],
  },

  // ======================================
  // SUBJECT PAGES
  // ======================================

  {
    name: "Black Interest",
    page: "BLACK_INTEREST",
    type: "Book Subject",
    keywords: ["black interest", "black books", "black history"],
  },
  {
    name: "Black Sheep",
    page: "BLACK_SHEEP",
    type: "Book Subject",
    keywords: ["black sheep", "sheep books"],
  },
  {
    name: "Caribbean Interest",
    page: "CARIBBEAN_INTEREST",
    type: "Book Subject",
    keywords: ["caribbean", "caribbean interest", "island books"],
  },
  {
    name: "Children's",
    page: "CHILDRENS",
    type: "Book Subject",
    keywords: ["children", "childrens", "children's", "kids", "kids books"],
  },
  {
    name: "Digits & E-Books",
    page: "DIGITS_EBOOKS",
    type: "Book Subject",
    keywords: ["digits", "ebooks", "e-books", "digital books"],
  },
  {
    name: "Edge of Sports",
    page: "EDGE_OF_SPORTS",
    type: "Book Subject",
    keywords: ["sports", "edge of sports", "sport books"],
  },
  {
    name: "Enemy Books",
    page: "ENEMY_BOOKS",
    type: "Book Subject",
    keywords: ["enemy", "enemy books"],
  },
  {
    name: "Forthcoming",
    page: "FORTHCOMING",
    type: "Book Subject",
    keywords: ["forthcoming", "upcoming books"],
  },
  {
    name: "Gift Books",
    page: "GIFT_BOOKS",
    type: "Book Subject",
    keywords: ["gift", "gift books", "gifts"],
  },
  {
    name: "Gracie Belle",
    page: "GRACIE_BELLE",
    type: "Book Subject",
    keywords: ["gracie", "gracie belle", "gracie belle books"],
  },
  {
    name: "Infamous Books",
    page: "INFAMOUS_BOOKS",
    type: "Book Subject",
    keywords: ["infamous", "infamous books"],
  },
  {
    name: "Kaylie Jones Books",
    page: "KAYLIE_JONES",
    type: "Book Subject",
    keywords: ["kaylie", "kaylie jones", "kaylie jones books"],
  },
  {
    name: "Latin American Interest",
    page: "LATIN_AMERICAN",
    type: "Book Subject",
    keywords: [
      "latin",
      "latin american",
      "latin american interest",
      "south america",
    ],
  },
  {
    name: "LGBTQIA+ Interest",
    page: "LGBTQIA",
    type: "Book Subject",
    keywords: [
      "lgbtqia",
      "lgbtq",
      "lgbt",
      "lgbtqia+",
      "queer",
      "lgbtqia interest",
    ],
  },
  {
    name: "Limited Edition/Collectibles",
    page: "LIMITED_EDITION",
    type: "Book Subject",
    keywords: [
      "limited",
      "limited edition",
      "collectibles",
      "limited edition collectibles",
    ],
  },
  {
    name: "Literary Fiction",
    page: "LITERARY_FICTION",
    type: "Book Subject",
    keywords: [
      "literary",
      "fiction",
      "literary fiction",
      "novels",
    ],
  },
];

// ======================================
// NORMALIZE SEARCH TEXT
// ======================================

const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
};

// ======================================
// HEADER COMPONENT
// ======================================

export default function Header({ activePage, setActivePage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const searchRef = useRef(null);

  // ======================================
  // FILTER SEARCH RESULTS
  // ======================================

  const normalizedSearch = normalizeText(searchTerm);

  const searchResults = normalizedSearch
    ? searchablePages.filter((item) => {
        const nameMatches = normalizeText(item.name).includes(
          normalizedSearch
        );

        const keywordMatches = item.keywords.some((keyword) =>
          normalizeText(keyword).includes(normalizedSearch)
        );

        return nameMatches || keywordMatches;
      })
    : [];

  // ======================================
  // NAVIGATE TO SELECTED PAGE
  // ======================================

  const navigateToPage = (page) => {
    setActivePage(page);

    setSearchTerm("");
    setShowDropdown(false);
    setSelectedIndex(-1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ======================================
  // HANDLE SEARCH SUBMIT
  // ======================================

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchResults.length === 0) {
      setShowDropdown(true);
      return;
    }

    const selectedResult =
      selectedIndex >= 0 && selectedIndex < searchResults.length
        ? searchResults[selectedIndex]
        : searchResults[0];

    navigateToPage(selectedResult.page);
  };

  // ======================================
  // KEYBOARD SEARCH NAVIGATION
  // ======================================

  const handleKeyDown = (e) => {
    if (!showDropdown || searchResults.length === 0) {
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setSelectedIndex((previous) =>
        previous < searchResults.length - 1
          ? previous + 1
          : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setSelectedIndex((previous) =>
        previous > 0
          ? previous - 1
          : searchResults.length - 1
      );
    }

    if (e.key === "Escape") {
      setShowDropdown(false);
      setSelectedIndex(-1);
    }
  };

  // ======================================
  // CLOSE DROPDOWN ON OUTSIDE CLICK
  // ======================================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  // ======================================
  // MAIN HEADER JSX
  // ======================================

  return (
    <header className="max-w-[1140px] mx-auto pl-3 pr-7 pt-4 pb-0">

      {/* ======================================
          TOP BAR: LOGO & SEARCH
      ====================================== */}

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4">

        {/* LEFT: LOGO */}
        <div className="flex justify-center lg:justify-start">

          <button
            type="button"
            onClick={() => navigateToPage("HOME")}
            className="text-center cursor-pointer"
          >

            <img
              src={logo}
              alt="Thundersmouth Press Logo"
              className="h-20 sm:h-24 w-auto object-contain"
            />

          </button>

        </div>

        {/* ======================================
            RIGHT: FUNCTIONAL SEARCH BAR
        ====================================== */}

        <div
          ref={searchRef}
          className="relative flex items-center w-full sm:w-auto lg:w-[260px] justify-center lg:justify-end z-50"
        >

          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center w-full max-w-[260px] bg-white border border-gray-400 rounded-md shadow-sm"
          >

            {/* SEARCH INPUT */}
            <input
              type="text"
              placeholder="Search term..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowDropdown(true);
                setSelectedIndex(-1);
              }}
              onFocus={() => {
                if (searchTerm.trim()) {
                  setShowDropdown(true);
                }
              }}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={
                showDropdown && normalizedSearch.length > 0
              }
              aria-controls="website-search-results"
              aria-activedescendant={
                selectedIndex >= 0
                  ? `search-option-${selectedIndex}`
                  : undefined
              }
              className="w-full min-w-0 bg-transparent px-3 py-1.5 text-xs text-gray-700 focus:outline-none"
            />

            {/* SEARCH BUTTON */}
            <button
              type="submit"
              className="bg-[#333333] text-white text-[11px] font-bold px-3.5 py-2 cursor-pointer shrink-0 tracking-wide rounded-r-md"
            >
              SEARCH
            </button>

          </form>

          {/* ======================================
              SEARCH DROPDOWN
          ====================================== */}

          {showDropdown && normalizedSearch.length > 0 && (

            <div
              id="website-search-results"
              role="listbox"
              aria-label="Search suggestions"
              className="
                absolute
                top-full
                right-0
                mt-1
                w-full
                max-w-[320px]
                bg-white
                border
                border-gray-300
                shadow-xl
                rounded-sm
                overflow-hidden
                z-[100]
              "
            >

              {/* RESULTS FOUND */}
              {searchResults.length > 0 ? (

                <div className="max-h-[300px] overflow-y-auto">

                  {/* DROPDOWN HEADING */}
                  <div className="px-3 py-2 bg-[#e8e6df] border-b border-gray-200">

                    <p className="text-[11px] font-bold text-[#333]">
                      Search Results
                    </p>

                  </div>

                  {/* SEARCH RESULTS LIST */}
                  {searchResults.map((result, index) => (

                    <button
                      key={result.page}
                      id={`search-option-${index}`}
                      role="option"
                      aria-selected={selectedIndex === index}
                      type="button"
                      onClick={() =>
                        navigateToPage(result.page)
                      }
                      onMouseEnter={() =>
                        setSelectedIndex(index)
                      }
                      className={`
                        w-full
                        px-3
                        py-2.5
                        text-left
                        border-b
                        border-gray-100
                        transition-colors
                        duration-150
                        ${
                          selectedIndex === index
                            ? "bg-[#f5eeee]"
                            : "bg-white hover:bg-[#faf9f6]"
                        }
                      `}
                    >

                      <div className="flex items-center gap-2">

                        {/* ICON */}
                        <span className="text-[#9e1b1b] text-[13px] shrink-0">
                          {result.type === "Book Subject"
                            ? "📚"
                            : "📄"}
                        </span>

                        {/* PAGE INFORMATION */}
                        <div className="flex-1 min-w-0">

                          <p className="text-[12px] font-semibold text-[#9e1b1b] leading-snug">
                            {result.name}
                          </p>

                          <p className="text-[10px] text-gray-500 mt-0.5">
                            {result.type}
                          </p>

                        </div>

                        {/* ARROW */}
                        <span className="text-gray-400 text-[12px]">
                          →
                        </span>

                      </div>

                    </button>

                  ))}

                  {/* RESULTS COUNT */}
                  <div className="px-3 py-2 bg-[#fafafa] border-t border-gray-200">

                    <p className="text-[10px] text-gray-500">
                      {searchResults.length} matching{" "}
                      {searchResults.length === 1
                        ? "page"
                        : "pages"}{" "}
                      found
                    </p>

                  </div>

                </div>

              ) : (

                /* NO RESULTS */
                <div className="px-4 py-5 text-center">

                  <p className="text-[12px] font-bold text-gray-700 mb-1">
                    No Matching Pages Found
                  </p>

                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Try searching for Books, Authors,
                    Blogs, or a book subject.
                  </p>

                </div>

              )}

            </div>

          )}

        </div>

      </div>

      {/* ======================================
          BOTTOM ROW: NAVIGATION BAR
      ====================================== */}

      <nav className="w-full bg-[#333333] border-b-2 border-[#9e1b1b] rounded-t-sm shadow-md flex flex-wrap items-center justify-center">

        {navItems.map((item) => {
          const isActive = activePage === item;

          return (

            <button
              key={item}
              type="button"
              onClick={() => navigateToPage(item)}
              className={`
                flex-1
                min-w-fit
                px-4
                py-2.5
                text-xs
                font-bold
                tracking-wider
                text-center
                cursor-pointer
                ${
                  isActive
                    ? "bg-[#9e1b1b] text-white"
                    : "text-gray-200"
                }
              `}
            >
              {item}
            </button>

          );
        })}

      </nav>

    </header>
  );
}