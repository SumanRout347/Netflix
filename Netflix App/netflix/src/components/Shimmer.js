import React from "react";

const Shimmer = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-[5px] relative z-[999] justify-center">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-[150px] h-[200px] bg-gray-400"></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
