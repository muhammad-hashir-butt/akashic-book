import React, { useState } from "react";

const eventAuthors = [
  "Robert Antoni",
  "John Bacigalupi",
  "Lucy Jane Bledsoe",
  "Princess Booker",
  "Roddy Bottum",
  "Meryl Branch-McTiernan",
  "Larry Crane",
  "Ani DiFranco",
  "Joe Eichner",
  "Sam Eichner",
  "Cian S. Friedman",
  "Richard Georges",
  "Gina Gershon",
  "Robyn Hitchcock",
  "Adam Mansbach",
  "Carol Mitchell",
  "Thurston Moore",
  "Cheryl Lu-Lien Tan",
  "Kira Tucker",
  "Andrew Yang",
  "Tiphanie Yanique",
];

const eventLocations = [
  "Cleveland Heights, OH",
  "Columbus, OH",
  "Miami, FL",
  "Pittsburgh, PA",
];

const upcomingEvents = [
  {
    id: 1,
    title: "Kira Tucker — University of Pittsburgh (Pittsburgh, PA)",
    author: "Kira Tucker",
    location: "Pittsburgh, PA",
    desc: "Kira Tucker presents Wildest.",
    date: "Nov 19, 2026",
    venue: "University of Pittsburgh",
    map: "4200 Fifth Avenue, Pittsburgh, PA, 15260",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    id: 2,
    title: "Tiphanie Yanique — Miami Book Fair (Miami, FL)",
    author: "Tiphanie Yanique",
    location: "Miami, FL",
    desc: "Noir, Myth, and the Island Fantastic panel featuring Tiphanie Yanique, editor of Virgin Islands Noir, Marlon James, and Amalie Howard; moderated by Ryan Bachoo.",
    date: "Nov 21, 2026, 12:30pm - 1:30pm",
    venue: "Miami Dade College, Wolfson Campus, Building 8, Room 8302",
    map: "Miami Dade College, Wolfson Campus, Building 8, Room 8302, Miami, Florida, United States",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    id: 3,
    title: "Carol Mitchell — Miami Book Fair (Miami, FL)",
    author: "Carol Mitchell",
    location: "Miami, FL",
    desc: "The Dead Stay Close: Grief, Ghosts, and Caribbean Memory panel featuring Carol Mitchell, author of A Good Haunting: Stories, Edwidge Danticat, Kwame Dawes, and Donna Aza Weir-Soley; moderated by Kelly Baker Josephs.",
    date: "Nov 21, 2026, 11:00am - 12:00pm",
    venue: "Miami Dade College, Wolfson Campus, Building 8, Room 8302",
    map: "Miami Dade College, Wolfson Campus, Building 8, Room 8302, Miami, Florida, United States",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&q=80",
  },
  {
    id: 4,
    title: "Gina Gershon — Miami Book Fair (Miami, FL)",
    author: "Gina Gershon",
    location: "Miami, FL",
    desc: "Surviving & Thriving With Grit, Glamour & Guts - Nonfiction: In AlphaPussy: How I Survived the Valley and Learned to Love Mr. Boots, actor and author Gina Gershon offers cautionary and often hilarious tales of surviving the San Fernando Valley and Hollywood.",
    date: "Nov 21, 2026, 2:00pm - 4:00pm",
    venue: "Miami Dade College, Wolfson Campus, Building 8, 2nd Floor, Room 8209",
    map: "Miami Dade College, Wolfson Campus, Building 8, 2nd Floor, Room 8209, Miami, Florida, United States",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    id: 5,
    title: "Roddy Bottum — Mac's Backs-Books on Coventry (Cleveland Heights, OH)",
    author: "Roddy Bottum",
    location: "Cleveland Heights, OH",
    desc: "Roddy Bottum presents The Royal We.",
    date: "Nov 21, 2026, 3:00pm - 5:00pm",
    venue: "Mac's Backs-Books on Coventry",
    map: "1820 Coventry Road, Cleveland Heights, Ohio, 44118",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 6,
    title: "Ani DiFranco — Miami Book Fair (Miami, FL)",
    author: "Ani DiFranco",
    location: "Miami, FL",
    desc: "Reflections with Ani DiFranco: Ani DiFranco presents The Spirit of Ani, in conversation with Evelyn McDonnell.",
    date: "Nov 22, 2026, 12:15pm - 1:15pm",
    venue: "Miami Dade College, Wolfson Campus, Building 2, 1st Floor, Room 2106",
    map: "Miami Dade College, Wolfson Campus, Building 2, 1st Floor, Room 2106, Miami, Florida, United States",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 7,
    title: "Adam Mansbach — Miami Book Fair (Miami, FL)",
    author: "Adam Mansbach",
    location: "Miami, FL",
    desc: "Funny Ha Ha: The Serious Art of Making Us Laugh panel featuring Adam Mansbach, author of Go the Fuck to Sleep, Annabelle Gurwitch, Murray Hill; moderated by William Johnson.",
    date: "Nov 22, 2026, 5:15pm - 6:15pm",
    venue: "Miami Dade College, Wolfson Campus — Chapman, Bldg. 3, 2nd Fl.",
    map: "Miami Dade College, Wolfson Campus — Chapman, Bldg. 3, 2nd Fl., Miami, Florida, United States",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: 8,
    title: "Roddy Bottum — The Book Loft of German Village (Columbus, OH)",
    author: "Roddy Bottum",
    location: "Columbus, OH",
    desc: "Roddy Bottum presents The Royal We, in conversation with Rob Harvilla.",
    date: "Nov 22, 2026, 2:00pm - 4:00pm",
    venue: "Bexley Public Library",
    map: "2411 E Main St., Columbus, OH, 43209",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
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

export default function EventsPage({ setActivePage }) {
  const [showAuthors, setShowAuthors] = useState(true);
  const [showLocations, setShowLocations] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = selectedFilter
    ? upcomingEvents.filter(
        (ev) => ev.author === selectedFilter || ev.location === selectedFilter
      )
    : upcomingEvents;

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">
      
      {/* LEFT SIDEBAR: Events Filter Menu */}
      <aside className="w-full lg:w-[225px] shrink-0">
        <div className="bg-white border border-gray-300 shadow-md">
          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">Events</h2>
          </div>

          <div className="p-3 text-[11px] space-y-3">
            {/* Active Link */}
            <button
              onClick={() => setSelectedFilter("")}
              className="font-bold text-gray-800 hover:underline block cursor-pointer"
            >
              &raquo; Upcoming Events
            </button>

            {/* Collapsible: Events by Author */}
            <div className="border-t border-gray-200 pt-2">
              <button
                onClick={() => setShowAuthors(!showAuthors)}
                className="font-bold text-gray-700 flex items-center gap-1 cursor-pointer mb-1.5"
              >
                <span>{showAuthors ? "▼" : "▶"}</span>
                <span>Events by Author</span>
              </button>

              {showAuthors && (
                <ul className="pl-2 space-y-0.5">
                  {eventAuthors.map((author) => (
                    <li key={author}>
                      <button
                        onClick={() => setSelectedFilter(author)}
                        className={`hover:underline text-left cursor-pointer ${
                          selectedFilter === author
                            ? "font-bold text-black underline"
                            : "text-[#9e1b1b]"
                        }`}
                      >
                        {author}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Collapsible: Events by Location */}
            <div className="border-t border-gray-200 pt-2">
              <button
                onClick={() => setShowLocations(!showLocations)}
                className="font-bold text-gray-700 flex items-center gap-1 cursor-pointer mb-1.5"
              >
                <span>{showLocations ? "▼" : "▶"}</span>
                <span>Events by Location</span>
              </button>

              {showLocations && (
                <ul className="pl-2 space-y-0.5">
                  {eventLocations.map((loc) => (
                    <li key={loc}>
                      <button
                        onClick={() => setSelectedFilter(loc)}
                        className={`hover:underline text-left cursor-pointer ${
                          selectedFilter === loc
                            ? "font-bold text-black underline"
                            : "text-[#9e1b1b]"
                        }`}
                      >
                        {loc}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* CENTER WHITE CONTENT: Upcoming Events List + Pagination */}
      <section className="flex-1 bg-white p-5 shadow-lg border border-gray-300 w-full">
        
        {/* Page Heading */}
        <div className="flex items-center justify-between pb-3 border-b border-dotted border-gray-300">
          <h2 className="text-sm text-gray-800">Upcoming Events</h2>
          {selectedFilter && (
            <button
              onClick={() => setSelectedFilter("")}
              className="text-[11px] text-[#9e1b1b] font-bold hover:underline cursor-pointer"
            >
              Showing: {selectedFilter} (Show All)
            </button>
          )}
        </div>

        {/* Events List */}
        {filteredEvents.length === 0 ? (
          <div className="py-8 text-center text-xs text-gray-600">
            No upcoming events found for "{selectedFilter}".{" "}
            <button
              onClick={() => setSelectedFilter("")}
              className="text-[#9e1b1b] font-bold hover:underline cursor-pointer"
            >
              View all events
            </button>
          </div>
        ) : (
          <div className="divide-y divide-dotted divide-gray-300">
            {filteredEvents.map((event) => (
              <article key={event.id} className="py-4 flex gap-4 items-start">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-16 h-24 object-cover border border-gray-300 shrink-0"
                />

                <div className="text-xs flex-1">
                  <a
                    href={`#event-${event.id}`}
                    className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                  >
                    {event.title}
                  </a>
                  <p className="text-[11px] text-gray-700 leading-snug mb-2.5">
                    {event.desc}
                  </p>

                  <div className="text-[10.5px] text-gray-700 space-y-0.5 leading-snug">
                    <p>
                      <span className="font-semibold">Date:</span> {event.date}{" "}
                      |{" "}
                      <a href="#ical" className="text-[#9e1b1b] hover:underline">
                        Add to iCal &raquo;
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Venue:</span>{" "}
                      <a href="#venue" className="text-[#9e1b1b] hover:underline">
                        {event.venue}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Map:</span>{" "}
                      <a href="#map" className="text-[#9e1b1b] hover:underline">
                        {event.map}
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Pagination Bar */}
        <div className="mt-6 pt-4 border-t border-dotted border-gray-300 flex flex-wrap items-center justify-center gap-1 text-[10px]">
          <span className="border border-gray-300 px-1.5 py-0.5 text-gray-600 bg-gray-50">
            Page {currentPage} of 4
          </span>

          {[1, 2, 3, 4].map((num) => (
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

          <button
            onClick={() => setCurrentPage((prev) => (prev < 4 ? prev + 1 : 1))}
            className="border border-gray-300 px-1.5 py-0.5 text-[#9e1b1b] hover:bg-gray-100 cursor-pointer"
          >
            &raquo;
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
              onClick={() => setActivePage("NEWS & FEATURES")}
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
            {upcomingEvents.slice(0, 2).map((event) => (
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
                  <p className="text-gray-700 font-medium mb-1">11/{event.id === 1 ? "19" : "21"}/26</p>
                  <p className="text-gray-600 leading-snug line-clamp-3">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-gray-200">
            <button
              onClick={() => setSelectedFilter("")}
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