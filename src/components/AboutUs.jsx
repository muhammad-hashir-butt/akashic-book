import React from "react";
import logo from "../assets/Thundersmouth Press Logo.png";

const values = [
  {
    id: 1,
    title: "Our Passion for Literature",
    description:
      "We believe great stories have the power to entertain, inspire, and connect people. Our passion for literature drives us to celebrate books across different genres, cultures, and perspectives.",
  },
  {
    id: 2,
    title: "Celebrating Diverse Voices",
    description:
      "Literature becomes richer when different perspectives are represented. We value creativity, originality, and the unique experiences that make every author's work meaningful.",
  },
  {
    id: 3,
    title: "Connecting Readers with Stories",
    description:
      "Our goal is to make discovering books an enjoyable experience. Through thoughtfully organized collections, author information, and literary content, we help readers explore stories that match their interests.",
  },
  {
    id: 4,
    title: "Supporting Literary Discovery",
    description:
      "From contemporary fiction and cultural literature to children's stories and independent publications, we celebrate the variety and imagination found throughout the literary world.",
  },
];

const categories = [
  "Literary Fiction",
  "Black Interest",
  "Caribbean Interest",
  "Children's Literature",
  "Latin American Interest",
  "LGBTQIA+ Interest",
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
              Thundersmouth Press is a destination for readers
              who appreciate meaningful stories, imaginative
              writing, and the endless possibilities found
              within literature.
            </p>

            <p className="text-[13px] text-gray-700 leading-[1.9]">
              Our website brings together a wide selection
              of books, authors, and literary subjects,
              helping visitors explore different genres,
              discover interesting titles, and connect
              with the creative world of storytelling.
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
          At Thundersmouth Press, we appreciate the important
          role books play in shaping ideas, preserving
          experiences, and bringing people together.
          Literature provides an opportunity to explore
          unfamiliar worlds, understand different perspectives,
          and discover stories that remain with us long
          after the final page.
        </p>

        <p className="text-[13px] text-gray-700 leading-[1.9]">
          Our literary platform is designed to make book
          discovery simple and engaging. Through our book
          collections, author listings, news, features,
          and blog articles, we provide readers with
          opportunities to explore a broad range of
          literary interests.
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
              Our mission is to encourage literary discovery
              by connecting readers with a diverse selection
              of books, authors, and stories. We aim to
              create an accessible and welcoming space
              where readers can explore literature,
              discover new interests, and celebrate
              the creativity of storytelling.
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
              Our vision is to build a vibrant literary
              destination where stories and ideas can
              be discovered and appreciated. We believe
              literature should inspire curiosity,
              encourage meaningful conversations,
              and introduce readers to perspectives
              that broaden their understanding
              of the world.
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
          Every reader has unique interests, and our
          collection reflects the variety of subjects
          and genres found in literature. Explore
          different literary categories and discover
          titles that capture your imagination.
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
          Behind every book is a creative voice with
          a unique perspective. Our author directory
          helps readers discover writers across
          different genres and explore the works
          associated with their names.
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
          Our blog explores the world of literature,
          writing, publishing, and storytelling.
          Discover thoughtful articles about creative
          writing, independent publishing, reading
          experiences, and the ideas that make
          literature meaningful.
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
          Every Story Begins With Discovery
        </h2>

        <p className="text-[13px] text-gray-200 leading-[1.9] max-w-[650px] mx-auto mb-6">
          At Thundersmouth Press, we celebrate
          literature in all its forms. Whether
          you're discovering a new author,
          exploring a favorite genre, or
          searching for your next great read,
          there's always another story
          waiting to be discovered.
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
          Thundersmouth Press — Celebrating Books,
          Authors & the Power of Storytelling.
        </p>

      </div>

    </div>
  );
}