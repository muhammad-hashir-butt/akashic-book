import React from "react";

export default function HomeCards() {
  const newsBullets = [
    'Listen to "Imaginary Composition" by Sonnenzimmer',
    'Listen to "Beginnings, Endings, and Other Musical Figures" by Joseph Fuller',
    'Listen to "Catastrophe Will Never Let You Down" by Adam Dixon, performed by Margo Seibert',
    'Listen to "Leave It Alone" by Jason Kaminski',
  ];

  const insiderBullets = [
    "Exclusive Robyn Hitchcock Preorder Package",
    'Now Available: "Hey Yang, Where’s My Thousand Bucks?"',
    "Akashic Remembers Elizabeth Nunez",
    "Quarantine Q&A: David Duchovny",
  ];

  return (
    <div className="space-y-4">

      {/* Top 2-Column Row: Social Widget Cards (Moved to Top & Swapped) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Left: Second Social / Publisher Card */}
        <div className="border border-gray-300 bg-white p-3">
          <div className="border border-gray-200 rounded bg-gray-50 overflow-hidden max-w-[260px] mx-auto">
            <div className="h-10 bg-gradient-to-r from-gray-800 to-gray-900" />
            <div className="p-2.5 text-xs">
              <div className="flex items-center justify-between gap-2 -mt-5 mb-2">
                <div className="pt-3">
                  <h4 className="font-bold text-gray-900">Akashic Books</h4>
                  <p className="text-[10px] text-gray-500">9.5K followers</p>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-300 flex items-center justify-center font-black text-[9px] text-center leading-none shadow-sm">
                  AKASHIC
                  <br />
                  BOOKS
                </div>
              </div>
              <button className="w-full bg-[#1877f2] hover:bg-blue-700 text-white text-xs font-bold py-1.5 rounded cursor-pointer mb-2">
                Follow
              </button>
              <p className="text-[10.5px] text-gray-600 mb-1.5 leading-snug">
                Independent publisher in Brooklyn dedicated to reverse-gentrification of the literary world.
              </p>
              <p className="text-[10px] text-gray-500">Publisher</p>
            </div>
          </div>
        </div>

        {/* Right: Facebook Widget Card */}
        <div className="border border-gray-300 bg-white p-3">
          <div className="border border-gray-200 rounded bg-gray-50 overflow-hidden max-w-[260px] mx-auto">
            <div className="h-16 bg-gradient-to-r from-[#2b1010] to-[#7a1818] p-2 flex items-start justify-start">
              <span className="w-5 h-5 rounded-full bg-[#1877f2] text-white text-xs font-bold flex items-center justify-center">
                f
              </span>
            </div>
            <div className="p-2.5 text-xs">
              <div className="flex items-center justify-between gap-2 -mt-6 mb-2">
                <div className="pt-4">
                  <h4 className="font-bold text-gray-900">Akashic Books</h4>
                  <p className="text-[10px] text-gray-500">9.5K followers</p>
                </div>
                <div className="w-11 h-11 bg-white border border-gray-300 flex items-center justify-center font-black text-[10px] text-center leading-none shadow-sm">
                  AKASHIC
                  <br />
                  BOOKS
                </div>
              </div>
              <button className="w-full bg-[#1877f2] hover:bg-blue-700 text-white text-xs font-bold py-1.5 rounded cursor-pointer mb-2">
                Follow
              </button>
              <p className="text-[10.5px] text-gray-600 mb-1.5 leading-snug">
                Independent publisher in Brooklyn dedicated to reverse-gentrification of the literary world.
              </p>
              <p className="text-[10px] text-gray-500">Publisher</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom 2-Column Row: Akashic Insider (Left) + News & Features (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Left Box: Akashic Insider */}
        <div className="border border-gray-300 bg-white flex flex-col justify-between">
          <div>
            <div className="bg-[#e8e6df] border-b border-gray-300 px-3.5 py-2 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#222]">Akashic Insider</h3>
              <a
                href="#more-insider"
                className="text-[11px] font-bold text-[#9e1b1b] hover:underline"
              >
                More Akashic Insider &raquo;
              </a>
            </div>

            <div className="p-3.5 text-xs space-y-3">
              {/* Gina Gershon Section First */}
              <div className="flex gap-3 items-start">
                <div className="flex-1">
                  <a
                    href="#insider-2"
                    className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                  >
                    Exclusive Gina Gershon Preorder Package
                  </a>
                  <p className="text-gray-700 leading-snug">
                    Gina Gershon's preorder package for her new memoir AlphaPussy is now available!
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80"
                  alt="Gina Gershon"
                  className="w-24 h-24 object-cover border border-gray-200 shrink-0"
                />
              </div>

              {/* SCAM ALERT + Natasha Howard */}
              <div>
                <div className="w-40 h-36 bg-black text-white mx-auto mb-3 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-base font-black tracking-wide mb-1.5">
                    SCAM ALERT!
                  </span>
                  <p className="text-[10.5px] text-gray-200 leading-snug">
                    Beware phish emails masquerading as Akashic staff.
                  </p>
                </div>

                <a
                  href="#insider"
                  className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                >
                  Exclusive Natasha Howard Preorder Package
                </a>
                <p className="text-gray-700 leading-snug">
                  Our exclusive preorder package for Natasha Howard's new WNBA memoir is now available for preorder.
                </p>
              </div>

              <ul className="space-y-1 list-disc pl-4 text-[#9e1b1b]">
                {insiderBullets.map((item) => (
                  <li key={item}>
                    <a href="#insider-link" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Box: News & Features */}
        <div className="border border-gray-300 bg-white flex flex-col justify-between">
          <div>
            <div className="bg-[#e8e6df] border-b border-gray-300 px-3.5 py-2 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#222]">News & Features</h3>
              <a
                href="#more-news"
                className="text-[11px] font-bold text-[#9e1b1b] hover:underline"
              >
                More News & Features &raquo;
              </a>
            </div>

            <div className="p-3.5 text-xs space-y-3">
              {/* Bullets Moved Above Featured Item */}
              <ul className="space-y-1 list-disc pl-4 text-[#9e1b1b]">
                {newsBullets.map((item) => (
                  <li key={item}>
                    <a href="#news-link" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Featured David Duchovny */}
              <div className="pt-2 border-t border-gray-200">
                <a
                  href="#news"
                  className="font-bold text-[#9e1b1b] hover:underline block mb-1"
                >
                  Exclusive David Duchovny Preorder Package
                </a>
                <p className="text-gray-700 mb-3 leading-snug">
                  The new paperback edition of David Duchovny's debut poetry collection, About Time, is now available for preorder.
                </p>

                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
                  alt="David Duchovny"
                  className="w-40 h-40 object-cover mx-auto border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}