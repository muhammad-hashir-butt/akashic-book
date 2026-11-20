import React, { useState } from "react";

// ======================================
// THUNDERSMOUTH PRESS BLOG ARTICLES
// ======================================

const blogPosts = [
  {
    id: 1,
    title: "The Power of Storytelling in Modern Literature",
    category: "Writing & Creativity",
    date: "November 18, 2026",
    excerpt:
      "Stories have always played an important role in connecting people, preserving experiences, and inspiring imagination.",
    content: [
      "Storytelling is one of the oldest and most meaningful forms of human expression. Through stories, people share experiences, explore emotions, and discover perspectives different from their own.",

      "In modern literature, storytelling continues to evolve. Writers experiment with narrative structures, explore complex characters, and introduce readers to experiences that challenge familiar ways of thinking.",

      "What makes a story memorable is not simply its plot. The most powerful stories create emotional connections. They allow readers to recognize parts of themselves in fictional characters and unfamiliar situations.",

      "At Thundersmouth Press, we celebrate the creativity and imagination that make literature meaningful. Every story offers an opportunity to discover something new about the world and ourselves.",
    ],
  },

  {
    id: 2,
    title: "Why Independent Publishing Matters More Than Ever",
    category: "Publishing Insights",
    date: "November 15, 2026",
    excerpt:
      "Independent publishing continues to create opportunities for diverse voices, fresh perspectives, and unconventional storytelling.",
    content: [
      "The publishing industry has changed significantly over the years. Today, independent publishing plays an important role in introducing new voices and creative ideas to readers.",

      "Independent publishing gives writers opportunities to explore subjects, genres, and storytelling approaches that may fall outside traditional commercial expectations.",

      "This creative freedom contributes to a richer literary landscape. Readers can discover different cultural perspectives, experimental fiction, personal memoirs, and new approaches to familiar themes.",

      "The future of publishing depends on creativity, accessibility, and meaningful connections between writers and readers.",

      "Thundersmouth Press values the diversity of literature and the importance of helping readers explore a broad world of stories.",
    ],
  },

  {
    id: 3,
    title: "How Reading Fiction Expands Our Imagination",
    category: "Reading & Literature",
    date: "November 12, 2026",
    excerpt:
      "Fiction invites readers into unfamiliar worlds while encouraging curiosity, creativity, and emotional understanding.",
    content: [
      "Reading fiction is more than a form of entertainment. It is an opportunity to experience different places, personalities, and possibilities through the imagination.",

      "A well-written novel can transport readers into another historical period, introduce them to unfamiliar cultures, or explore situations that would be impossible in everyday life.",

      "Fiction also encourages readers to consider different motivations and emotional experiences. By following characters through challenges and decisions, readers can reflect on relationships, personal growth, and human behavior.",

      "Whether someone enjoys literary fiction, mystery, fantasy, or contemporary drama, every genre offers its own opportunities for discovery.",

      "The beauty of fiction lies in its ability to transform words into experiences that remain meaningful long after the final page.",
    ],
  },

  {
    id: 4,
    title: "The Art of Creating Memorable Fictional Characters",
    category: "Writing & Creativity",
    date: "November 9, 2026",
    excerpt:
      "Memorable characters give stories emotional depth and help readers form lasting connections with literature.",
    content: [
      "Characters are often the emotional foundation of a great story. Readers may forget individual events in a novel, but they frequently remember the characters who made them feel something.",

      "A compelling character needs more than an interesting appearance or personality. Strong characters have motivations, weaknesses, conflicts, and goals that influence their decisions.",

      "Writers can create believable characters by considering their backgrounds, personal relationships, fears, and ambitions.",

      "Character development is equally important. As events unfold, characters should respond to challenges in ways that reveal their personalities and encourage meaningful growth.",

      "Ultimately, memorable fictional characters remind readers of the complexity of real people. Their struggles, successes, and transformations bring stories to life.",
    ],
  },

  {
    id: 5,
    title: "The Importance of Diversity in Literature",
    category: "Literary Culture",
    date: "November 6, 2026",
    excerpt:
      "Literature becomes more meaningful when it reflects different cultures, identities, experiences, and perspectives.",
    content: [
      "Books offer readers a window into the experiences of people from different backgrounds. Through literature, readers can encounter traditions, histories, and viewpoints they may not experience in everyday life.",

      "Diversity in storytelling introduces a wider variety of characters, themes, and cultural perspectives.",

      "It also allows readers to find stories that reflect their own identities and personal experiences.",

      "When literature includes a broad range of voices, it creates opportunities for understanding, conversation, and discovery.",

      "At Thundersmouth Press, we believe that exploring different literary perspectives helps make reading a more meaningful and rewarding experience.",
    ],
  },

  {
    id: 6,
    title: "What Makes a Great Mystery Novel?",
    category: "Genres & Trends",
    date: "November 3, 2026",
    excerpt:
      "From clever clues to unexpected revelations, mystery fiction keeps readers engaged through curiosity and suspense.",
    content: [
      "Mystery novels have captivated readers for generations. Their appeal often comes from the opportunity to solve a puzzle alongside the characters.",

      "A compelling mystery begins with an intriguing question. An unexplained event, hidden secret, or suspicious situation creates curiosity and encourages readers to continue exploring the story.",

      "Strong mystery writing also depends on carefully placed clues. These details help create an engaging investigation while allowing readers to develop their own theories.",

      "Suspense, pacing, and character development are equally important. Readers should care about the people involved and understand the consequences of uncovering the truth.",

      "The most satisfying mysteries provide conclusions that feel surprising yet believable, bringing together important details introduced throughout the story.",
    ],
  },

  {
    id: 7,
    title: "The Future of Digital Reading and E-Books",
    category: "Publishing Insights",
    date: "October 30, 2026",
    excerpt:
      "Digital reading has introduced new ways for readers to access literature and discover stories across different genres.",
    content: [
      "Technology has transformed the way people discover and enjoy books. Digital reading platforms allow readers to carry extensive personal libraries on phones, tablets, and dedicated e-readers.",

      "One important benefit of digital reading is convenience. Readers can access different genres, explore new authors, and continue reading while traveling or commuting.",

      "Digital books can also provide accessibility features such as adjustable text sizes and display settings.",

      "Despite these developments, printed books continue to hold a special place for many readers who appreciate the physical experience of reading.",

      "Rather than replacing traditional books entirely, digital reading offers another way for literature to reach audiences.",
    ],
  },

  {
    id: 8,
    title: "Why Short Stories Deserve More Attention",
    category: "Reading & Literature",
    date: "October 27, 2026",
    excerpt:
      "Short fiction proves that meaningful storytelling does not always require hundreds of pages.",
    content: [
      "Short stories demonstrate the remarkable power of concise storytelling. Within a limited number of pages, writers can introduce memorable characters, build atmosphere, and explore meaningful themes.",

      "Unlike longer novels, short stories often focus on a particular moment, conflict, or realization.",

      "This concentrated approach allows writers to experiment with language, structure, and narrative perspective.",

      "For readers, short fiction offers opportunities to discover complete literary experiences during shorter reading sessions.",

      "A powerful short story can leave a lasting impression, proving that the emotional impact of literature is not determined by its length.",
    ],
  },
];

