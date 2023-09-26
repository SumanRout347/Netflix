import React from 'react'
import MovieCard from './MovieCard'
import ClockLoader from  "react-spinners/ClockLoader"

const MovieListSearch = ({searchedMovie}) => {
   
    console.log(searchedMovie)
   
  return (
    <div className='flex sm:p-7 flex-wrap justify-center'>
        {searchedMovie ? searchedMovie?.map((movie) =>(
            <MovieCard key={movie.id} movie={movie}/>
        )):<ClockLoader
        color="white"
        loading={true}
        size={100}
      
      />}
    </div>
  )
}

export default MovieListSearch