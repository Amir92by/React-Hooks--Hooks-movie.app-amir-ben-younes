import React,{useState} from 'react'
import moviesData from "./MoviesData";
import FilterByName from './FiltreByName/FiltreByName'
import MovieList from './MovieList/MovieList'
import Rating from './Rating/Rating'





const MovieApp = () => {

    const [movies, setMovies] = useState(moviesData)
    const [inputSearch, setInputSearch] = useState('') 
    const [rating, setRating] = useState(1)

    const addMovie =(newMovie) =>{
        setMovies([...movies, newMovie])
     }

    return (
        <div>
           <div className='filterPart'>
                <FilterByName setInputSearch={setInputSearch} />
                <Rating filterRating={true}  rating={rating} setRating={setRating} />
           </div>

                <MovieList 
                movies={movies}inputSearch={inputSearch} rating={rating} 
                addMovie={addMovie}
                />
        </div>
    )
}

export default MovieApp
