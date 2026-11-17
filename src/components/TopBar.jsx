import React from "react";

export default function TopBar() {
  return (
    <>
      {/* Top Dark Bar */}
      <div className="w-full bg-[#2a2a2a] text-white text-center py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase shadow-md relative z-20">
        Reverse-Gentrification of the Literary World
      </div>

      {/* Top-Left Diagonal Red Ribbon */}
      <div className="fixed top-0 left-0 w-36 h-36 overflow-hidden pointer-events-none z-30">
        <div className="bg-[#b90e0a] text-white text-center font-bold shadow-lg -rotate-45 transform -translate-x-10 translate-y-5 py-1.5 w-48 border-y border-red-900">
          <div className="text-sm leading-tight text-yellow-300 font-extrabold">
            25% OFF
          </div>
          <div className="text-[10px] leading-tight">All Books</div>
          <div className="text-[10px] leading-tight">Every Day</div>
        </div>
      </div>
    </>
  );
}