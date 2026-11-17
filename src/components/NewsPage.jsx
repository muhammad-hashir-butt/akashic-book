import React, { useState } from "react";

const archiveMonths = [
  "Select Month",
  "November 2026",
  "October 2026",
  "September 2026",
  "August 2026",
  "July 2026",
  "June 2026",
  "May 2026",
];

const newsCategories = [
  { name: "Akashic In Good Company", indent: false },
  { name: "Simon's Cat In Good Company", indent: true },
  { name: "Akashic Insider", indent: false },
  { name: "Are We Related?", indent: false },
  { name: "Literary Lions", indent: false },
  { name: "Music/Pop Culture/Art", indent: false },
  { name: "News", indent: false },
  { name: "Original Fiction", indent: false },
  { name: "Duppy Thursday", indent: true },
  { name: "Fri-SciFi", indent: true },
  { name: "Mondays Are Murder", indent: true },
  { name: "Sports & Justice", indent: true },
  { name: "Terrible Twosdays", indent: true },
  { name: "Thursdaze", indent: true },
  { name: "Wilderness Wednesdays", indent: true },
  { name: "Question of the Week", indent: false },
  { name: "Short Story Month", indent: false },
  { name: "Weekly Roundup", indent: false },
];

const popularPostTags = [
  { name: "flash fiction", size: "text-xs font-bold" },
  { name: "Mondays Are Murder", size: "text-xs font-bold" },
  { name: "short fiction", size: "text-xs font-bold" },
  { name: "Noir Series", size: "text-xs font-bold" },
  { name: "Terrible Twosdays", size: "text-xs font-bold" },
  { name: "Akashic Insider", size: "text-[11px] font-semibold" },
  { name: "fiction", size: "text-[11px]" },
  { name: "short story", size: "text-[11px]" },
  { name: "Go the Fuck to Sleep", size: "text-[11px] font-semibold" },
  { name: "GTFTS", size: "text-[11px]" },
  { name: "Thursdaze", size: "text-[11px] font-semibold" },
  { name: "New York", size: "text-[11px]" },
  { name: "Noir", size: "text-[11px]" },
  { name: "Caribbean", size: "text-[11px]" },
  { name: "Akashic In Good Company", size: "text-[10.5px]" },
  { name: "Drug Chronicles Series", size: "text-[10px]" },
  { name: "Duppy Thursday", size: "text-[10px]" },
  { name: "Murder", size: "text-[10px]" },
  { name: "Caribbean Literature", size: "text-[10px]" },
  { name: "Sale", size: "text-[10px]" },
  { name: "Johnny Temple", size: "text-[10px]" },
  { name: "Akashic Books", size: "text-[10px]" },
  { name: "California", size: "text-[10px]" },
  { name: "Kaylie Jones Books", size: "text-[10px]" },
  { name: "Brooklyn", size: "text-[10px]" },
];

