import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/movieSlice";
const useMovieTrailer = (movieId) => {
    const trailer = useSelector((store) => store?.movies?.movieTrailer);
    const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      options
    );
    const data=await response.json();
    const filtered = data.results.filter(d=>d.type==="Trailer")
    dispatch(addMovieTrailer(filtered))

  };
  useEffect(() => {
   
       !trailer && getMovieTrailer()
  
   
  }, []);
};

export default useMovieTrailer;
