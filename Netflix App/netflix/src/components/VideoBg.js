import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import video from "../assets/trailer.mp4"

const VideoBg = ({ movieId, movie }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.movieTrailer);
  if (!trailer) {
    return;
  }
  console.log(trailer[0]);
  return (
    <div className="w-screen aspect-video ">
     <video className="w-full aspect-video pointer-events-none" src={video} muted autoPlay={true} loop></video>
    </div>
  );
};

export default VideoBg;
