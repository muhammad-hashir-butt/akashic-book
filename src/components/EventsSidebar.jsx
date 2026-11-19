import React from "react";

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

export default function EventsSidebar() {
  return (
    <aside className="w-full lg:w-[235px] shrink-0 space-y-4">
      
      {/* Box 1: Twitter / X Feed Widget (Moved to Top) */}
      <div className="bg-white border border-gray-300 shadow-md overflow-hidden">
        <div className="bg-[#29a9e1] px-3 py-2">
          <a
            href="#follow-twitter"
            className="inline-block bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded hover:bg-gray-900"
          >
            Follow
          </a>
        </div>

        <div className="p-3 text-[11px] text-gray-800 space-y-2 leading-snug">
          <p>
            <span className="font-bold text-[#9e1b1b]">
              RT @ComicCrusaders:
            </span>{" "}
            REVIEW: STANDING THE NAPALM GRAPHIC ANTHOLOGY OF CHUCK D by{" "}
            <span className="text-[#9e1b1b]">@ChuckD</span>.
          </p>
          <div className="text-[10px] text-[#9e1b1b] space-x-2">
            <a href="#reply" className="hover:underline">Reply</a>
            <a href="#retweet" className="hover:underline">Retweet</a>
            <a href="#favorite" className="hover:underline">Favorite</a>
          </div>
          <p className="text-[10px] text-gray-500">
            10:56:04 PM • from Twitter Web App
          </p>
        </div>
      </div>

      {/* Box 2: Upcoming Events (Moved Below) */}
      <div className="bg-white border border-gray-300 shadow-md">
        <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
          <h2 className="text-sm font-bold text-[#222]">Upcoming Events</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {events.map((event) => (
            <div key={event.id} className="p-3 flex gap-3 items-start justify-between">
              <div className="text-xs flex-1">
                <p className="text-gray-700 font-medium mb-1">{event.date}</p>
                <a
                  href="#event"
                  className="font-bold text-[#9e1b1b] hover:underline leading-snug block mb-1.5"
                >
                  {event.title}
                </a>
                <p className="text-gray-600 leading-snug">{event.desc}</p>
              </div>
              <img
                src={event.img}
                alt={event.title}
                className="w-16 h-24 object-cover border border-gray-200 shrink-0"
              />
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}