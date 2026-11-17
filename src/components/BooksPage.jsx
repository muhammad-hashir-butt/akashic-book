import React, { useState } from "react";

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
  "LyricPop",
  "Middle East & Asian Interest",
  "Music/Popular Culture/Art",
  "Mysteries & Crime",
  "New Releases",
  "Noir Series",
  "Nonfiction",
  "Open Lens",
  "Peekash Press",
  "Poetry",
  "Politics/Current Affairs",
  "Sale",
  "Science Fiction/Fantasy",
  "Women's Studies",
  "Young Adult/Middle Grade",
];

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

const subjectCovers = [
  { name: "Black Interest", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&q=80" },
  { name: "Black Sheep", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&q=80" },
  { name: "Caribbean Interest", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&q=80" },
  { name: "Children's", img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=200&q=80" },
  { name: "Digits & E-Books", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&q=80" },
  { name: "Edge of Sports", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&q=80" },
  { name: "Featured Digits", img: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=200&q=80" },
  { name: "Gift Books", img: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=200&q=80" },
  { name: "Gracie Belle", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&q=80" },
  { name: "Infamous Books", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&q=80" },
  { name: "Kaylie Jones Books", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&q=80" },
  { name: "Latin American Interest", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&q=80" },
  { name: "LGBTQIA+ Interest", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&q=80" },
  { name: "Limited Edition/Collectibles", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=200&q=80" },
  { name: "Literary Fiction", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&q=80" },
  { name: "LyricPop", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80" },
  { name: "Middle East & Asian Interest", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&q=80" },
  { name: "Music/Popular Culture/Art", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&q=80" },
  { name: "Mysteries & Crime", img: "https://images.unsplash.com/photo-1509266272358-7701da638078?w=200&q=80" },
  { name: "New Releases", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&q=80" },
  { name: "Noir Series", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80" },
  { name: "Nonfiction", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=200&q=80" },
  { name: "Oddities KJB", img: "https://images.unsplash.com/photo-1510172951991-856a654063f9?w=200&q=80" },
  { name: "Open Lens", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=200&q=80" },
  { name: "Peekash Press", img: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=200&q=80" },
  { name: "Poetry", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&q=80" },
  { name: "Politics/Current Affairs", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80" },
  { name: "Sale", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&q=80", isSale: true },
  { name: "Women's Studies", img: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=200&q=80" },
  { name: "Young Adult/Middle Grade", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&q=80" },
];

const alphabet = [
  "#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

const sidebarNews = [
  "SCAM ALERT!!!",
  "Exclusive Chuck D Preorder",
  "Exclusive Natasha Howard Preorder Package",
  "Exclusive David Duchovny Preorder Package",
  "Exclusive Gina Gershon Preorder Package",
  "Exclusive Robyn Hitchcock Preorder Package",
];

const events = [
  {
    id: 1,
    title: "Kira Tucker — University of Pittsburgh (Pittsburgh, PA)",
    date: "11/19/26",
    desc: "Kira Tucker presents Wildest.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    id: 2,
    title: "Tiphanie Yanique — Miami Book Fair (Miami, FL)",
    date: "11/21/26, 12:30pm",
    desc: "Noir, Myth, and the Island Fantastic panel featuring Tiphanie Yanique.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

// Reusable A-Z Alphabet Bar
function BrowseByTitleBar({ selectedLetter, onSelectLetter }) {
  return (
    <div className="text-center py-2">
      <p className="text-[11px] font-bold text-gray-700 mb-1">Browse by Title</p>
      <div className="flex flex-wrap items-center justify-center gap-1 text-[10.5px]">
        {alphabet.map((letter, idx) => (
          <React.Fragment key={letter}>
            <button
              onClick={() => onSelectLetter(letter)}
              className={`cursor-pointer hover:underline ${
                selectedLetter === letter
                  ? "font-extrabold text-black underline"
                  : "text-[#9e1b1b]"
              }`}
            >
              {letter}
            </button>
            {idx < alphabet.length - 1 && (
              <span className="text-gray-400">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function BooksPage() {
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">
      
      {/* LEFT SIDEBAR: Catalog, Subjects & Popular Catalog Tags */}
      <aside className="w-full lg:w-[225px] shrink-0 space-y-4">
        
        {/* Box 1: Catalog */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">Catalog</h2>
          </div>
          <ul className="px-3 py-2.5 space-y-1 text-[11px]">
            <li className="text-gray-700 font-semibold">Full Catalog</li>
            <li>
              <a href="#authors-list" className="text-[#9e1b1b] hover:underline">
                List of Authors
              </a>
            </li>
            <li>
              <a href="#download-pdf" className="text-[#9e1b1b] hover:underline">
                Download Catalog (PDF)
              </a>
            </li>
          </ul>
        </div>

        {/* Box 2: Subjects */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">Subjects</h2>
          </div>
          <ul className="px-3 py-2.5 space-y-1 text-[11px]">
            {allSubjects.map((subject) => (
              <li key={subject}>
                <button
                  onClick={() => setSelectedFilter(subject)}
                  className="text-[#9e1b1b] hover:underline hover:text-black text-left cursor-pointer"
                >
                  {subject}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 3: Popular Catalog Tags */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">Popular Catalog Tags</h2>
          </div>
          <div className="p-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-1 leading-tight">
            {popularTags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setSelectedFilter(tag.name)}
                className={`text-[#9e1b1b] hover:underline cursor-pointer ${tag.size}`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

      </aside>

      {/* CENTER WHITE CONTENT: Browse by Title + Browse by Subject */}
      <section className="flex-1 bg-white p-5 shadow-lg border border-gray-300 w-full">
        
        {/* Top A-Z Browse Bar */}
        <BrowseByTitleBar
          selectedLetter={selectedFilter}
          onSelectLetter={(letter) => setSelectedFilter(letter)}
        />

        {/* Active Filter Notification */}
        {selectedFilter && (
          <div className="my-3 px-3 py-1.5 bg-[#f7f6f2] border border-gray-300 text-xs flex items-center justify-between">
            <span>
              Filtering catalog by:{" "}
              <strong className="text-[#9e1b1b]">{selectedFilter}</strong>
            </span>
            <button
              onClick={() => setSelectedFilter("")}
              className="text-[#9e1b1b] font-bold hover:underline cursor-pointer"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Section Heading */}
        <h2 className="text-sm text-gray-800 mt-4 mb-5">Browse by Subject</h2>

        {/* Subject Covers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {subjectCovers.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelectedFilter(item.name)}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="relative w-24 h-32 bg-gray-100 border border-gray-300 shadow-sm overflow-hidden mb-1.5 group-hover:shadow-md transition-shadow">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {item.isSale && (
                  <span className="absolute top-0 left-0 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 uppercase">
                    Sale
                  </span>
                )}
              </div>
              <span className="text-[10.5px] text-[#9e1b1b] group-hover:underline leading-tight">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Dotted Divider */}
        <hr className="border-t border-dotted border-gray-300 my-7" />

        {/* Bottom A-Z Browse Bar */}
        <BrowseByTitleBar
          selectedLetter={selectedFilter}
          onSelectLetter={(letter) => setSelectedFilter(letter)}
        />

      </section>

      {/* RIGHT SIDEBAR: News & Features + Upcoming Events */}
      <aside className="w-full lg:w-[235px] shrink-0 space-y-4">
        
        {/* Box 1: News & Features */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">News & Features</h2>
          </div>
          <div className="p-3 text-[11px]">
            <ul className="space-y-1.5 list-disc pl-4 text-[#9e1b1b] mb-3">
              {sidebarNews.map((item) => (
                <li key={item}>
                  <a href="#news" className="hover:underline">
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

        {/* Box 2: Upcoming Events */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">Upcoming Events</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {events.map((event) => (
              <div key={event.id} className="p-3 flex gap-2.5 items-start">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-14 h-20 object-cover border border-gray-200 shrink-0"
                />
                <div className="text-[11px]">
                  <a
                    href="#event"
                    className="font-bold text-[#9e1b1b] hover:underline leading-snug block mb-1"
                  >
                    {event.title}
                  </a>
                  <p className="text-gray-700 font-medium mb-1">{event.date}</p>
                  <p className="text-gray-600 leading-snug">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-gray-200">
            <a
              href="#more-events"
              className="text-[10.5px] font-bold text-[#9e1b1b] hover:underline"
            >
              More Events &raquo;
            </a>
          </div>
        </div>

      </aside>

    </div>
  );
}