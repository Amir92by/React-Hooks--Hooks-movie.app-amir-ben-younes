import React from 'react'
import { Card } from "react-bootstrap";
import './MovieCard.css'
import Rating from "../Rating/Rating";
import ModalAddMovie from '../ModalAddMovie/ModalAddMovie'

const MovieCard = ({movie,addCard,addMovie}) => {
    return (
        <div>
            {addCard ?
            <Card className='movieCard'>
                <Card.Body>
                    <Card.Title className='addMovieBtn'> 

                        <ModalAddMovie addMovie={addMovie} /> 
                     </Card.Title>
                </Card.Body>
            </Card>
            :  

            <Card className='movieCard'>
            <Card.Img className='movieImg' variant="top" src={movie.img} />
            <Card.Body>
                <Card.Title className='movieTitle'>{movie.title} </Card.Title>

                <Card.Text> 
                        <Rating filterRating={false} movieRating={movie.rating} />
                 </Card.Text>
               
            </Card.Body>
        </Card>   
        }
            
        </div>
    )
}

export default MovieCard
