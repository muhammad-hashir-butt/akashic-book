import React from "react";

const subjects = [
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
  "Young Adult / Middle Grade",
];

const featuredBooks = [
  {
    id: 1,
    title: "I Am a Promise",
    desc: "An inspiring children's picture book about the indomitable spirit of Jamaican eight-time Olympic medal winner Shelly-Ann Fraser-Pryce.",
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=200&q=80",
    links: [],
  },
  {
    id: 2,
    title: "Interticial ARTelligence: The Moments That Met Me",
    desc: "Legendary hip-hop artist Chuck D (Public Enemy, Prophets of Rage) details and illustrates his encounters with some of society's most influential musicians, entertainers, and public figures.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80",
    links: ["Bookshop", "Barnes & Noble", "Amazon"],
  },
  {
    id: 3,
    title: "A Simple Distance",
    desc: "A provocative debut that masterfully fuses issues of culture, race, sexuality, and family.",
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&q=80",
    links: [],
  },
];

export default function SubjectsSidebar({ setActivePage }) {

  // Subject Navigation
  const handleSubjectClick = (subject) => {
    if (!setActivePage) return;

    if (subject === "Black Interest") {
      setActivePage("BLACK_INTEREST");
    } else if (subject === "Black Sheep") {
      setActivePage("BLACK_SHEEP");
    } else if (subject === "Caribbean Interest") {
      setActivePage("CARIBBEAN_INTEREST");
    } else if (subject === "Children's") {
      setActivePage("CHILDRENS");
    } else if (subject === "Digits & E-Books") {
      setActivePage("DIGITS_EBOOKS");
    } else if (subject === "Edge of Sports") {
      setActivePage("EDGE_OF_SPORTS");
    } else if (subject === "Enemy Books") {
      setActivePage("ENEMY_BOOKS");
    } else if (subject === "Forthcoming") {
      setActivePage("FORTHCOMING");
    } else if (subject === "Gift Books") {
      setActivePage("GIFT_BOOKS");
    } else if (subject === "Gracie Belle") {
      setActivePage("GRACIE_BELLE");
    } else {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const availableSubjects = [
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
  ];

  return (
    <aside className="w-full lg:w-[225px] shrink-0 space-y-4">

      {/* Box 1: Featured Black Interest */}
      <div className="bg-white border border-gray-300 shadow-md">

        <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2 flex items-center justify-between gap-2">

          <h2 className="text-xs font-bold text-[#222]">
            <span className="font-normal text-gray-600">
              Featured:
            </span>{" "}
            Black Interest
          </h2>

          <button
            type="button"
            onClick={() => handleSubjectClick("Black Interest")}
            className="text-[10.5px] font-bold text-[#9e1b1b] hover:underline shrink-0"
          >
            More &raquo;
          </button>

        </div>

        <div className="divide-y divide-gray-200">

          {featuredBooks.map((book) => (
            <div key={book.id} className="p-2.5 text-[11px]">

              <div className="flex gap-2 items-start justify-between">

                <div className="flex-1">

                  <a
                    href="#book"
                    className="font-bold text-[#9e1b1b] hover:underline leading-snug block mb-1"
                  >
                    {book.title}
                  </a>

                  {book.links.length > 0 && (
                    <div className="mb-1.5 text-[10.5px] text-gray-700 space-y-0.5">

                      {book.links.map((store) => (
                        <div key={store}>
                          Order on{" "}
                          <a
                            href="#order"
                            className="text-[#9e1b1b] hover:underline"
                          >
                            {store}
                          </a>
                        </div>
                      ))}

                    </div>
                  )}

                  <p className="text-gray-700 leading-snug">
                    {book.desc}
                  </p>

                </div>

                <img
                  src={book.img}
                  alt={book.title}
                  className="w-16 h-20 object-cover border border-gray-200 shrink-0"
                />

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Box 2: Subjects */}
      <div className="bg-white border border-gray-300 shadow-md">

        <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
          <h2 className="text-sm font-bold text-[#222]">
            Subjects
          </h2>
        </div>

        <ul className="px-3 py-3 space-y-1.5 text-[12px]">

          {subjects.map((subject) => (
            <li key={subject}>

              {availableSubjects.includes(subject) ? (

                <button
                  type="button"
                  onClick={() => handleSubjectClick(subject)}
                  className="text-[#9e1b1b] hover:underline hover:text-black block leading-snug text-left w-full"
                >
                  {subject}
                </button>

              ) : (

                <a
                  href={`#${subject
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")}`}
                  className="text-[#9e1b1b] hover:underline hover:text-black block leading-snug"
                >
                  {subject}
                </a>

              )}

            </li>
          ))}

        </ul>

      </div>

    </aside>
  );
}