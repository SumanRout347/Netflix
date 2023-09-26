import React from 'react'
import { useSelector } from 'react-redux'
import MovieListSearch from './MovieListSearch'

const GptMovieSuggestions = () => {
    const searchedMovie=useSelector(store=>store.gpt.movieResult)
    console.log(searchedMovie)
   
  return (
    <div className='mt-4 bg-zinc-900 w-screen overflow-x-hidden'>
       <MovieListSearch searchedMovie={searchedMovie}/>
    </div>
  )
}

export default GptMovieSuggestions