const newsPosts = [
  {
    id: 1,
    title: "SCAM ALERT!!!",
    excerpt:
      "This year we've gotten hundreds (thousands?) of reports that scammers are impersonating (or inventing) Akashic Books staff . . .",
    category: "Akashic Insider",
    isScamAlert: true,
  },
  {
    id: 2,
    title: "Exclusive Chuck D Preorder",
    excerpt:
      "Now available for preorder: the latest 'naphic grovel' by rap legend Chuck D",
    category: "Music/Pop Culture/Art",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80",
  },
  {
    id: 3,
    title: "Exclusive Natasha Howard Preorder Package",
    excerpt:
      "Our exclusive preorder package for Natasha Howard's new WNBA memoir is now available for preorder",
    category: "Sports & Justice",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    id: 4,
    title: "Exclusive David Duchovny Preorder Package",
    excerpt:
      "The new paperback edition of David Duchovny's debut poetry collection, About Time, is now available for preorder.",
    category: "News",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    id: 5,
    title: "Exclusive Gina Gershon Preorder Package",
    excerpt:
      "Gina Gershon's preorder package for her new memoir AlphaPussy is now available!",
    category: "Akashic Insider",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    id: 6,
    title: "Exclusive Robyn Hitchcock Preorder Package",
    excerpt:
      "The preorder package for Robyn Hitchcock's memoir Stranded in the Future is now available for preorder!",
    category: "Music/Pop Culture/Art",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 7,
    title: "Now Available: Hey Yang, Where's My Thousand Bucks?",
    excerpt:
      "Andrew Yang's new essay collection Hey Yang, Where's My Thousand Bucks? is now available for preorder!",
    category: "News",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: 8,
    title: "Akashic Remembers Elizabeth Nunez",
    excerpt:
      "The World of Letters lost a true lion when Elizabeth Nunez passed away on November 11, 2024 at the age of eighty . . .",
    category: "Literary Lions",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
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

export default function NewsPage({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("Select Month");
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">
      
      {/* LEFT SIDEBAR: Archives, News & Features Categories, Popular Post Tags */}
      <aside className="w-full lg:w-[225px] shrink-0 space-y-4">
        
        {/* Box 1: Archives */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">Archives</h2>
          </div>
          <div className="p-3">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full border border-gray-400 rounded-sm px-2 py-1 text-[11px] bg-white text-gray-800 focus:outline-none"
            >
              {archiveMonths.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Box 2: News & Features Categories */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">News &amp; Features</h2>
          </div>
          <ul className="px-3 py-2.5 space-y-1 text-[11px]">
            {newsCategories.map((cat) => (
              <li key={cat.name} className={cat.indent ? "pl-3" : ""}>
                <button
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`hover:underline text-left cursor-pointer ${
                    selectedCategory === cat.name
                      ? "font-bold text-black underline"
                      : "text-[#9e1b1b]"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 3: Popular Post Tags */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">Popular Post Tags</h2>
          </div>
          <div className="p-3 flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 leading-tight text-center">
            {popularPostTags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setSelectedCategory(tag.name)}
                className={`text-[#9e1b1b] hover:underline cursor-pointer ${tag.size}`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

      </aside>

      {/* CENTER WHITE CONTENT: News & Features Articles List + Pagination */}
      <section className="flex-1 bg-white p-5 shadow-lg border border-gray-300 w-full">
        
        {/* Page Heading */}
        <div className="flex items-center justify-between pb-3 border-b border-dotted border-gray-300">
          <h2 className="text-sm text-gray-800">News &amp; Features</h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory("")}
              className="text-[11px] text-[#9e1b1b] font-bold hover:underline cursor-pointer"
            >
              Showing: {selectedCategory} (Clear)
            </button>
          )}
        </div>

        {/* Articles Feed */}
        <div className="divide-y divide-dotted divide-gray-300">
          {newsPosts.map((post) => (
            <article key={post.id} className="py-4 flex gap-4 items-start">
              {post.isScamAlert ? (
                <div className="w-16 h-20 bg-black text-white flex flex-col items-center justify-center p-1 text-center shrink-0 border border-gray-300">
                  <span className="text-[10px] font-black leading-tight">
                    SCAM ALERT!
                  </span>
                  <span className="text-[7px] text-gray-300 mt-1 leading-tight">
                    Beware phish emails
                  </span>
                </div>
              ) : (
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-16 h-20 object-cover border border-gray-300 shrink-0"
                />
              )}

              <div className="text-xs">
                <a
                  href={`#post-${post.id}`}
                  className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                >
                  {post.title}
                </a>
                <p className="text-[11px] text-gray-700 leading-snug">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Pagination Bar */}
        <div className="mt-6 pt-4 border-t border-dotted border-gray-300 flex flex-wrap items-center justify-center gap-1 text-[10px]">
          <span className="border border-gray-300 px-1.5 py-0.5 text-gray-600 bg-gray-50">
            Page {currentPage} of 174
          </span>

          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`border px-1.5 py-0.5 cursor-pointer ${
                currentPage === num
                  ? "border-black font-bold text-black bg-gray-100"
                  : "border-gray-300 text-[#9e1b1b] hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}

          <span className="px-1 text-gray-500">...</span>

          {[10, 20, 30].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`border px-1.5 py-0.5 cursor-pointer ${
                currentPage === num
                  ? "border-black font-bold text-black bg-gray-100"
                  : "border-gray-300 text-[#9e1b1b] hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}

          <span className="px-1 text-gray-500">...</span>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="border border-gray-300 px-1.5 py-0.5 text-[#9e1b1b] hover:bg-gray-100 cursor-pointer"
          >
            &raquo;
          </button>
          <button
            onClick={() => setCurrentPage(174)}
            className="border border-gray-300 px-1.5 py-0.5 text-[#9e1b1b] hover:bg-gray-100 cursor-pointer"
          >
            Last &raquo;
          </button>
        </div>

      </section>

      {/* RIGHT SIDEBAR: News & Features + Upcoming Events */}
      <aside className="w-full lg:w-[235px] shrink-0 space-y-4">
        
        {/* Box 1: News & Features */}
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">News &amp; Features</h2>
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
            <button
              onClick={() => setSelectedCategory("")}
              className="text-[10.5px] font-bold text-[#9e1b1b] hover:underline cursor-pointer"
            >
              More News &amp; Features &raquo;
            </button>
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
            <button
              onClick={() => setActivePage("EVENTS")}
              className="text-[10.5px] font-bold text-[#9e1b1b] hover:underline cursor-pointer"
            >
              More Events &raquo;
            </button>
          </div>
        </div>

      </aside>

    </div>
  );
}