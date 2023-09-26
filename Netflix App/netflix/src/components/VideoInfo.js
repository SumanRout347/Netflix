import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Modal from "./Modal";

const VideoInfo = ({ movie }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:pl-14 pl-2 mx-auto md:pt-[80px] lg:pt-[90px] 2xl:pt-[250px] xl:pt-[140px]  sm:pt-[140px] pt-[65px] absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="w-fit md:mb-6 mb-2 md:text-2xl lg:text-4xl text-base font-bold text-white">
        {movie.original_title}
      </h1>
      <p className="md:w-1/4 md:text-[8px] lg:text-[14px] sm:flex hidden text-[6px] w-1/2 md:mb-4 mb-2 text-white">
        {movie.overview}
      </p>
      <div className="flex gap-3 ">
        <button className="flex hover:bg-slate-300 rounded-sm text-black items-center bg-white lg:py-2 py-1 px-3 lg:px-6 gap-1 md:py-[1px] md:text-[10px] lg:text-sm text-[6px]">
          <BsFillPlayFill className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
          <span>Play</span>
        </button>
        <button onClick={() => setToggle(!toggle)} className="flex  hover:bg-slate-600 opacity-70 rounded-sm text-white items-center bg-gray-500 lg:py-2 py-1 px-3 md:py-[1px] md:text-[10px] lg:px-6 gap-1  lg:text-sm text-[6px]">
          <AiOutlineInfoCircle className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
          <span >More Info</span>
        </button>
      </div>
      {toggle && (
        <Modal movie={movie} toggle={toggle} setToggle={setToggle}/>
      )}
    </div>
  );
};

export default VideoInfo;
