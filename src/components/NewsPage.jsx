import React, { useState } from "react";

// ======================================
// THUNDERSMOUTH PRESS SERVICES
// ======================================

const services = [
  {
    id: 1,
    title: "Professional Manuscript Editing & Proofreading",
    category: "Editorial Services",
    description:
      "Give your manuscript the attention it deserves with professional editing and proofreading support designed to improve clarity, consistency, and readability.",
    image:
      "https://images.unsplash.com/photo-1610050731821-f58da5e8abc6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    details: [
      "A well-edited manuscript creates a stronger reading experience. Our editorial services focus on helping authors refine their writing while preserving their individual voice and creative vision.",
      "Our editing process can address sentence structure, grammar, punctuation, spelling, readability, consistency, and the overall presentation of your manuscript.",
      "Whether you're preparing a novel, memoir, nonfiction title, or another literary project, thoughtful editing can help transform your draft into a more polished manuscript.",
    ],
    features: [
      "Grammar, spelling, and punctuation review",
      "Sentence clarity and readability improvements",
      "Consistency checks",
      "Copyediting and proofreading support",
      "Editorial feedback and manuscript refinement",
    ],
  },

  {
    id: 2,
    title: "Professional Book Cover Design",
    category: "Design Services",
    description:
      "Create a memorable first impression with a visually appealing book cover that reflects your story, genre, and intended readership.",
    image:
      "https://images.unsplash.com/photo-1591286226007-1f9d5b0b7f35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    details: [
      "Your book cover is often the first thing a potential reader notices. A professionally designed cover helps communicate the tone, theme, and personality of your publication.",
      "Our approach focuses on visual storytelling through thoughtful typography, imagery, color selection, and layout.",
      "From contemporary fiction to memoirs, children's literature, and nonfiction, each genre benefits from a distinct visual presentation.",
    ],
    features: [
      "Custom book cover concepts",
      "Genre-appropriate visual direction",
      "Typography and color selection",
      "Paperback and hardcover cover layouts",
      "E-book cover preparation",
    ],
  },

  {
    id: 3,
    title: "Book Formatting & Interior Layout",
    category: "Design Services",
    description:
      "Prepare your manuscript for publication with clean, consistent, and reader-friendly interior formatting for print and digital editions.",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=85",
    details: [
      "A professionally formatted book creates a comfortable reading experience and gives your publication a polished appearance.",
      "Interior formatting involves more than arranging text on pages. It requires careful attention to margins, spacing, chapter headings, page numbers, and typography.",
      "Different publishing formats may require different layouts. Print books and e-books each have their own technical and presentation requirements.",
    ],
    features: [
      "Paperback interior formatting",
      "Hardcover interior formatting",
      "Chapter heading and typography styling",
      "Page numbering and margin adjustments",
      "Digital reading format preparation",
    ],
  },

  {
    id: 4,
    title: "Self-Publishing Assistance",
    category: "Publishing Services",
    description:
      "Navigate the publishing process with practical guidance and support, from manuscript preparation to publication setup.",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=85",
    details: [
      "Self-publishing gives authors an opportunity to bring their work to readers while making important decisions about their publishing journey.",
      "The process involves multiple stages, including manuscript preparation, design, formatting, metadata, and publication setup.",
      "Thundersmouth Press aims to make the process easier to understand through organized publishing assistance and practical guidance.",
    ],
    features: [
      "Publishing preparation guidance",
      "Book metadata organization",
      "Title and description preparation",
      "Print and digital edition setup support",
      "Publication workflow assistance",
    ],
  },

  {
    id: 5,
    title: "E-Book Publishing & Digital Preparation",
    category: "Publishing Services",
    description:
      "Prepare your book for digital readers with professional e-book formatting and publishing support.",
    image:
      "https://images.unsplash.com/photo-1555631545-9dc21031669b?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    details: [
      "E-books provide readers with a convenient way to discover and enjoy literature across a variety of digital devices.",
      "Preparing a manuscript for electronic publication requires attention to formatting, navigation, readability, and compatibility with digital reading platforms.",
      "Our digital publishing support focuses on helping authors prepare their content for an accessible and enjoyable reading experience.",
    ],
    features: [
      "E-book manuscript preparation",
      "Digital formatting guidance",
      "Table of contents and navigation",
      "E-book cover compatibility",
      "Digital publication setup support",
    ],
  },

  {
    id: 6,
    title: "Book Marketing & Promotion",
    category: "Marketing Services",
    description:
      "Build awareness for your publication with marketing strategies that help introduce your book to potential readers.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=85",
    details: [
      "Publishing a book is an important milestone, but helping readers discover it is another essential part of the journey.",
      "Book marketing focuses on presenting the right message to an appropriate audience through relevant promotional channels.",
      "A thoughtful marketing approach can include author positioning, promotional content, online visibility, and audience engagement.",
    ],
    features: [
      "Book marketing strategy",
      "Promotional content planning",
      "Audience research and positioning",
      "Social media promotional guidance",
      "Book launch campaign planning",
    ],
  },

  {
    id: 7,
    title: "Author Branding & Online Presence",
    category: "Marketing Services",
    description:
      "Develop a recognizable author identity and create a consistent presentation across your online platforms.",
    image:
      "https://images.unsplash.com/photo-1783538480867-246ae630c02f?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    details: [
      "An author's identity extends beyond a single publication. Readers often connect with the person behind the story as well as the book itself.",
      "Author branding brings together your professional biography, visual identity, writing interests, and public presentation.",
      "A consistent online presence can help readers recognize your work and explore your publications more easily.",
    ],
    features: [
      "Author biography development",
      "Author brand positioning",
      "Online profile presentation",
      "Consistent messaging and visual identity",
      "Author visibility planning",
    ],
  },

  {
    id: 8,
    title: "Audiobook Production & Preparation",
    category: "Audio Services",
    description:
      "Explore the possibilities of bringing your written work into audio format with audiobook production and publication preparation.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=85",
    details: [
      "Audiobooks offer a different way for audiences to experience storytelling. Through narration and sound, a written work becomes an engaging listening experience.",
      "Audiobook preparation involves several stages, including narration planning, recording, audio editing, quality checks, and distribution preparation.",
      "Careful production and technical preparation help create an audiobook that presents the author's work clearly and professionally.",
    ],
    features: [
      "Audiobook production planning",
      "Narration preparation",
      "Audio editing and mastering coordination",
      "Audio quality review",
      "Audiobook metadata and publishing preparation",
    ],
  },
];

