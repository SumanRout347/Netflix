import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { addGenres } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useMovieGenre = () => {
    const dispatch = useDispatch();
  const getMovieGenre = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      options
    );
    const data = await response.json();
    console.log(data)
    dispatch(addGenres(data.genres));
  };
  useEffect(()=>{
    getMovieGenre();
  },[])
};

export default useMovieGenre;
