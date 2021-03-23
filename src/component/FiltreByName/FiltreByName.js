import React from 'react'
import {Form} from "react-bootstrap";
import  "./FiltreByName.css";


const FilterByName = ({setInputSearch}) => {

   
    return (
        <div>
             <Form.Control
             className='inputFilterName'
             type="text" placeholder="Enter your movie name.." 
             onChange={(e)=>setInputSearch(e.target.value)}
             />
        </div>
    )
}

export default FilterByName
