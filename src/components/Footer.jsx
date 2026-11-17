import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a2a2a] text-white text-center py-5 px-4 mt-8 border-t border-black/30">
      <div className="max-w-[1140px] mx-auto space-y-1.5 text-[11px]">
        <p className="font-bold">
          232 Third St., Suite A115, Brooklyn, NY 11215
        </p>
        <p>
          Tel: 718-643-9193 | Fax: 718-643-9195 |{" "}
          <a
            href="mailto:info@akashicbooks.com"
            className="text-[#d94343] hover:underline"
          >
            info@akashicbooks.com
          </a>
        </p>
        <p className="pt-2 text-gray-300">
          2026 &copy; Akashic Books. All rights reserved.
        </p>
        <p className="pt-1 text-[#d94343] space-x-2">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <span className="text-gray-500">|</span>
          <a href="#sitemap" className="hover:underline">
            Site Map
          </a>
        </p>
      </div>
    </footer>
  );
}