// ======================================
// BLOG CATEGORIES
// ======================================

const categories = [
  "All Blogs",
  "Writing & Creativity",
  "Publishing Insights",
  "Reading & Literature",
  "Literary Culture",
  "Genres & Trends",
];

export default function Blogspage({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState("All Blogs");
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4;

  // Filter Blogs
  const filteredBlogs =
    activeCategory === "All Blogs"
      ? blogPosts
      : blogPosts.filter(
          (blog) => blog.category === activeCategory
        );

  // Pagination
  const totalPages = Math.ceil(
    filteredBlogs.length / postsPerPage
  );

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Category Selection
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setExpandedBlog(null);
  };

  // Open Full Blog
  const handleReadMore = (id) => {
    setExpandedBlog((previous) =>
      previous === id ? null : id
    );
  };

  // Navigate to a Blog
  const handleBlogSelect = (blog) => {
    const category =
      activeCategory === "All Blogs"
        ? "All Blogs"
        : blog.category;

    if (activeCategory !== category) {
      setActiveCategory(category);
    }

    const matchingPosts =
      category === "All Blogs"
        ? blogPosts
        : blogPosts.filter(
            (post) => post.category === category
          );

    const index = matchingPosts.findIndex(
      (post) => post.id === blog.id
    );

    setCurrentPage(
      Math.floor(index / postsPerPage) + 1
    );

    setExpandedBlog(blog.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">

      <div className="flex flex-col lg:flex-row items-start gap-4">

        {/* ======================================
            LEFT SIDEBAR
        ====================================== */}

        <aside className="w-full lg:w-[225px] shrink-0 space-y-4">

          {/* Blog Navigation */}
          <div className="bg-white border border-gray-300 shadow-md">

            <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
              <h2 className="text-sm font-bold text-[#222]">
                Blogs
              </h2>
            </div>

            <div className="p-3">

              <button
                type="button"
                onClick={() =>
                  handleCategoryChange("All Blogs")
                }
                className="text-[12px] font-semibold text-[#9e1b1b] hover:underline"
              >
                All Blog Articles
              </button>

              <p className="mt-3 text-[11px] text-gray-600 leading-relaxed">
                Explore writing advice, publishing insights,
                literary discussions, and perspectives on
                storytelling from Thundersmouth Press.
              </p>

            </div>

          </div>

          {/* Categories */}
          <div className="bg-white border border-gray-300 shadow-md">

            <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
              <h2 className="text-sm font-bold text-[#222]">
                Blog Categories
              </h2>
            </div>

            <ul className="p-3 space-y-2">

              {categories.map((category) => (

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
                        activeCategory === category
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

          {/* About Blog */}
          <div className="bg-white border border-gray-300 shadow-md">

            <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">
              <h2 className="text-sm font-bold text-[#222]">
                About Our Blog
              </h2>
            </div>

            <div className="p-3 text-[11px] text-gray-700 leading-relaxed">

              <p>
                The Thundersmouth Press blog explores
                the world of literature, creativity,
                reading, and independent publishing.
              </p>

              <p className="mt-2">
                Discover thoughtful articles and
                fresh perspectives for readers,
                writers, and literature enthusiasts.
              </p>

            </div>

          </div>

        </aside>

        {/* ======================================
            MAIN BLOG CONTENT
        ====================================== */}

        <main className="flex-1 min-w-0 w-full bg-white border border-gray-300 shadow-lg">

          {/* Heading */}
          <div className="px-5 py-4 border-b border-gray-200">

            <h1 className="text-[20px] font-bold text-[#222]">
              Thundersmouth Press Blog
            </h1>

            <p className="text-[12px] text-gray-600 mt-1">
              Insights, Ideas & Stories from the World of Literature
            </p>

          </div>

          {/* Intro */}
          <div className="px-5 py-4 border-b border-gray-200 bg-[#faf9f6]">

            <p className="text-[12px] text-gray-700 leading-relaxed">
              Welcome to the Thundersmouth Press Blog.
              Explore engaging articles about storytelling,
              writing techniques, publishing, literary
              culture, and the joy of reading.
            </p>

          </div>

          {/* Current Category */}
          <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between gap-3">

            <h2 className="text-[13px] font-bold text-[#333]">
              {activeCategory === "All Blogs"
                ? "Latest Blog Articles"
                : activeCategory}
            </h2>

            <span className="text-[11px] text-gray-500">
              {filteredBlogs.length} Articles
            </span>

          </div>

          {/* Blog Articles */}
          <div className="divide-y divide-gray-200">

            {currentBlogs.map((blog) => (

              <article
                key={blog.id}
                className="px-5 py-5 hover:bg-[#faf9f6] transition-colors duration-200"
              >

                {/* Category */}
                <div className="mb-2">

                  <span className="inline-block bg-[#e8e6df] text-[#333] text-[10px] font-semibold px-2 py-1">
                    {blog.category}
                  </span>

                </div>

                {/* Blog Title */}
                <h3 className="text-[17px] font-bold leading-snug mb-2">

                  <button
                    type="button"
                    onClick={() =>
                      handleReadMore(blog.id)
                    }
                    className="text-[#9e1b1b] hover:underline text-left"
                  >
                    {blog.title}
                  </button>

                </h3>

                {/* Date */}
                <p className="text-[11px] text-gray-500 mb-3">
                  Published on {blog.date}
                </p>

                {/* Excerpt */}
                <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
                  {blog.excerpt}
                </p>

                {/* Expanded Blog Content */}
                {expandedBlog === blog.id && (

                  <div className="mt-4 mb-4 space-y-4 border-t border-gray-200 pt-4">

                    {blog.content.map((paragraph, index) => (

                      <p
                        key={index}
                        className="text-[12px] text-gray-700 leading-[1.8]"
                      >
                        {paragraph}
                      </p>

                    ))}

                  </div>

                )}

                {/* Read More Button */}
                <button
                  type="button"
                  onClick={() =>
                    handleReadMore(blog.id)
                  }
                  className="
                    inline-flex
                    items-center
                    gap-1
                    bg-[#9e1b1b]
                    hover:bg-[#7f1515]
                    text-white
                    text-[11px]
                    font-semibold
                    px-3
                    py-2
                    rounded-sm
                    transition-colors
                  "
                >

                  {expandedBlog === blog.id
                    ? "Read Less"
                    : "Read More"}

                  <span aria-hidden="true">
                    {expandedBlog === blog.id ? "↑" : "→"}
                  </span>

                </button>

              </article>

            ))}

          </div>

          {/* Pagination */}
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
                    setExpandedBlog(null);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className={`
                    px-3 py-1.5
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

          {/* Bottom Footer */}
          <div className="px-5 py-3 border-t border-gray-200 bg-[#fafafa]">

            <p className="text-[11px] text-gray-500">
              Showing {currentBlogs.length} of{" "}
              {filteredBlogs.length} blog articles.
            </p>

          </div>

        </main>

        {/* ======================================
            RIGHT SIDEBAR
        ====================================== */}

        <aside className="w-full lg:w-[220px] shrink-0 space-y-4">

          {/* Latest Articles */}
          <div className="bg-white border border-gray-300 shadow-md">

            <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

              <h2 className="text-sm font-bold text-[#222]">
                Latest Articles
              </h2>

            </div>

            <ul className="p-3 space-y-3">

              {blogPosts.slice(0, 5).map((blog) => (

                <li
                  key={blog.id}
                  className="border-b border-gray-100 pb-2 last:border-0"
                >

                  <button
                    type="button"
                    onClick={() =>
                      handleBlogSelect(blog)
                    }
                    className="text-[11px] font-semibold text-[#9e1b1b] hover:underline text-left leading-snug"
                  >
                    {blog.title}
                  </button>

                  <p className="text-[10px] text-gray-500 mt-1">
                    {blog.date}
                  </p>

                </li>

              ))}

            </ul>

          </div>

          {/* Featured Articles */}
          <div className="bg-white border border-gray-300 shadow-md">

            <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

              <h2 className="text-sm font-bold text-[#222]">
                Featured Articles
              </h2>

            </div>

            <div className="p-3 space-y-4">

              {[
                blogPosts[1],
                blogPosts[3],
                blogPosts[4],
              ].map((blog) => (

                <div
                  key={blog.id}
                  className="border-b border-gray-200 pb-3 last:border-0"
                >

                  <button
                    type="button"
                    onClick={() =>
                      handleBlogSelect(blog)
                    }
                    className="text-[12px] font-bold text-[#9e1b1b] hover:underline text-left leading-snug"
                  >
                    {blog.title}
                  </button>

                  <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
                    {blog.excerpt}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Reader Corner */}
          <div className="bg-white border border-gray-300 shadow-md">

            <div className="bg-[#e8e6df] border-b border-gray-300 px-3 py-2">

              <h2 className="text-sm font-bold text-[#222]">
                Reader's Corner
              </h2>

            </div>

            <div className="p-3">

              <p className="text-[12px] font-bold text-[#333] mb-2">
                Discover Something New
              </p>

              <p className="text-[11px] text-gray-700 leading-relaxed">
                Explore fresh ideas, creative perspectives,
                and thoughtful discussions about books,
                writing, and literary culture.
              </p>

              <button
                type="button"
                onClick={() =>
                  handleCategoryChange("All Blogs")
                }
                className="mt-3 text-[11px] font-bold text-[#9e1b1b] hover:underline"
              >
                Explore All Articles »
              </button>

            </div>

          </div>

        </aside>

      </div>

    </div>
  );
}