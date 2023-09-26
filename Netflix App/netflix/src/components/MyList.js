import React from 'react'
import Head from './Head'
import { useSelector } from 'react-redux'
import MovieListSearch from './MovieListSearch'

const MyList = () => {
  const favouriteMovies = useSelector((store) => store.movies.favouriteMovies)
  if(!favouriteMovies){
    return;
  }
  return (
    <div className='sm:pt-[8%] pt-[10%] sm:pl-10 pl-4 bg-zinc-900 '>
       <h1 className='text-white sm:text-xl lg:text-2xl text-sm '>My List</h1>
       <MovieListSearch searchedMovie={favouriteMovies}/>
    </div>
  )
}

export default MyList