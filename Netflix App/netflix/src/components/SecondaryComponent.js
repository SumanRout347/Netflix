import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const favouriteMovies = useSelector((store) => store.movies.favouriteMovies)

  if (!nowPlayingMovies) {
    return;
  }
  if (!popularMovies) {
    return;
  }
  if (!topRatedMovies) {
    return;
  }
  if (!upcomingMovies) {
    return;
  }
  if(!favouriteMovies){
    return;
  }
//md:mt-[-250px] sm:mt-[-130px] mt-[-90px]  md:mb-[160px] sm:mb-[120px] mb-[60px] pb-2
  return (
    <div className="bg-zinc-900">
      <div className="md:mt-[-200px] lg:mt-[-200px] relative z-30 sm:mt-[-130px]  mt-[-70px] md:mb-[140px] lg:mb-[20px] sm:mb-[100px] mb-[60px] pb-2">
        {/* <MovieList title="Continue Watching" movieList={favouriteMovies}/> */}
        <MovieList title="Now Playing" movieList={nowPlayingMovies} />
        <MovieList title="Popular" movieList={popularMovies} />
        <MovieList title="Top Rated" movieList={topRatedMovies} />
        <MovieList title="Upcoming" movieList={upcomingMovies} />
      </div>
      <div className="text-zinc-900">
        Hello
      </div>
      
    </div>
  );
};

export default SecondaryComponent;
