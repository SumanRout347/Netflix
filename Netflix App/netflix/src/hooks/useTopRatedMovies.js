import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../redux/movieSlice'
import { options } from '../utils/constants'

const useTopRatedMovies = () => {
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const dispatch = useDispatch()
    const getTopRatedMovies=async() =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',options)
        const data = await response.json()
        dispatch(addTopRatedMovies(data.results))
    }
    useEffect(()=>{
      
     !topRatedMovies && getTopRatedMovies()
    },[])
}

export default useTopRatedMovies