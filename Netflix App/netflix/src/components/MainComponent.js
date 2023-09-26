import React from 'react'
import VideoInfo from './VideoInfo'
import VideoBg from './VideoBg'
import { useSelector } from 'react-redux'
const MainComponent = () => {
    const movies=useSelector(store=>store?.movies?.nowPlayingMovies)
    if(!movies){
        return
    }
    let movie
    movies.forEach((m,i)=>{
        if(m.title==="Meg 2: The Trench"){
         movie=movies[i]
        }
    })
   
  return (
    <div className='relative bg-zinc-900'>
        <VideoInfo movie={movie}/>
        <VideoBg movie={movie} movieId={movie.id}/>
    </div>
  )
}

export default MainComponent