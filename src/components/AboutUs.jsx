
import React from "react";
import logo from "../assets/Thundersmouth Press Logo.png";

const values = [
  {
    id: 1,
    title: "Our Passion for Literature",
    description:
      "We believe literature has the power to challenge ideas, inspire creativity, and bring different perspectives together. Our passion is rooted in independent publishing and the celebration of distinctive literary voices. From thought-provoking counterculture fiction to expressive poetry, we appreciate books that entertain readers while encouraging them to think beyond familiar boundaries.",
  },
  {
    id: 2,
    title: "Celebrating Diverse Voices",
    description:
      "We recognize the importance of authors who bring fresh perspectives, original ideas, and meaningful experiences into literature. We value creative independence and works that explore culture, society, identity, and the world around us. Every distinctive voice contributes something valuable to the literary landscape.",
  },
  {
    id: 3,
    title: "Connecting Readers with Stories",
    description:
      "Books create connections between writers, readers, cultures, and generations. We aim to make literary discovery an engaging experience by bringing attention to compelling fiction, poetry, music biographies, political publications, and other thought-provoking works that appeal to readers with varied interests.",
  },
  {
    id: 4,
    title: "Supporting Independent Publishing",
    description:
      "Independent publishing creates opportunities for original ideas and unconventional storytelling to reach readers. We appreciate publications that explore subjects beyond mainstream literary trends, including counterculture movements, artistic expression, music history, and social and political perspectives.",
  },
];

const categories = [
  "Counterculture Fiction",
  "Poetry & Literary Works",
  "Music Biographies",
  "Political Publications",
  "Literary Fiction",
  "Cultural & Social Perspectives",
  "Independent Publications",
  "Limited Edition & Collectibles",
];

