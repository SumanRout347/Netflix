import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { BsFillPlayFill } from "react-icons/bs";

import video from "../assets/video1.mp4";
import { useSelector } from 'react-redux';

const Modal = ({movie,toggle,setToggle}) => {
    const[mute,setMute]=useState(true);
    const genres=useSelector(store=>store.movies.genres)
    let arr=[]
    movie.genre_ids.forEach((g)=>{
        genres.forEach(genre=>{
            if(genre.id===g){
                arr.push(genre.name)
            }
        })

    })
  return (
    <div className="absolute w-full lg:top-4 top-9 right-1 z-[999] shadow-lg">
    <div>
      <video
      onClick={()=>setMute(!mute)}
        src={video}
        muted={mute}
        className="lg:w-3/5 w-full mx-auto cursor-pointer aspect-video "
        autoPlay={true}
        loop
      ></video>
      <h1 className="text-white  lg:text-4xl font-bold absolute lg:bottom-[38%] bottom-[58%] sm:bottom-[50%] lg:left-[23%] left-[5%]">
        {movie.original_title}
      </h1>
      <button className="flex absolute lg:bottom-[27%] bottom-[46%] sm:bottom-[38%] lg:left-[23%] left-[5%] hover:bg-slate-300 rounded-sm text-black items-center bg-white py-1 px-6 gap-1 text-sm">
        <BsFillPlayFill className="sm:w-8 sm:h-8 w-4 h-4 " />
        <span>Play</span>
      </button>
      <IoMdCloseCircle
        onClick={() => setToggle(!toggle)}
        className="text-white cursor-pointer w-10 h-10 absolute lg:top-2 top-1 z-40 lg:right-[21%] right-0"
      />
    </div>
    <div className="text-white p-6 bg-zinc-900 lg:w-3/5 w-full mx-auto">
        <p className='sm:text-base text-sm'>{movie.overview}</p>
        <p className='text-gray-400 sm:text-base text-sm mt-2 flex gap-2 font-bold'>{arr.map((e,i)=>(
            <p>{e}</p>
        ))}</p>
    </div>
  </div>
  )
}

export default Modal