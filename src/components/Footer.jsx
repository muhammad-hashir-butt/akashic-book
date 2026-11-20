
import React from "react";

export default function Footer({ setActivePage }) {

  const navigateToPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", page: "HOME" },
    { label: "Books", page: "BOOKS" },
    { label: "Authors", page: "AUTHORS" },
    { label: "Services", page: "SERVICES" },
    { label: "Blogs", page: "BLOGS" },
    { label: "About Us", page: "ABOUT US" },
  ];

  return (
    <footer className="w-full bg-[#292929] text-white mt-8 border-t-2 border-[#9e1b1b]">

      <div className="max-w-[1140px] mx-auto px-5 py-8">

        {/* CENTER BRAND SECTION */}
        <div className="flex flex-col items-center justify-center text-center min-h-[230px]">

          <div className="w-full text-center">

            <h2 className="text-2xl font-bold text-white mb-3">
              Discover Great Books.
            </h2>

            <p className="text-lg text-gray-300 mb-2">
              Celebrate Powerful Stories.
            </p>

            <p className="text-base text-gray-400 mb-5">
              A World of Books, Authors and Ideas.
            </p>

            <div className="space-y-2">

              <p className="text-sm font-semibold text-gray-300">
                Have a Question? Get in Touch.
              </p>

              <a
                href="mailto:hello@thundersmouthpress.com"
                className="inline-block text-base font-medium text-[#e36b6b] hover:text-white transition-colors"
              >
                hello@thundersmouthpress.com
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-600"></div>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 py-6">

          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateToPage(item.page)}
              className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}

        </nav>

        <div className="border-t border-gray-600"></div>

        {/* LEGAL LINKS */}
        <div className="text-center pt-5">

          <div className="flex justify-center items-center flex-wrap gap-5 text-sm">

            <button
              onClick={() => navigateToPage("PRIVACY POLICY")}
              className="text-[#e36b6b] hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>

            <span className="text-gray-500">|</span>

            <button
              onClick={() => navigateToPage("TERMS & CONDITIONS")}
              className="text-[#e36b6b] hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>

          </div>

          <p className="text-xs text-gray-400 mt-5">
            &copy; Thundersmouth Press. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}
