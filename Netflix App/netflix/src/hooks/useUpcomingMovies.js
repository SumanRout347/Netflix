import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNotifiedMovies, addUpcomingMovies } from '../redux/movieSlice'
import { options } from '../utils/constants'

const useUpcomingMovies = () => {
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    const dispatch = useDispatch()
    const getUpcomingMovies=async() =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2',options)
        const data = await response.json()
        dispatch(addUpcomingMovies(data.results))
        dispatch(addNotifiedMovies(data.results.slice(0,6)))
    }
    useEffect(()=>{
       
      !upcomingMovies && getUpcomingMovies()
    },[])
}

export default useUpcomingMovies