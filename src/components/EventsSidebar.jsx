import React from "react";

// ======================================
// THUNDERSMOUTH PRESS BLOG CONTENT
// ======================================

const latestBlogs = [
  {
    id: 1,
    title: "The Power of Storytelling in Modern Literature",
    category: "Writing & Creativity",
    date: "November 18, 2026",
    desc:
      "Explore how storytelling connects people, preserves experiences, and inspires imagination through literature.",
  },
  {
    id: 2,
    title: "Why Independent Publishing Matters More Than Ever",
    category: "Publishing Insights",
    date: "November 15, 2026",
    desc:
      "Discover how independent publishing creates opportunities for diverse voices, creativity, and original storytelling.",
  },
  {
    id: 3,
    title: "How Reading Fiction Expands Our Imagination",
    category: "Reading & Literature",
    date: "November 12, 2026",
    desc:
      "Learn how fiction introduces new perspectives, encourages curiosity, and creates meaningful reading experiences.",
  },
];

const featuredBlogs = [
  {
    id: 1,
    title: "The Art of Creating Memorable Fictional Characters",
    category: "Writing & Creativity",
    desc:
      "Explore the essential elements of character development and discover what makes fictional personalities unforgettable.",
  },
  {
    id: 2,
    title: "The Importance of Diversity in Literature",
    category: "Literary Culture",
    desc:
      "A closer look at how different cultures, identities, and perspectives enrich the literary world.",
  },
];

export default function EventsSidebar() {
  return (
    <aside className="w-full lg:w-[235px] shrink-0 space-y-4">

      {/* ======================================
          BOX 1: THUNDERSMOUTH PRESS BLOG
      ====================================== */}

      <div className="bg-white border border-gray-300 shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#333333] border-b-2 border-[#9e1b1b] px-3 py-3">

          <h2 className="text-[13px] font-bold text-white">
            Thundersmouth Press Blog
          </h2>

          <p className="text-[10px] text-gray-300 mt-1">
            Stories • Ideas • Literary Insights
          </p>

        </div>

        {/* Blog Introduction */}
        <div className="p-3">

          <h3 className="text-[13px] font-bold text-[#222] mb-2">
            Explore the World of Literature
          </h3>

          <p className="text-[11px] text-gray-700 leading-relaxed">
            Discover thoughtful articles about writing,
            storytelling, independent publishing, and
            literary culture.
          </p>

          <p className="text-[11px] text-gray-700 leading-relaxed mt-2">
            From creative inspiration to publishing
            insights, explore ideas that celebrate
            the power of books and stories.
          </p>

          <div className="mt-3 border-t border-gray-200 pt-3">

            <p className="text-[11px] font-semibold text-[#9e1b1b]">
              Fresh Perspectives on Writing & Reading
            </p>

          </div>

        </div>

      </div>

      {/* ======================================
          BOX 2: LATEST BLOG ARTICLES
      ====================================== */}

      <div className="bg-white border border-gray-300 shadow-md">

        {/* Heading */}
        <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

          <h2 className="text-sm font-bold text-[#222]">
            Latest Blog Articles
          </h2>

        </div>

        {/* Blog List */}
        <div className="divide-y divide-gray-200">

          {latestBlogs.map((blog) => (

            <article
              key={blog.id}
              className="p-3 hover:bg-[#faf9f6] transition-colors duration-200"
            >

              {/* Category */}
              <p className="text-[10px] text-gray-500 font-semibold mb-1">
                {blog.category}
              </p>

              {/* Blog Title */}
              <h3 className="text-[12px] font-bold text-[#9e1b1b] leading-snug mb-2">
                {blog.title}
              </h3>

              {/* Date */}
              <p className="text-[10px] text-gray-500 mb-2">
                {blog.date}
              </p>

              {/* Description */}
              <p className="text-[11px] text-gray-700 leading-relaxed">
                {blog.desc}
              </p>

            </article>

          ))}

        </div>

      </div>

      {/* ======================================
          BOX 3: FEATURED BLOG ARTICLES
      ====================================== */}

      <div className="bg-white border border-gray-300 shadow-md">

        {/* Heading */}
        <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

          <h2 className="text-sm font-bold text-[#222]">
            Featured Articles
          </h2>

        </div>

        {/* Articles */}
        <div className="divide-y divide-gray-200">

          {featuredBlogs.map((blog) => (

            <article
              key={blog.id}
              className="p-3 hover:bg-[#faf9f6] transition-colors duration-200"
            >

              <p className="text-[10px] text-gray-500 font-semibold mb-1">
                {blog.category}
              </p>

              <h3 className="text-[12px] font-bold text-[#9e1b1b] leading-snug mb-2">
                {blog.title}
              </h3>

              <p className="text-[11px] text-gray-700 leading-relaxed">
                {blog.desc}
              </p>

            </article>

          ))}

        </div>

      </div>

    </aside>
  );
}