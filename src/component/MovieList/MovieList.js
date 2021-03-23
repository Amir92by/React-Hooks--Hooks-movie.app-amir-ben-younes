import React from 'react'
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'

const MovieList = ({movies,inputSearch,rating,addMovie}) => {

    

    return (
        <div className='movieList'>
            {movies
            .filter(movie =>
                movie.title.toLowerCase().includes(inputSearch.toLowerCase())
                &&
                movie.rating >= rating
                )
            
            .map(movie=>(
                <MovieCard key={movie.id} movie={movie} />
            ))}

            <MovieCard addCard={true}  addMovie={addMovie}/>
        </div>
    )
}

export default MovieList
