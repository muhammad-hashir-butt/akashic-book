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

const authorsByLetter = {
  A: [
    "Chris Abani", "Salar Abdoh", "Sasha Abramsky", "Ryan Adams", "John Adams",
    "Thomas Adcock", "D.M. Aderibigbe", "Yassin Adnan", "Lalo Alcaraz", "Preston L. Allen",
    "Lisa Allen-Agostini", "Marti Andersen", "David Andreas", "Robert Antoni",
    "Frank Appel", "Robert Arellano", "Janine Armin", "Nic Arp", "Nuzha Artgas (Illustrator)",
    "Gale Augusta", "Maria Auxiliadora Álvarez"
  ],
  B: [
    "John Bacigalupi", "Brian Balar", "Colette Bancroft", "Amiri Baraka", "Eric Barnes (song lyrics)",
    "Justine Bateman", "Hookup Sites and the New Culture of Casual Intimacy", "Des Baas (song lyrics by)",
    "Yossi Balin", "Jennifer Balle", "Tony Ballotto", "Arthur N. Becker", "Katherine Blackmore (Illustrator)",
    "Lucy Jane Bledsoe", "Lawrence Block", "Amy Bloom", "Daniel Bloom", "Susan Blumberg-Kason",
    "Julie Boettcher", "Princess Booker", "Charles Bowden", "Meryl Branch-McTiernan",
    "Timothy Brandorff", "Laurel Bratt", "Susie Bright", "Susan Brind", "Carolyn M. Brown",
    "Katrina Drownlee", "Ken Bruen", "Bill Buchanan", "Daniel Buckman", "Johnny Byrd", "Bobby Byrd"
  ],
  C: [
    "Charlotte Caffey (song lyrics)", "Laureen F. Cantwell", "Jason Carney", "Angela Maria Carter",
    "Molianda Cassidy", "Jonathan Castle", "Colin Channer", "Stephanie Cha", "Daniel Chavarría",
    "Eric Chen", "Lonely Christopher", "Chris Clair", "Les Claypool", "Jason Cohen",
    "Jackie Collins", "Curt Colbert", "Alice Coltrane", "John Coltrane", "Joshua Coombes",
    "T Cooper", "Dennis Cooper", "Arnaldo Correa", "Ricardo Cortés", "Sarah Cortez",
    "Mary Cotton", "Lauren Coyle Rosen", "Larry Crane", "Elizabeth Crane", "Steve Cropper (song lyrics)"
  ],
  D: [
    "Chuck D", "D", "John Dale", "Trina Dalton", "Nana-Ama Danquah",
    "Edwidge Danticat", "Kwame Dawes", "Hervé Delouche", "Barbara DeMarco-Barrett",
    "John Densmore", "René Depestre", "Debra Di Blasi", "Cinapiera Di Donato",
    "Matt Diehl", "Ani DiFranco", "Doctor Dread", "David Duchovny", "Tananarive Due",
    "Michel Dufresne", "Kate Durbin"
  ],
  E: [
    "Amatortooro Eda", "Carl-Michael Edenborg", "Zee Edgell", "Joe Eichner",
    "Sam Eichner", "Maayan Eitan", "Garfield Ellis", "Eric Erlandson",
    "Wolf Erlbruch", "Anthony Erwin", "David Espinosa", "Maggie Estep",
    "Ali Eteraz", "Bernardine Evaristo", "Percival Everett"
  ],
  F: [
    "Cédric Fabre", "M. Chris Fabricant", "Pete Fallico", "C.J. Farley",
    "David N. Farr", "Tom Fassbender", "Alex Felder", "Gino Fellara (song lyrics)",
    "Jacques Filippi", "Alexia Flesig", "Curdella Forbes", "Mazarati Fox",
    "Black Francis (song lyrics)", "Tom Franklin", "Shelly-Ann Fraser-Pryce",
    "John Freeman", "Cian S. Friedman", "Rick Fridberg"
  ],
  G: [
    "Michelle Gadsden-Williams", "Eric Gamalinda", "Garbage", "Robbito Garcia",
    "Cristina García", "Feryal Ali Gauhar", "Gina Gershon", "Nelson George",
    "Kathleen George", "Gina Gershon", "Chris Gibson", "Chris Against Boys",
    "Gavin Gilmore", "Allison Glock-Cooper", "John Gluck", "Victor Goldberg",
    "Danny Goldberg", "Orestes González", "Ariel Gore", "Julia Gourley",
    "James Grady", "Keir Graff", "Pat Graham", "Caleb Graves", "Robert Greenwald",
    "Chris Griggs", "William Griffin (song lyrics)"
  ],
  H: [
    "Jessica Hagedorn", "Pete Hamill", "Danica Hamilton", "Theodore Hamm",
    "Michael Hann", "Karen Harryman", "Maryelizabeth Hart", "Adam Haslett",
    "Tom De Haven", "Ralph Helbusch", "Hopeton Hay", "Kevin Hayden",
    "Lee Hazlewood (song lyrics)", "J.C. Hazlewood", "William Heffernan",
    "Christopher Helms", "Tim Hennessy", "Sean Keith Henry", "Garth Hey",
    "Robyn Hitchcock", "Shannon Holmes", "Ann Hood", "Natasha Howard",
    "Eli Howell", "Brigid Hughes", "Iman Humaydan"
  ],
  I: [
    "Lagna Rodriguez Iglesias", "Nallah Fpami Imojo", "Michael Imperioli", "Milorad Ivanović"
  ],
  J: [
    "Maxim Jakubowski", "Marion James", "Ap Jablowska (Illustrator)", "Gabriela Jauregui",
    "Thomas Jefferson", "Mark Jenkins", "The Jesus Lizard", "Penn Jillette",
    "Greg Johnson", "Albert 'Prodigy' Johnson", "Tayari Jones", "Kaylie Jones",
    "James Jones", "Carl-Philippe Juste"
  ],
  K: [
    "Kwan", "Yuri Kapralov", "Jan Karlsen", "Jamel Keane", "Mary Karr",
    "Ted Kessler", "Peter Kimani", "Jamaica Kincaid", "James R. Kincaid",
    "Jon King", "Martha Kinney", "Stephen Kitsakos", "Brad Klausen",
    "Robert Knightly", "Montague Kobbé", "D.M. Kogan", "Ron Kovic",
    "Bruce Kramer", "Governor Madeleine M. Kunin"
  ],
  L: [
    "Robin Laananen", "Bill Landauer", "Andrea Landauer", "Nathan Larson",
    "Michael Lauenstein", "Des Lavender", "David Lawson", "Charles Henri Lavielle",
    "Helene Lee", "Caroline Leavitt", "Felicia Luna Lemus", "Jonathan Lethem",
    "Marianne Leone", "S.J. Levine", "Miles Marshall Lewis", "Laura Lippman",
    "Adriana V. López", "Lydia Lunch", "Dennis Lyxzén"
  ],
  M: [
    "E. Ethelbert Miller", "Carol Mitchel", "Walter Mosley", "Fay Myddelton"
  ],
  N: [
    "Elizabeth Nunez", "Lydia Millet", "Nadia Owusu"
  ],
  O: [
    "Stewart O'Nan", "Joyce Carol Oates", "Daniel José Older"
  ],
  P: [
    "George Pelecanos", "Richard Price", "Francine Prose"
  ],
  Q: [
    "Anna Quindlen", "Ernesto Quiñonez"
  ],
  R: [
    "S.J. Rozan", "Salman Rushdie", "Reed Farrel Coleman"
  ],
  S: [
    "Jonathan Santlofer", "Maggie Smith", "Sonnenzimmer"
  ],
  T: [
    "Kira Tucker", "Lynne Tillman", "Jerry Thompson"
  ],
  U: [
    "Chase Unger", "Luis Alberto Urrea"
  ],
  V: [
    "V.V. Ganeshananthan", "Abraham Verghese"
  ],
  W: [
    "Alex Wheatle", "Cornell Woolrich", "Don Winslow"
  ],
  X: [
    "Xinran"
  ],
  Y: [
    "Tiphanie Yanique", "Curtis Sittenfeld"
  ],
  Z: [
    "Helen Zia", "Benjamin Zephaniah"
  ],
};

