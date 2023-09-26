import React from "react";
import Head from "./Head";
import { useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import MainComponent from "./MainComponent";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import useMovieGenre from "../hooks/useMovieGenre";
import MyList from "./MyList";

const Content = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useMovieGenre()
  const search = useSelector((store) => store.gpt.showGptSearch);
  const showList = useSelector((store) => store.movies.toggleList);
  return (
    <div className="overflow-hidden">
      

      <Head />
      {showList && !search &&
      <MyList/>}
      {search && !showList &&
      <GptSearch/>}
      {!search && !showList &&
       <>
       <MainComponent />
       <SecondaryComponent />
     </>
      }
    </div>
  );
};

export default Content;
