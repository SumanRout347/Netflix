import React from "react";
import { bgImage } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="bg-zinc-900 w-full h-screen">
      <div className="absolute z-30 lg:top-[20%] sm:top-[15%] top-[10%] left-0 right-0  mx-auto">
        <GptSearchBar />
        
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
