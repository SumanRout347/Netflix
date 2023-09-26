import React, { useEffect, useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFavouriteMovie, removeFavouriteMovie } from "../redux/movieSlice";
const MovieCard = ({ movie }) => {
  const [toggle, setToggle] = useState(false);
  const [like, setLike] = useState(false);
  const search = useSelector((store) => store.gpt.showGptSearch);
  const showList = useSelector((store) => store.movies.toggleList);
  const dispath = useDispatch();
  const [trailer, setTrailer] = useState("");
  const getMovieTrailer = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie.id +
        "/videos?language=en-US",
      options
    );
    const data = await response.json();
    const filtered = data.results.filter((d) => d.type === "Trailer");
    setTrailer(filtered);
  };
  if (!movie) {
    return null;
  }
  const handleLike = () => {
    setLike(!like);
    dispath(addFavouriteMovie(movie));
  };
  const handleDislike = () => {
    setLike(!like);
    dispath(removeFavouriteMovie(movie.id));
  };
  return (
    <div
      onMouseEnter={getMovieTrailer}
      onMouseLeave={() => setTrailer("")}
      className={
        search || showList
          ? `group mr-[20px] sm:mr-[5px] mb-[80px]  bg-zinc-900 col-span sm:w-[200px] w-[150px] h-[170px] relative sm:h-[220px]`
          : `group mr-[5px]  bg-zinc-900 col-span sm:w-[200px] w-[150px] h-[170px] relative sm:h-[220px]`
      }
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt="Movie"
        draggable={false}
        className="
      cursor-pointer
      object-fill
      transition
      duration
      shadow-xl
      group-hover:opacity-90
      sm:group-hover:opacity-0
      delay-300
      w-full
      h-full
    "
      />
      {!showList && (
        <div className="sm:hidden flex text-white absolute top-0">
          {like ? (
            <AiFillDislike
              onClick={handleDislike}
              className="w-4 h-4 cursor-pointer"
            />
          ) : (
            <AiFillLike
              onClick={handleLike}
              className="w-4 h-4 cursor-pointer"
            />
          )}
        </div>
      )}
      <div
        className={
          search || showList
            ? `
        opacity-0
        absolute
        top-2
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-[200px]
       
        scale-0
        group-hover:translate-x-[3vw]
        group-hover:scale-150
        group-hover:opacity-100`
            : `
        opacity-0
        absolute
        top-2
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-[200px]
       
        scale-0
        group-hover:translate-x-[3vw]
        group-hover:scale-150
        group-hover:opacity-100`
        }
      >
        <iframe
          className="w-full aspect-video absolute"
          src={
            "https://www.youtube-nocookie.com/embed/" +
            trailer[0]?.key +
            "?autoplay=1&mute=1&amp;controls=0"
          }
          name="youtube embed"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div
          className="
      
        bg-zinc-800
        p-2
        lg:p-2
       
        w-full
        transition
        shadow-md
        rounded-b-md
        text-white
        "
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="Movie"
            draggable={false}
            className="
      cursor-pointer
      object-fill
      shadow-xl
      rounded-md
      w-full
     aspect-video
    "
          />

          <div className="flex mt-2 justify-between mb-2">
            <div className="flex gap-2">
              <BiPlayCircle className="w-4 h-4 cursor-pointer" />
              <IoIosAddCircleOutline className="w-4 h-4 cursor-pointer" />
              {like ? (
                <AiFillDislike
                  onClick={handleDislike}
                  className="w-4 h-4 cursor-pointer"
                />
              ) : (
                <AiFillLike
                  onClick={handleLike}
                  className="w-4 h-4 cursor-pointer"
                />
              )}
            </div>
            <BsFillArrowDownCircleFill
              onClick={() => setToggle(!toggle)}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <p className="text-[8px] mb-2">
            {movie.overview.slice(0, 150) + "..."}
          </p>
          <div className="flex gap-2 items-center">
            <FaImdb className="w-4 h-4" />
            <p className="text-[12px]">{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
