import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const MovieList = ({ movieList, title }) => {
  const listRef = useRef();
  
  const favouriteMovies = useSelector((store) => store.movies.favouriteMovies)

  console.log(window.innerWidth)
  const[scrollVal,setScrollVal] =useState(0)
  const[clickLimit,setClickLimit] = useState(16)
  const[move,setMove]=useState(false)
  const handleClick = (direction) => {
    console.log(window.innerWidth)
    if(window.innerWidth>300 && window.innerWidth<767){
        setClickLimit(8)
    }
    if(window.innerWidth>767 && window.innerWidth<1550){
        setClickLimit(13)
    }
    setMove(true)
    let distance = listRef.current.getBoundingClientRect().x-50;
    console.log(listRef.current.getBoundingClientRect().x)
    if (direction === "left" && scrollVal>0) {
        setScrollVal(scrollVal-1)
      listRef.current.style.transform = `translateX(${240 + distance}px)`;
    }
    if (direction === "right" && scrollVal<clickLimit) {
        setScrollVal(scrollVal+1)
      listRef.current.style.transform = `translateX(${-240 +distance}px)`;
    }
  };
  if(!movieList){
    return <Shimmer/>
  }
  return (
    <div className="w-full mb-[30px] md:mb-[60px]">
      <h1 className="lg:text-lg ml-2 md:ml-[50px] text-sm md:text-[16px] py-4  text-white">{title}</h1>
      <div className="relative">
      <AiOutlineLeft style={{display:!move && 'none'}} onClick={()=>handleClick("left")} className=" cursor-pointer absolute z-40 top-0 bottom-0 left-0 text-white opacity-40 bg-black h-full w-[50px]"/>
        <div ref={listRef} className="translate-x-0 transition-all duration-700 flex w-max ml-2 md:ml-[50px]">
          {movieList?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <AiOutlineRight onClick={()=>handleClick("right")} className="cursor-pointer absolute z-40 top-0 bottom-0 right-0 text-white opacity-40 bg-black h-full w-[50px]"/>
      </div>
    </div>
  );
};

export default MovieList;
