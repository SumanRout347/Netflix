import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    notifiedMovies: null,
    genres: null,
    favouriteMovies: [],
    toggleList: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addNotifiedMovies: (state, action) => {
      state.notifiedMovies = action.payload;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
    addFavouriteMovie: (state, action) => {
      let movie = state.favouriteMovies.find(
        (movie) => movie.id === action.payload.id
      );
      if (!movie) {
        state.favouriteMovies.push(action.payload);
      }
    },
    removeFavouriteMovie: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setToggleList: (state) => {
      state.toggleList = !state.toggleList;
    },
  },
});

export const {
  addNowPlayingMovies,
  setToggleList,
  addFavouriteMovie,
  removeFavouriteMovie,
  addGenres,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addNotifiedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
