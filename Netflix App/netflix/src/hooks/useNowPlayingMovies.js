import { useEffect } from "react";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    !movies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
