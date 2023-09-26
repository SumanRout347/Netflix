import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openAi from "../utils/openAi";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieResult } from "../redux/gptSlice";

const GptSearchBar = () => {
  const myLan = useSelector((store) => store.gpt.selectedLanguage);
  const searchValue = useRef(null);
  const dispatch = useDispatch();
  const getMovie = async (movie) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data.results;
    } catch (error) {}
  };

  const handleSubmit = async () => {
    try {
      console.log(searchValue.current.value);
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchValue.current.value +
        ". give me the exact names of movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      const gptResults = await openAi.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!gptResults.choices) {
        // TODO: Write Error Handling
      }
      console.log(gptResults.choices[0]?.message?.content);
      const gptMovies = gptResults.choices[0]?.message?.content.split(",");
      const val = gptMovies.map((movie) => getMovie(movie));
      const tmdbResults = await Promise.all(val);
      console.log(tmdbResults);
      let arr = [];
      tmdbResults.forEach((results) => {
        results.forEach((result) => {
          let found = arr.find((e) => e.id === result.id);
          if (!found && result.poster_path!=null ) {
            arr.push(result);
          }
        });
      });
      dispatch(addMovieResult(arr));
    } catch (error) {}
  };
  return (
    <div className="max-w-screen-md mx-auto  p-4 rounded-lg shadow-lg">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:flex  justify-between"
      >
        <input
          ref={searchValue}
          type="text"
          className="sm:w-[64%] text-white bg-transparent border-2 border-white sm:mb-0 mb-4 w-full outline-none hover:outline-none sm:rounded-lg py-2 px-3 "
          placeholder={lang[myLan].gptSearchPlaceholder}
        />
        <button
          onClick={handleSubmit}
          className="text-white sm:w-[34%] w-full border-2 border-white  hover:bg-zinc-700 sm:rounded-lg py-2 px-3"
        >
          {lang[myLan].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
