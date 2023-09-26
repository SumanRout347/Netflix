import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { options } from '../utils/constants'
import { addPopularMovies } from '../redux/movieSlice'
const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch()
    const getPopularMovies=async() =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=2',options)
        const data = await response.json()
        dispatch(addPopularMovies(data.results))
    }
    useEffect(()=>{
       
      !popularMovies && getPopularMovies()
    },[])
 
}

export default usePopularMovies