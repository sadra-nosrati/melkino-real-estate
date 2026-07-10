import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0F0F0F]">
      <div className="relative flex items-center justify-center">
        <span className="absolute h-20 w-20 rounded-full border-2 border-[#F2CA50]/20"></span>

        <span className="absolute h-20 w-20 rounded-full border-t-2 border-[#F2CA50] animate-spin"></span>

        <span className="h-4 w-4 rounded-full bg-[#F2CA50] animate-pulse shadow-[0_0_25px_#F2CA50]"></span>
      </div>
    </div>
  );
};

export default Loader;
