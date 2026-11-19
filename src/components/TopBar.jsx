import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#2a2a2a] text-white shadow-md relative z-20 border-b border-[#3d3d3d]">
      <div className="max-w-[1140px] mx-auto px-3 py-1.5 flex items-center justify-center">
        
        {/* CENTER: Tagline */}
        <div className="text-center text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase">
          Reverse-Gentrification of the Literary World
        </div>

      </div>
    </div>
  );
}