// ======================================
// SERVICE CATEGORIES
// ======================================

const serviceCategories = [
  "All Services",
  "Editorial Services",
  "Design Services",
  "Publishing Services",
  "Marketing Services",
  "Audio Services",
];

// ======================================
// SERVICE BENEFITS
// ======================================

const benefits = [
  "Professional Presentation",
  "Creative Development",
  "Publishing Guidance",
  "Reader-Focused Design",
  "Author Branding",
  "Digital Publishing Support",
];

// ======================================
// NEWS PAGE COMPONENT
// KEPT SAME NAME TO AVOID APP.JSX ERRORS
// ======================================

export default function NewsPage({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] =
    useState("All Services");

  const [expandedService, setExpandedService] =
    useState(null);

  const [currentPage, setCurrentPage] =
    useState(1);

  const servicesPerPage = 4;

  // ======================================
  // FILTER SERVICES
  // ======================================

  const filteredServices =
    selectedCategory === "All Services"
      ? services
      : services.filter(
          (service) =>
            service.category === selectedCategory
        );

  const totalPages = Math.ceil(
    filteredServices.length / servicesPerPage
  );

  const currentServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  // ======================================
  // CHANGE CATEGORY
  // ======================================

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setExpandedService(null);
  };

  // ======================================
  // EXPAND SERVICE DETAILS
  // ======================================

  const handleMoreDetails = (id) => {
    setExpandedService((previous) =>
      previous === id ? null : id
    );
  };

  // ======================================
  // OPEN SERVICE FROM SIDEBAR
  // ======================================

  const openService = (service) => {
    setSelectedCategory("All Services");

    const serviceIndex = services.findIndex(
      (item) => item.id === service.id
    );

    setCurrentPage(
      Math.floor(serviceIndex / servicesPerPage) + 1
    );

    setExpandedService(service.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">

      {/* ======================================
          LEFT SIDEBAR
      ====================================== */}

      <aside className="w-full lg:w-[225px] shrink-0 space-y-4">

        {/* BOX 1: SERVICES INTRODUCTION */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

            <h2 className="text-xs font-bold text-[#222]">
              Our Services
            </h2>

          </div>

          <div className="p-3">

            <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
              Explore professional publishing,
              editorial, design, and promotional
              services from Thundersmouth Press.
            </p>

            <button
              type="button"
              onClick={() =>
                handleCategoryChange("All Services")
              }
              className="text-[11px] font-bold text-[#9e1b1b] hover:underline"
            >
              View All Services
            </button>

          </div>

        </div>

        {/* BOX 2: SERVICE CATEGORIES */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

            <h2 className="text-xs font-bold text-[#222]">
              Service Categories
            </h2>

          </div>

          <ul className="px-3 py-3 space-y-2">

            {serviceCategories.map((category) => (

              <li key={category}>

                <button
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`
                    text-[12px]
                    text-left
                    hover:underline
                    ${
                      selectedCategory === category
                        ? "font-bold text-[#222]"
                        : "text-[#9e1b1b]"
                    }
                  `}
                >
                  {category}
                </button>

              </li>

            ))}

          </ul>

        </div>

        {/* BOX 3: WHY CHOOSE OUR SERVICES */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

            <h2 className="text-xs font-bold text-[#222]">
              Service Highlights
            </h2>

          </div>

          <ul className="p-3 space-y-2">

            {benefits.map((benefit) => (

              <li
                key={benefit}
                className="flex items-start gap-2 text-[11px] text-gray-700"
              >

                <span className="text-[#9e1b1b] font-bold">
                  ✓
                </span>

                <span>{benefit}</span>

              </li>

            ))}

          </ul>

        </div>

      </aside>

      {/* ======================================
          CENTER: MAIN SERVICES CONTENT
      ====================================== */}

      <section className="flex-1 min-w-0 w-full bg-white border border-gray-300 shadow-lg">

        {/* PAGE HEADING */}
        <div className="px-5 py-4 border-b border-gray-200">

          <h1 className="text-[19px] font-bold text-[#222]">
            Our Publishing Services
          </h1>

          <p className="text-[12px] text-gray-600 mt-1">
            Thundersmouth Press
          </p>

        </div>

        {/* INTRODUCTION */}
        <div className="px-5 py-4 bg-[#faf9f6] border-b border-gray-200">

          <p className="text-[12px] text-gray-700 leading-relaxed">
            Every great book begins with an idea.
            At Thundersmouth Press, we recognize
            the creativity, dedication, and effort
            involved in bringing a manuscript
            to readers.
          </p>

          <p className="text-[12px] text-gray-700 leading-relaxed mt-3">
            Explore our publishing-related services,
            from manuscript editing and book design
            to digital publishing, author branding,
            and promotional support.
          </p>

        </div>

        {/* CATEGORY HEADING */}
        <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between gap-3">

          <h2 className="text-[13px] font-bold text-[#333]">
            {selectedCategory}
          </h2>

          {selectedCategory !== "All Services" && (

            <button
              type="button"
              onClick={() =>
                handleCategoryChange("All Services")
              }
              className="text-[11px] text-[#9e1b1b] font-semibold hover:underline"
            >
              Clear Filter
            </button>

          )}

        </div>

        {/* ======================================
            SERVICES LIST
        ====================================== */}

        <div className="divide-y divide-gray-200">

          {currentServices.map((service) => (

            <article
              key={service.id}
              className="p-5 hover:bg-[#faf9f6] transition-colors duration-200"
            >

              {/* SERVICE MAIN ROW */}
              <div className="flex flex-col sm:flex-row items-start gap-4">

                {/* SERVICE IMAGE */}
                <div className="w-full sm:w-[115px] shrink-0">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full
                      h-[150px]
                      sm:h-[130px]
                      object-cover
                      border
                      border-gray-200
                      shadow-sm
                    "
                    loading="lazy"
                  />

                </div>

                {/* SERVICE INFORMATION */}
                <div className="flex-1 min-w-0">

                  {/* CATEGORY */}
                  <span className="inline-block bg-[#e8e6df] text-[#333] text-[10px] font-semibold px-2 py-1 mb-2">
                    {service.category}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-[15px] font-bold text-[#9e1b1b] leading-snug mb-2">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[12px] text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* MORE DETAILS BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      handleMoreDetails(service.id)
                    }
                    aria-expanded={
                      expandedService === service.id
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-[#9e1b1b]
                      hover:bg-[#7f1515]
                      text-white
                      text-[11px]
                      font-bold
                      px-3
                      py-2
                      rounded-sm
                      transition-colors
                    "
                  >

                    {expandedService === service.id
                      ? "Hide Details"
                      : "More Details"}

                    <span aria-hidden="true">
                      {expandedService === service.id
                        ? "−"
                        : "+"}
                    </span>

                  </button>

                </div>

              </div>

              {/* ======================================
                  EXPANDED SERVICE DETAILS
              ====================================== */}

              {expandedService === service.id && (

                <div className="mt-5 pt-5 border-t border-gray-200">

                  <h4 className="text-[14px] font-bold text-[#222] mb-4">
                    About This Service
                  </h4>

                  <div className="space-y-3">

                    {service.details.map((paragraph, index) => (

                      <p
                        key={index}
                        className="text-[12px] text-gray-700 leading-[1.9]"
                      >
                        {paragraph}
                      </p>

                    ))}

                  </div>

                  {/* FEATURES */}
                  <div className="mt-5 bg-[#faf9f6] border border-gray-200 p-4">

                    <h4 className="text-[13px] font-bold text-[#222] mb-3">
                      What's Included
                    </h4>

                    <ul className="space-y-2">

                      {service.features.map((feature) => (

                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[12px] text-gray-700"
                        >

                          <span className="text-[#9e1b1b] font-bold">
                            ✓
                          </span>

                          <span>{feature}</span>

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              )}

            </article>

          ))}

        </div>

        {/* ======================================
            PAGINATION
        ====================================== */}

        {totalPages > 1 && (

          <div className="px-5 py-4 border-t border-gray-200 flex flex-wrap items-center justify-center gap-2">

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                type="button"
                onClick={() => {
                  setCurrentPage(page);
                  setExpandedService(null);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className={`
                  px-3
                  py-1.5
                  text-[12px]
                  border
                  ${
                    currentPage === page
                      ? "bg-[#9e1b1b] text-white border-[#9e1b1b]"
                      : "bg-white text-[#9e1b1b] border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                {page}
              </button>

            ))}

          </div>

        )}

        {/* BOTTOM INFORMATION */}
        <div className="px-5 py-3 border-t border-gray-200 bg-[#fafafa]">

          <p className="text-[11px] text-gray-500">
            Showing {currentServices.length} of{" "}
            {filteredServices.length} publishing services.
          </p>

        </div>

      </section>

      {/* ======================================
          RIGHT SIDEBAR
      ====================================== */}

      <aside className="w-full lg:w-[235px] shrink-0 space-y-4">

        {/* BOX 1: POPULAR SERVICES */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

            <h2 className="text-xs font-bold text-[#222]">
              Popular Services
            </h2>

          </div>

          <div className="p-3">

            <ul className="space-y-3">

              {[
                services[0],
                services[1],
                services[2],
                services[3],
                services[5],
              ].map((service) => (

                <li
                  key={service.id}
                  className="border-b border-gray-100 pb-2 last:border-0"
                >

                  <button
                    type="button"
                    onClick={() =>
                      openService(service)
                    }
                    className="text-[11px] font-semibold text-[#9e1b1b] hover:underline text-left leading-snug"
                  >
                    {service.title}
                  </button>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* BOX 2: PUBLISHING PROCESS */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

            <h2 className="text-xs font-bold text-[#222]">
              Publishing Process
            </h2>

          </div>

          <div className="p-3 space-y-4">

            <div>

              <h3 className="text-[12px] font-bold text-[#9e1b1b] mb-1">
                Manuscript Preparation
              </h3>

              <p className="text-[11px] text-gray-700 leading-relaxed">
                Editing, proofreading, and editorial
                refinement to prepare your manuscript.
              </p>

            </div>

            <div className="border-t border-gray-200 pt-3">

              <h3 className="text-[12px] font-bold text-[#9e1b1b] mb-1">
                Design & Formatting
              </h3>

              <p className="text-[11px] text-gray-700 leading-relaxed">
                Book cover development and interior
                formatting for print or digital editions.
              </p>

            </div>

            <div className="border-t border-gray-200 pt-3">

              <h3 className="text-[12px] font-bold text-[#9e1b1b] mb-1">
                Publishing Preparation
              </h3>

              <p className="text-[11px] text-gray-700 leading-relaxed">
                Organizing the materials and information
                required for publication.
              </p>

            </div>

            <div className="border-t border-gray-200 pt-3">

              <h3 className="text-[12px] font-bold text-[#9e1b1b] mb-1">
                Marketing & Visibility
              </h3>

              <p className="text-[11px] text-gray-700 leading-relaxed">
                Exploring promotional strategies
                and opportunities to connect
                with potential readers.
              </p>

            </div>

          </div>

        </div>

        {/* BOX 3: THUNDERSMOUTH PRESS */}
        <div className="bg-white border border-gray-300 shadow-md">

          <div className="bg-[#333333] border-b-2 border-[#9e1b1b] px-3 py-3">

            <h2 className="text-[13px] font-bold text-white">
              Thundersmouth Press
            </h2>

            <p className="text-[10px] text-gray-300 mt-1">
              Publishing • Creativity • Literature
            </p>

          </div>

          <div className="p-3">

            <h3 className="text-[12px] font-bold text-[#222] mb-2">
              Your Publishing Journey
            </h3>

            <p className="text-[11px] text-gray-700 leading-relaxed">
              Discover publishing-related services
              designed to support different stages
              of your creative journey, from
              preparing your manuscript to
              presenting your finished book.
            </p>

          </div>

        </div>

      </aside>

    </div>
  );
}