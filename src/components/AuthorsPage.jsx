import React, { useMemo, useState } from "react";

// ======================================
// SUBJECTS — EXISTING LIST
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
// POPULAR TAGS — EXISTING LIST
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
// ALL BOOK AUTHORS + AMAZON LINKS
// Each entry:
// [Author Name, Book Title, Amazon ASIN]
// ======================================

const authorBooks = [
  // BLACK INTEREST
  ["Angry Biracial", "The Black State", "B0H3F9PJC1"],
  ["Carter Godwin Woodson", "The Mis-Education of the Negro", "B09VWRWW6K"],
  ["Kyle Shideler", "Understanding Black Identity Extremism", "B0CKT2YY2V"],
  ["Charae Lewis", "The Black Effect", "B0851LYC73"],
  ["Harvey Black", "The Black Effect: The Day the Cold War Turned Hot", "B08TQCNGPD"],
  ["Lee Cummings", "The Negro Question Part 6: The 13 Black Colonies", "1539742210"],
  ["Lee Cummings", "The Negro Question Part 3: The Black Pentecost", "1503335763"],
  ["Chase McGhee", "500 Amazing Facts About the Negro", "B0C12527KQ"],
  ["Kiyon Harcum", "Resilient Black America", "B0F4NPJVJS"],
  ["Brad Magnarella", "Black Luck", "1720517681"],

  // BLACK SHEEP
  ["Rebecca Suzanne", "The Black Sheep", "B0BQ6JQ21C"],
  ["Shawn Stoner", "Black Sheep Conspiracies", "B09RC28LBP"],
  ["Adrienne Dominique", "The Black Sheep: Breaking the Cycle", "B0HN2612ND"],
  ["Dedric Green", "The Black Sheep", "B0HPTZ8Y4B"],
  ["Gabreella Jones", "Black Sheep", "B0DS61KRTY"],
  ["Shirley Berard", "Black Sheep", "B0DZFJ249L"],
  ["Anomaly", "The Black Sheep Who Told the Truth", "B0H46WQLV2"],
  ["Milton Russell", "Black Sheep: The Journey!!!", "B0H24CP7SW"],
  ["Bill Johns", "Black Sheep at Altitude", "B0GQRCLSS8"],

  // CARIBBEAN INTEREST
  ["Angela Renner", "Southern Caribbean Cruising Guide 2026", "B0GVZ1FXHD"],
  ["Sally Mina", "Royal Caribbean Cruise Guide 2026/2027", "B0GYT533R3"],
  ["Grace Barrington-Shaw", "115 Greatest Caribbean Recipes of All Time", "1979572143"],
  ["Madeline Layne", "Caribbean Essentials: Clean Island Kitchen", "B0HPT6RNP5"],
  ["Julie Edwards", "Caribbean Sea Animals Coloring Book", "B0HQVH7HCZ"],
  ["W Smith", "Time to Cruise the Southern Caribbean", "B0GNK1NY5Y"],
  ["Prince Alex", "The Caribbean Drinks & Desserts Cookbook", "B0HFKG3QML"],
  ["Mary McLaurin", "Caribbean Cruise Pocket Guide 2026", "B0HBXG8VFZ"],
  ["Sidney K. Torbett", "History of the Caribbean", "B0G3K9PDL5"],
  ["Travel Companion Puzzle Books", "Caribbean Cruise: Grown-Up Activity Book", "B0H9Z5ZF5G"],

  // CHILDREN'S
  ["Sam Bright", "The American History Mystery Series", "B0FVW2WGPM"],
  ["S. Lambert", "Pride in San Francisco: A Coloring Book", "B0HRQXLYJP"],
  ["Christa Nonnemaker", "2nd Grade Social Studies and U.S. History Workbook", "B0HLN8FBCJ"],
  ["J. S. Hanes", "New Cat at the Lake!", "B0HRHMKZ9Y"],
  ["Courtney S. Warren", "Growing with God Every Day", "B0HP9M5F69"],
  ["Charles S. Smith", "The Birth of a Savior", "B0HR743VPN"],
  ["C. S. Kalapala", "Whoosh! The Thankful Jar Adventure", "B0HNSMX5S9"],
  ["Mary S.", "Adina's Chanukah Lights", "B0HRFDRTJX"],
  ["Jewel Simpson", "Kingdom Kids ABC", "B0HRLTRR7V"],
  ["Don S. Roth", "The Grumbly Jumbly Again", "B0HNKTR5CV"],

  // DIGITS & E-BOOKS
  ["Megan Bell Smith", "Digit's Place", "B09BYPQY2Y"],
  ["Stacey Samuels", "Meet the Digits", "B0HPM32JH9"],
  ["T. Jobe", "Digits of √2", "B0CV6B3F2S"],
  ["Creative Masterson", "Death by Digits", "B0HRW17G2X"],
  ["Velleity Designs", "Let's Review 2 & 3 Digit Addition", "B0GXPKDYNM"],
  ["saviola tinno", "Multi-Digit Multiplication Workbook: Grades 4–6", "B0HRJ3T7L8"],
  ["Moshood Abiola", "The Digit Zero", "B0FSCBMCTZ"],
  ["narinzoon", "Single Digit Addition Vertical Worksheet", "B0DJBRCJ6S"],
  ["H M Shafique", "Multi-Digit Multiplication Workbook: Grade 4", "B0HRTDY6RS"],
  ["Stochastic Press", "Pi Episode III: The Final Million Digits", "B0GGBCS412"],

  // EDGE OF SPORTS
  ["Robert E. Deel", "GARMIN EDGE 1050 USER GUIDE", "B0HJRXQ4P3"],
  ["Chris Mumford and Rick Cost", "Top Sport: The Edge of Chaos", "B0HMJCBZ9H"],
  ["Freudian Trips", "Edge of Excellence", "B0CNZSPJ6M"],
  ["Dave Hunter", "Beyond the Map's Edge Workbook", "B0FGVQTY1M"],
  ["E. CHAVES", "BETTING WITH AN EDGE #7", "B0HRX2RP38"],
  ["Dr. Jayson A Hull", "The Edge: Championship Mindset Training", "B0H9JJHR1Q"],
  ["Anthony Wachiuri", "The Winning Edge", "B0H5J4WCTS"],
  ["Richard Hughes and Matthew Rudy", "Visual Edge: Golf Performance", "B0H8K18ZJP"],
  ["Cesar Conde", "The Football Betting Playbook", "B0HH8684PD"],
  ["Travis A. Stephensen", "Exploring Edges", "1518689310"],

  // ENEMY BOOKS
  ["Neil Port", "The Enemy Within", "B077NQSMKX"],
  ["Mike Roberts", "The Enemy Was Never Each Other", "B0HMFLX55Q"],
  ["R. W. Reed", "The Last Enemy", "B0HNTX8N84"],
  ["DN Fairweather", "Enemy at the Gate", "B0HHD4RX85"],
  ["Merry Farmer", "Friends and Enemies", "B0CBQ87G98"],
  ["Henrik Ibsen", "An Enemy of the People", "150258316X"],
  ["Holly Gernatt", "Exposing the Enemy", "B0HHHGRGLP"],
  ["Frances Rey", "Unmasking the Enemy Part Two", "B0GR5ZM7GR"],
  ["West Greene", "All His Broken Pieces", "B0BQ57Y38J"],
  ["Heather Spain", "What the Enemy Intended for Evil", "B0HLRSNV86"],

  // FORTHCOMING
  ["Julie Voice", "Forthcoming: Serial Muse Chronicles Revisited", "B0DL6F9CL4"],
  ["Judy Grin", "His Name Was Shortly Forthcoming", "1546872906"],
  ["Alex Dugar", "Charting the Stars", "B0CQ83D2NM"],
  ["DeSean K Martin", "Forthcoming Emperors", "B084DG25PS"],
  ["Kendall L. Williams", "Reclaiming Your Identity", "B0F2519TGV"],
  ["Lisa Suzanne Nugent", "Madness and Me", "1797580566"],
  ["Vivian King", "Forget Them Kids", "B0F5NTMN6H"],
  ["David Labrava", "Becoming a Son", "1522730796"],

  // GIFT BOOKS
  ["Thriving Minds", "101 Things to Do While You're Alive", "1764858182"],
  ["Kingdom Press", "Baptism Book for Boys", "1764574346"],
  ["Premium Press", "The Greatest Six-Seven Activity Book", "1764574303"],
  ["Kevin Finson", "The Twelve Gifts of Christmas", "B0DKZNYSX4"],
  ["Thomas B. Dowd III", "Now What? The Ultimate Graduation Guide", "B01D4V4USO"],
  ["Donna Pool", "The Saving Tree", "B0GMY4T5P7"],
  ["Devin Munroe", "The Velveteen Rabbit: A Haiku Classic", "B0H22MVMDT"],
  ["Sage Michaels", "Desperately Seeking the Perfect Pointe Shoe", "B0HBHMN3DD"],

  // GRACIE BELLE
  ["Gracie Belle", "Kids Fun Miniature Golf Coloring Book", "B0G4GWDL6J"],
  ["GRACIE BELLE DOODLES", "Tiny Tails Coloring Book", "B0HDZBYKJ4"],
  ["Gracie Belle", "Las Vegas Fun: A Colorful Adventure", "B0FXRCGHCV"],
  ["Gracie Belle", "Cozy Houses Coloring Book", "B0FQ1S1WNL"],
  ["Gracie Belle", "Kids Little Vampires Coloring Book", "B0G3F2WM7F"],
  ["Gracie Belle", "Meerkats Coloring Book", "B0GQ9LVQRV"],
  ["Gracie Belle", "Kleine Arbeiter Malbuch", "B0GMQV9DGY"],
  ["Gracie Belle", "Prinzessinnen, Ritter & Burgen Malbuch", "B0GJNQYWR8"],
  ["Gracie Belle", "Snowmen Coloring Book", "B0G4XMD85N"],
  ["Gracie Belle", "Kids Fun Afrika Malbuch", "B0G4WYLTCR"],

  // INFAMOUS BOOKS
  ["Kimberly L. Craft", "Infamous Lady", "1502581469"],
  ["Iris T Cannon", "INFAMOUS: A Dark Serial Killer Romance", "B0G1KGZ71Q"],
  ["Richard Estep", "American Hotel Story", "B0928FYTQJ"],
  ["Loretta L. Mallory", "Infamous Sis", "B0DWHL83Y8"],
  ["Malcolm Harris", "Infamous Vol. 1", "B0DNBCLRXV"],
  ["G. Omonuwa", "Infamous Boss", "B0BSS5FL2D"],
  ["Dorain P. Davis Jr.", "Infamous Darren and the Twelve Zodiacs: Issue #1", "B09X1R76JX"],
  ["Travis B.", "The Infamous Four-Way", "B0FQ1CG3SX"],
  ["Dorain P. Davis Jr.", "Infamous Darren and the Twelve Zodiacs", "B0B7QP8PHP"],
  ["Shah Rukh", "Profiles of Infamous Thieves", "B0D1Y1BD49"],

  // KAYLIE JONES BOOKS
  ["Book For Kaylie", "I Will Never Give Up Because My Name Is Kaylie", "B09YJVBV4H"],
  ["Miles Tucker", "A Blessing for Kaylie", "B09L3YWNPX"],
  ["Hyewon Suh", "Kyle & Kaylie: A Transplant Tale", "B0CDNJ64QT"],
  ["Christian Lattimer", "I'm Kaylie Doing Kaylie Things", "B085RTT7BM"],
  ["Miles Tucker", "Where in the World Is Kaylie?", "B08DBVR79J"],
  ["Trlen Chhan", "Kaylie: Personalized Journal Notebook", "B09WHJSC7B"],
  ["Loveable Fringe", "Stuff Kaylie Writes Down", "169537410X"],

  // LATIN AMERICAN INTEREST
  ["Dan Harmon", "The Latin American Surf Tales", "B0D3974HBW"],
  ["Mind Smith", "Short Stories in Spanish for Beginners: Two", "B0HBXMB44W"],
  ["Brad Hoskinson", "Latin American Cookbook", "B0GHYKR3J6"],
  ["Frédéric Veau", "Myths and Legends of Latin America", "B0CRB66DLM"],
  ["Mr Erik Haindl Rondanelli", "Latin American Civilization", "B0HFV7835L"],
  ["Horacio Quiroga", "Short Stories: Father Latin American", "B0B6LF72WF"],
  ["Digital Polyglot", "5-Minute Latin American Spanish Journal", "B0CYSWCMW8"],
  ["Wordstay", "Latin American Spanish Expressions", "B0HQJ9PKF7"],
  ["Digital Polyglot", "Maravillas de Latinoamérica", "B0D5HD3W5V"],
  ["Karen Tinoco", "Human Systems and Resources in Latin American Organizations", "B0GZ4SH5Y2"],

  // LGBTQIA+
  ["Katrina Maxwell / LGBT Llama", "A to Z of LGBTQ+ Terms", "B0BQ9KYFDV"],
  ["Shaun Lee", "Queerology 101", "B0GY1QK7FF"],
  ["Finn Harold Scott", "Consent in Queer Relationships", "B0DJTC7R75"],
  ["Vera Murphy", "The Many Shapes of Love", "B0HMSM3S7B"],
  ["Yet Fry", "LGBTQIA+ Activism, Advocacy, Resistance & Community", "B0GCRP6ZST"],
  ["Sunderland LGBT+ Network", "Understanding LGBTQ+", "B0H3LPSMYF"],
  ["Alex Harper", "LGBTQ+ Guide to Mixed-Orientation Marriages", "B0D6R9JSL7"],
  ["Dr Richard L Travis", "Brave Queer Becoming", "B0F8TXLPJV"],

  // LIMITED EDITION
  ["Jörg van Hooven", "Limited Chronicle", "B0HRFQBN1Q"],
  ["Paige Cassel", "A Prose and Cons Cozy Mystery", "B0FHQFD9F6"],
  ["Gaming Geburtstag Geschenke by FS", "Level Complete", "B0BCSH4MHF"],
  ["Stephen Fratini", "Beyond Limits", "B0G7FXMQ6V"],
  ["Kezia Conyers", "S.T.P. Beyond the Blueprint Workbook", "B0HPY76SJH"],
  ["ProLearn Insights Ltd", "CAIA Level Exam Preparation Questions", "B0FPC59F3K"],
  ["Timothy Spears", "AB Study Guide", "1973516047"],
  ["Sybil Bartel", "Limit", "1713318636"],

  // LITERARY FICTION
  ["Edward Obi", "What the Water Kept", "9786452704"],
  ["David Alyn Gordon", "The Mummy's Vengeance", "B0CKPYW9Z7"],
  ["Robert Pavchick", "The Four Jacks", "B0GV1NBF5W"],
  ["Gregg F. Bartley", "Beneath the Angels of Mons", "B0DJY557WN"],
  ["Michael Stuart", "Hold My Bones", "B0GD848ZR5"],
  ["RD Pires", "A Sky Littered with Stories", "1729293425"],
  ["Dana Andrews", "The Library Story", "B0DHWCC3SD"],
  ["Joshua Berkov", "Adulting at the Moto-Lodge", "B09M5552L7"],
  ["Yanira A Rivera", "Book of Wishes", "B0FVVZLXJK"],
  ["S.M. Stevens", "The Wallace House of Pain", "B0BBJHK6TH"],
];