const alphabet = Object.keys(authorsByLetter);

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

// Group letters into rows of 4 for clean horizontal dividers
const letterGroups = [];
for (let i = 0; i < alphabet.length; i += 4) {
  letterGroups.push(alphabet.slice(i, i + 4));
}

export default function AuthorsPage({ setActivePage }) {
  const [selectedLetter, setSelectedLetter] = useState("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    const el = document.getElementById(`author-group-${letter}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            <li>
              <button
                onClick={() => setActivePage("BOOKS")}
                className="text-[#9e1b1b] hover:underline cursor-pointer"
              >
                Full Catalog
              </button>
            </li>
            <li className="text-gray-800 font-semibold">
              &raquo; List of Authors
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
                  onClick={() => setActivePage("BOOKS")}
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
                onClick={() => setActivePage("BOOKS")}
                className={`text-[#9e1b1b] hover:underline cursor-pointer ${tag.size}`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

      </aside>

      {/* CENTER WHITE CONTENT: Browse by Author A-Z Directory */}
      <section className="flex-1 bg-white p-5 shadow-lg border border-gray-300 w-full">
        
        {/* Top Browse by Author A-Z Bar */}
        <div className="text-center py-2 mb-6">
          <p className="text-[11px] font-bold text-gray-700 mb-1">
            Browse by Author
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1 text-[10.5px]">
            {alphabet.map((letter, idx) => (
              <React.Fragment key={letter}>
                <button
                  onClick={() => handleLetterClick(letter)}
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

        {/* Alphabetical 4-Column Rows */}
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
                <div key={letter} id={`author-group-${letter}`}>
                  <h3 className="text-xs font-bold text-gray-800 mb-2">
                    {letter}
                  </h3>
                  <ul className="space-y-0.5 text-[10.5px]">
                    {authorsByLetter[letter].map((author, index) => (
                      <li key={`${letter}-${index}`}>
                        <a
                          href={`#author-${author.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                          className="text-[#9e1b1b] hover:underline leading-snug block"
                        >
                          {author}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

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