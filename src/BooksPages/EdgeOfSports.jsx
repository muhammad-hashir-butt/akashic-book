
import React from "react";

const edgeOfSportsBooks = [
  {
    id: 1,
    title: "GARMIN EDGE 1050 USER GUIDE: Master Every Ride with Confidence",
    author: "Robert E. Deel",
    description:
      "A practical guide to setting up and using the Garmin Edge 1050, including navigation, route planning, training metrics, sensors, and connected cycling features.",
    image: "/edge-of-sports/edge-of-sports 1.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HJRXQ4P3",
  },
  {
    id: 2,
    title: "Top Sport: The Edge of Chaos",
    author: "Chris Mumford and Rick Cost",
    description:
      "A story set inside a modern football club, exploring the challenges of sporting leadership, decision-making, coaching, player management, and competing priorities.",
    image: "/edge-of-sports/edge-of-sports 2.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HMJCBZ9H",
  },
  {
    id: 3,
    title: "Edge of Excellence: Mastering the Psychological Game in Sports",
    author: "Freudian Trips",
    description:
      "An exploration of sports psychology and the mental aspects of athletic performance, including focus, confidence, motivation, and competitive challenges.",
    image: "/edge-of-sports/edge-of-sports 3.jpg",
    amazonLink: "https://www.amazon.com/dp/B0CNZSPJ6M",
  },
  {
    id: 4,
    title:
      "Beyond the Map's Edge Workbook: A Seeker Book for Justin Posey's Treasure and Wisdom",
    author: "Dave Hunter",
    description:
      "A companion workbook inspired by Beyond the Map's Edge, focusing on the treasure hunt, its clues, and the search for deeper understanding.",
    image: "/edge-of-sports/edge-of-sports 4.jpg",
    amazonLink: "https://www.amazon.com/dp/B0FGVQTY1M",
  },
  {
    id: 5,
    title: "BETTING WITH AN EDGE #7: Advanced Mathematics in Betting",
    author: " E. CHAVES",
    description: "Master probability and mathematical strategies to evaluate odds, manage risk, and bet smarter.",
    image: "/edge-of-sports/edge-of-sports 5.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HRX2RP38",
  },
  {
    id: 6,
    title: "The Edge: Championship Mindset Training for Athletes",
    author: " Dr. Jayson A Hull ",
    description:
      "A sports mindset guide focused on mental preparation, competitive confidence, discipline, and developing a championship approach to athletic performance.",
    image: "/edge-of-sports/edge-of-sports 6.jpg",
    amazonLink: "https://www.amazon.com/dp/B0H9JJHR1Q",
  },
  {
    id: 7,
    title: "The Winning Edge: Strategies for Data-Driven Success",
    author: "Anthony Wachiuri",
    description:
      "A guide exploring strategic thinking, data analysis, and approaches to making more informed decisions in competitive sports.",
    image: "/edge-of-sports/edge-of-sports 7.jpg",
    amazonLink: "https://www.amazon.com/dp/B0H5J4WCTS",
  },
  {
    id: 8,
    title: "Visual Edge: Golf Performance — How to See a Better Game",
    author: "Richard Hughes and Matthew Rudy",
    description:
      "A golf performance guide examining how vision affects distance judgment, alignment, green reading, and decision-making on the course.",
    image: "/edge-of-sports/edge-of-sports 8.jpg",
    amazonLink: "https://www.amazon.com/dp/B0H8K18ZJP",
  },
  {
    id: 9,
    title:
      "The Football Betting Playbook: The Step-by-Step Strategy Guide to Betting NFL and College Football",
    author: "Cesar Conde",
    description:
      "An educational guide covering football betting concepts, including spreads, totals, player props, parlays, line movement, and interpreting betting markets.",
    image: "/edge-of-sports/edge-of-sports 9.jpg",
    amazonLink: "https://www.amazon.com/dp/B0HH8684PD",
  },
  {
    id: 10,
    title:
      "Exploring Edges: Field Notes From Experiments in Medicine, Endurance Sports, and Love",
    author: "Travis A. Stephensen",
    description:
      "A personal memoir about a physician's experiences with medicine, endurance sports, physical challenges, mental resilience, and personal discovery.",
    image: "/edge-of-sports/edge-of-sports 10.jpg",
    amazonLink: "https://www.amazon.com/dp/1518689310",
  },
];

export default function EdgeOfSports() {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full min-h-[600px]">

      {/* Page Heading */}
      <div className="px-5 py-3 border-b border-gray-200">
        <h1 className="text-[14px] font-bold text-[#222]">
          <span className="font-normal text-gray-500">
            Subject:
          </span>{" "}
          Edge of Sports
        </h1>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {edgeOfSportsBooks.map((book, index) => (
          <article
            key={book.id}
            className={`
              flex items-start gap-3 p-4
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
                alt={book.title || `Edge of Sports Book ${book.id}`}
                className="
                  w-full h-auto object-contain
                  border border-gray-200 shadow-sm
                "
                loading="lazy"
              />
            </div>

            {/* Book Information */}
            <div className="flex-1 min-w-0">

              {/* Book Title */}
              {book.title && (
                <h2 className="text-[13px] font-bold text-[#9e1b1b] leading-snug mb-1">
                  {book.title}
                </h2>
              )}

              {/* Author Name */}
              {book.author && (
                <p className="text-[11px] text-[#9e1b1b] mb-2">
                  By {book.author}
                </p>
              )}

              {/* Book Description */}
              {book.description && (
                <p className="text-[11px] text-gray-700 leading-relaxed mb-3">
                  {book.description}
                </p>
              )}

              {/* Amazon Button */}
              {book.amazonLink && (
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center
                    justify-center gap-1
                    mt-1 px-3 py-1.5
                    bg-[#9e1b1b] text-white
                    text-[10px] font-semibold
                    rounded-sm
                    hover:bg-[#7f1515]
                    transition-colors duration-200
                  "
                >
                  View on Amazon
                  <span aria-hidden="true">↗</span>
                </a>
              )}

            </div>
          </article>
        ))}

      </div>
    </div>
  );
}
