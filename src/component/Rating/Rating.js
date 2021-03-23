import React from 'react'
import { Rate } from 'antd';
import './Rating.css';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


const Rating = ({filterRating,movieRating,rating,setRating}) => {

   const handleChange = value => {
    setRating( value );
        };

    return (
        filterRating ?
        <span className='ratingContent'>
            <Rate tooltips={desc} onChange={handleChange} value={rating} />
        </span>
        :
         <span className='ratingContent'>
            <Rate disabled value={movieRating} />
        </span>
    )
}

export default Rating




    

 