// ======================================
// GROUP BOOKS BY AUTHOR
// ======================================

const authorsByLetter = {};

const authorMap = new Map();

authorBooks.forEach(([author, title, asin]) => {
  const name = author.trim();

  if (!name || !asin) return;

  const key = name.toLowerCase();

  if (!authorMap.has(key)) {
    authorMap.set(key, {
      name,
      books: [],
    });
  }

  const authorEntry = authorMap.get(key);

  if (!authorEntry.books.some((book) => book.asin === asin)) {
    authorEntry.books.push({
      title,
      asin,
      amazonLink: `https://www.amazon.com/dp/${asin}`,
    });
  }
});

Array.from(authorMap.values()).forEach((author) => {
  const letter = author.name.charAt(0).toUpperCase();

  if (!authorsByLetter[letter]) {
    authorsByLetter[letter] = [];
  }

  authorsByLetter[letter].push(author);
});

Object.keys(authorsByLetter).forEach((letter) => {
  authorsByLetter[letter].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
});

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// ======================================
// EXISTING NEWS
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
// EXISTING EVENTS
// ======================================

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

// ======================================
// AUTHORS PAGE
// ======================================

export default function AuthorsPage({ setActivePage }) {
  const [selectedLetter, setSelectedLetter] = useState("");

  const [expandedAuthor, setExpandedAuthor] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    setExpandedAuthor(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClearFilter = () => {
    setSelectedLetter("");

    setExpandedAuthor(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show four letter columns per row.
  const visibleLetters = selectedLetter
    ? [selectedLetter]
    : alphabet;

  const letterGroups = useMemo(() => {
    const groups = [];

    for (let i = 0; i < visibleLetters.length; i += 4) {
      groups.push(visibleLetters.slice(i, i + 4));
    }

    return groups;
  }, [selectedLetter]);

  const totalAuthors = authorMap.size;

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">

      {/* ======================================
          LEFT SIDEBAR
      ====================================== */}

      <aside className="w-full lg:w-[225px] shrink-0 space-y-4">

        {/* BOX 1: CATALOG */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
            <h2 className="text-xs font-bold text-[#222]">
              Catalog
            </h2>
          </div>

          <ul className="px-3 py-2.5 space-y-1 text-[11px]">

            <li>
              <button
                type="button"
                onClick={() => setActivePage?.("BOOKS")}
                className="text-[#9e1b1b] hover:underline cursor-pointer"
              >
                Full Catalog
              </button>
            </li>

            <li className="text-gray-800 font-semibold">
              &raquo; List of Authors
            </li>

            <li>
              <a
                href="#download-pdf"
                className="text-[#9e1b1b] hover:underline"
              >
                Download Catalog (PDF)
              </a>
            </li>

          </ul>

        </div>

        {/* BOX 2: SUBJECTS */}
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
                  onClick={() => setActivePage?.("BOOKS")}
                  className="text-[#9e1b1b] hover:underline hover:text-black text-left cursor-pointer"
                >
                  {subject}
                </button>

              </li>
            ))}

          </ul>

        </div>

        {/* BOX 3: POPULAR CATALOG TAGS */}
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
                onClick={() => setActivePage?.("BOOKS")}
                className={`text-[#9e1b1b] hover:underline cursor-pointer ${tag.size}`}
              >
                {tag.name}
              </button>
            ))}

          </div>

        </div>

      </aside>

      {/* ======================================
          CENTER CONTENT
      ====================================== */}

      <section className="flex-1 min-w-0 bg-white p-5 shadow-lg border border-gray-300 w-full">

        {/* BROWSE BY AUTHOR A–Z */}
        <div className="text-center py-2 mb-6">

          <p className="text-[11px] font-bold text-gray-700 mb-1">
            Browse by Author
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1 text-[10.5px]">

            {alphabet.map((letter, index) => (
              <React.Fragment key={letter}>

                <button
                  type="button"
                  onClick={() => handleLetterClick(letter)}
                  className={`cursor-pointer hover:underline ${
                    selectedLetter === letter
                      ? "font-extrabold text-black underline"
                      : "text-[#9e1b1b]"
                  }`}
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

        {/* ACTIVE ALPHABET FILTER */}
        {selectedLetter && (
          <div className="mb-6 px-3 py-2 bg-[#f7f6f2] border border-gray-300 text-xs flex items-center justify-between gap-3">

            <span>
              Showing authors starting with:{" "}
              <strong className="text-[#9e1b1b]">
                {selectedLetter}
              </strong>
            </span>

            <button
              type="button"
              onClick={handleClearFilter}
              className="text-[#9e1b1b] font-bold hover:underline shrink-0"
            >
              Clear Filter
            </button>

          </div>
        )}

        {/* AUTHORS COUNT */}
        <div className="mb-5">

          <p className="text-[11px] text-gray-600">

            {selectedLetter
              ? `Showing ${
                  authorsByLetter[selectedLetter]?.length || 0
                } authors under ${selectedLetter}`
              : `Browse ${totalAuthors} authors from our book collections`}

          </p>

        </div>

        {/* ======================================
            ALPHABETICAL AUTHOR DIRECTORY
        ====================================== */}

        <div className="space-y-6">

          {letterGroups.map((group, groupIndex) => (

            <div
              key={group.join("-")}
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ${
                groupIndex < letterGroups.length - 1
                  ? "border-b border-gray-200 pb-6"
                  : ""
              }`}
            >

              {group.map((letter) => (

                <div
                  key={letter}
                  id={`author-group-${letter}`}
                >

                  {/* LETTER HEADING */}
                  <h3 className="text-xs font-bold text-gray-800 mb-2">
                    {letter}
                  </h3>

                  {/* AUTHORS LIST */}
                  {authorsByLetter[letter]?.length > 0 ? (

                    <ul className="space-y-2 text-[10.5px]">

                      {authorsByLetter[letter].map((author) => {

                        const isExpanded =
                          expandedAuthor === author.name;

                        return (
                          <li key={author.name}>

                            {/* AUTHOR NAME */}
                            <a
                              href={author.books[0].amazonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`View ${author.name}'s book on Amazon`}
                              className="text-[#9e1b1b] hover:underline leading-snug block font-medium"
                            >
                              {author.name}
                            </a>

                            {/* MULTIPLE BOOKS */}
                            {author.books.length > 1 && (

                              <div className="mt-1">

                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedAuthor(
                                      isExpanded
                                        ? null
                                        : author.name
                                    )
                                  }
                                  className="text-[10px] text-gray-500 hover:text-[#9e1b1b] hover:underline"
                                >
                                  {isExpanded ? "− Hide Books" : `+ ${author.books.length} Books`}
                                </button>

                                {isExpanded && (

                                  <ul className="mt-1.5 ml-2 pl-2 border-l border-gray-200 space-y-1.5">

                                    {author.books.map((book) => (

                                      <li key={book.asin}>

                                        <a
                                          href={book.amazonLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-[#9e1b1b] hover:underline leading-snug block"
                                        >
                                          {book.title}
                                        </a>

                                      </li>

                                    ))}

                                  </ul>

                                )}

                              </div>

                            )}

                          </li>
                        );
                      })}

                    </ul>

                  ) : (

                    <p className="text-[10.5px] text-gray-400">
                      No authors available.
                    </p>

                  )}

                </div>

              ))}

            </div>

          ))}

        </div>

        {/* BOTTOM DIVIDER */}
        <hr className="border-t border-dotted border-gray-300 my-7" />

        {/* BOTTOM A-Z NAVIGATION */}
        <div className="text-center py-2">

          <p className="text-[11px] font-bold text-gray-700 mb-1">
            Browse by Author
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1 text-[10.5px]">

            {alphabet.map((letter, index) => (
              <React.Fragment key={letter}>

                <button
                  type="button"
                  onClick={() => handleLetterClick(letter)}
                  className={`cursor-pointer hover:underline ${
                    selectedLetter === letter
                      ? "font-extrabold text-black underline"
                      : "text-[#9e1b1b]"
                  }`}
                >
                  {letter}
                </button>

                {index < alphabet.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}

              </React.Fragment>
            ))}

          </div>

          {selectedLetter && (
            <button
              type="button"
              onClick={handleClearFilter}
              className="mt-3 text-[11px] font-semibold text-[#9e1b1b] hover:underline"
            >
              Show All Authors
            </button>
          )}

        </div>

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

        {/* UPCOMING EVENTS */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

            <h2 className="text-xs font-bold text-[#222]">
              Upcoming Events
            </h2>

          </div>

          <div className="divide-y divide-gray-200">

            {events.map((event) => (

              <div
                key={event.id}
                className="p-3 flex gap-2.5 items-start"
              >

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

                  <p className="text-gray-700 font-medium mb-1">
                    {event.date}
                  </p>

                  <p className="text-gray-600 leading-snug">
                    {event.desc}
                  </p>

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