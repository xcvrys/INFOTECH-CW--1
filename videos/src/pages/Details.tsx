import React,{FC} from "react";
import {useParams} from 'react-router-dom';

export const Details:FC = () => {
    const {movieID} = useParams();
    return (
        <div>
            <h1>details</h1>
            <h1>{movieID}</h1>
        </div>
    )
}