export default function AboutUs({ setActivePage }) {
  const navigateTo = (page) => {
    if (setActivePage) {
      setActivePage(page);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white border border-gray-300 shadow-lg">

      {/* ======================================
          PAGE HEADING
      ====================================== */}

      <div className="bg-[#e8e6df] border-b border-gray-300 px-5 py-3">

        <h1 className="text-[19px] font-bold text-[#222]">
          About Us
        </h1>

      </div>

      {/* ======================================
          INTRODUCTION SECTION
      ====================================== */}

      <section className="px-5 sm:px-8 py-8 border-b border-gray-200">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Logo */}
          <div className="w-full md:w-[230px] shrink-0 flex items-center justify-center">

            <img
              src={logo}
              alt="Thundersmouth Press Logo"
              className="w-full max-w-[220px] h-auto object-contain"
            />

          </div>

          {/* Introduction */}
          <div className="flex-1">

            <h2 className="text-[22px] font-bold text-[#222] mb-3">
              Welcome to Thundersmouth Press
            </h2>

            <div className="w-16 h-1 bg-[#9e1b1b] mb-4" />

            <p className="text-[13px] text-gray-700 leading-[1.9] mb-4">
              Thundersmouth Press is an independent New York-based
              book publisher recognized for its distinctive
              contribution to the literary world. With a publishing
              identity rooted in creative expression, independent
              thought, and original storytelling, the press is
              associated with a diverse range of literary works,
              including counterculture fiction, poetry, music
              biographies, and political titles.
            </p>

            <p className="text-[13px] text-gray-700 leading-[1.9]">
              Our publishing interests reflect an appreciation
              for books that explore different perspectives,
              challenge conventional ideas, and capture important
              cultural and social experiences. From imaginative
              fiction and expressive poetry to biographies that
              explore the lives and contributions of influential
              musical figures, Thundersmouth Press represents
              a varied and thought-provoking literary tradition.
            </p>

          </div>

        </div>

      </section>

      {/* ======================================
          WHO WE ARE
      ====================================== */}

      <section className="px-5 sm:px-8 py-8 border-b border-gray-200">

        <h2 className="text-[19px] font-bold text-[#222] mb-3">
          Who We Are
        </h2>

        <div className="w-14 h-1 bg-[#9e1b1b] mb-4" />

        <p className="text-[13px] text-gray-700 leading-[1.9] mb-4">
          Thundersmouth Press represents an independent publishing
          tradition that values originality, cultural expression,
          and literature with something meaningful to communicate.
          Based in New York, the publisher has been associated
          with works that explore subjects beyond conventional
          storytelling, bringing attention to counterculture
          fiction, poetry, music history, and political ideas.
          These areas reflect a publishing perspective that
          appreciates creativity, independent thinking, and
          the power of written expression.
        </p>

        <p className="text-[13px] text-gray-700 leading-[1.9]">
          Our literary interests extend across different genres
          and subjects, recognizing that books can entertain,
          educate, question established viewpoints, and preserve
          important cultural experiences. Whether exploring
          imaginative fictional worlds, discovering the work
          of poets, learning about influential musicians, or
          engaging with political and social commentary,
          we celebrate publications that encourage curiosity
          and meaningful engagement with literature.
        </p>

      </section>

      {/* ======================================
          MISSION AND VISION
      ====================================== */}

      <section className="px-5 sm:px-8 py-8 bg-[#faf9f6] border-b border-gray-200">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Mission */}
          <div className="bg-white border border-gray-300 shadow-sm p-5">

            <div className="border-l-4 border-[#9e1b1b] pl-3 mb-4">

              <h2 className="text-[17px] font-bold text-[#222]">
                Our Mission
              </h2>

            </div>

            <p className="text-[12px] text-gray-700 leading-[1.9]">
              Our mission is to celebrate independent publishing
              and the creative voices that enrich the literary
              landscape. We value original storytelling,
              expressive poetry, cultural exploration,
              music biographies, and publications that engage
              with important political and social ideas.
              Through an appreciation of diverse literary
              perspectives, we recognize the importance
              of books that inspire thought, encourage
              discussion, and leave a lasting impression
              on their readers.
            </p>

          </div>

          {/* Vision */}
          <div className="bg-white border border-gray-300 shadow-sm p-5">

            <div className="border-l-4 border-[#9e1b1b] pl-3 mb-4">

              <h2 className="text-[17px] font-bold text-[#222]">
                Our Vision
              </h2>

            </div>

            <p className="text-[12px] text-gray-700 leading-[1.9]">
              Our vision is to celebrate a literary world
              where originality, independent thought,
              and diverse creative perspectives continue
              to thrive. We value publications that explore
              unfamiliar subjects, preserve cultural
              experiences, and introduce readers to
              compelling ideas. By appreciating literature
              across different genres and disciplines,
              we recognize the lasting importance of
              storytelling, artistic expression, and
              meaningful written communication.
            </p>

          </div>

        </div>

      </section>

      {/* ======================================
          WHAT WE BELIEVE
      ====================================== */}

      <section className="px-5 sm:px-8 py-8 border-b border-gray-200">

        <h2 className="text-[19px] font-bold text-[#222] mb-3">
          What We Believe
        </h2>

        <div className="w-14 h-1 bg-[#9e1b1b] mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {values.map((value) => (

            <article
              key={value.id}
              className="
                border
                border-gray-200
                bg-white
                p-5
                hover:bg-[#faf9f6]
                transition-colors
                duration-200
              "
            >

              <h3 className="text-[14px] font-bold text-[#9e1b1b] mb-3">
                {value.title}
              </h3>

              <p className="text-[12px] text-gray-700 leading-[1.8]">
                {value.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* ======================================
          EXPLORE OUR COLLECTION
      ====================================== */}

      <section className="px-5 sm:px-8 py-8 border-b border-gray-200">

        <h2 className="text-[19px] font-bold text-[#222] mb-3">
          Explore Our Literary Collection
        </h2>

        <div className="w-14 h-1 bg-[#9e1b1b] mb-4" />

        <p className="text-[13px] text-gray-700 leading-[1.9] mb-5">
          Literature offers countless ways to explore ideas,
          cultures, experiences, and creative expression.
          Our publishing interests reflect this variety,
          with particular appreciation for counterculture
          fiction, poetry, music biographies, and political
          publications. Each category offers a different
          perspective on the world, giving readers
          opportunities to discover distinctive voices,
          explore important subjects, and engage with
          meaningful literary works.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          {categories.map((category) => (

            <div
              key={category}
              className="flex items-center gap-3 border border-gray-200 bg-[#fafafa] px-4 py-3"
            >

              <span className="text-[#9e1b1b] font-bold">
                ›
              </span>

              <span className="text-[12px] font-semibold text-[#333]">
                {category}
              </span>

            </div>

          ))}

        </div>

        <div className="mt-6">

          <button
            type="button"
            onClick={() => navigateTo("BOOKS")}
            className="
              bg-[#9e1b1b]
              hover:bg-[#7f1515]
              text-white
              text-[12px]
              font-bold
              px-5
              py-2.5
              rounded-sm
              transition-colors
            "
          >
            Explore Our Books
          </button>

        </div>

      </section>

      {/* ======================================
          AUTHORS SECTION
      ====================================== */}

      <section className="px-5 sm:px-8 py-8 bg-[#faf9f6] border-b border-gray-200">

        <h2 className="text-[19px] font-bold text-[#222] mb-3">
          Discover Authors & Creative Voices
        </h2>

        <div className="w-14 h-1 bg-[#9e1b1b] mb-4" />

        <p className="text-[13px] text-gray-700 leading-[1.9] mb-5">
          Every publication begins with an idea and a creative
          voice behind it. Authors bring their individual
          experiences, knowledge, imagination, and perspectives
          into the books they create. From writers exploring
          counterculture and literary fiction to poets,
          musicians, biographers, and commentators,
          we appreciate the contributions that authors
          make to the world of publishing and literature.
          Discover different writers and explore the works
          associated with their names through our author directory.
        </p>

        <button
          type="button"
          onClick={() => navigateTo("AUTHORS")}
          className="
            bg-[#333333]
            hover:bg-[#222222]
            text-white
            text-[12px]
            font-bold
            px-5
            py-2.5
            rounded-sm
            transition-colors
          "
        >
          Browse Our Authors
        </button>

      </section>

      {/* ======================================
          BLOG SECTION
      ====================================== */}

      <section className="px-5 sm:px-8 py-8 border-b border-gray-200">

        <h2 className="text-[19px] font-bold text-[#222] mb-3">
          Insights From Our Blog
        </h2>

        <div className="w-14 h-1 bg-[#9e1b1b] mb-4" />

        <p className="text-[13px] text-gray-700 leading-[1.9] mb-5">
          Literature is part of a wider conversation about
          culture, creativity, history, and society.
          Our blog provides an opportunity to explore
          subjects connected to books, independent publishing,
          poetry, music biographies, counterculture,
          and political literature. Through articles
          and literary features, readers can engage
          with different ideas, discover interesting
          perspectives, and develop a deeper appreciation
          for the written word.
        </p>

        <button
          type="button"
          onClick={() => navigateTo("BLOGS")}
          className="
            bg-[#9e1b1b]
            hover:bg-[#7f1515]
            text-white
            text-[12px]
            font-bold
            px-5
            py-2.5
            rounded-sm
            transition-colors
          "
        >
          Read Our Blog
        </button>

      </section>

      {/* ======================================
          FINAL MESSAGE
      ====================================== */}

      <section className="px-5 sm:px-8 py-10 text-center bg-[#333333]">

        <h2 className="text-[21px] font-bold text-white mb-3">
          Celebrating Independent Voices & Powerful Stories
        </h2>

        <p className="text-[13px] text-gray-200 leading-[1.9] max-w-[650px] mx-auto mb-6">
          At Thundersmouth Press, we appreciate the
          diversity and influence of literature.
          From counterculture fiction and poetry
          to music biographies and political works,
          we celebrate books that offer distinctive
          perspectives and meaningful ideas.
          Every story has the potential to introduce
          readers to something new, challenge
          familiar thinking, and create a lasting
          connection through the power of words.
        </p>

        <button
          type="button"
          onClick={() => navigateTo("BOOKS")}
          className="
            bg-[#9e1b1b]
            hover:bg-[#7f1515]
            text-white
            text-[12px]
            font-bold
            px-6
            py-3
            rounded-sm
            transition-colors
          "
        >
          Discover Books
        </button>

      </section>

      {/* ======================================
          BOTTOM FOOTER
      ====================================== */}

      <div className="px-5 py-3 border-t border-gray-200 bg-[#fafafa]">

        <p className="text-[11px] text-gray-500 text-center">
          Thundersmouth Press — Independent Publishing,
          Literature & the Power of Storytelling.
        </p>

      </div>

    </div>
  );
}
