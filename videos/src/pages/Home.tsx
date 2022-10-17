import React, {FC, useEffect, useState} from "react";
import axios from "axios";

export const Home:FC = () => {
    const [movies,setMovies] = useState<{title:string, description: string}[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/movies").then(res => setMovies(res.data));
    },[]);
    return (
        <div style={{textAlign:'center'}}>
            <h1>tytul</h1>
            <h1>{(movies.length !== 0) ? movies[0].title : 'loading' }</h1>
            <h1>description</h1>
            <h1>{(movies.length !== 0) ? movies[0].description : 'loading' }</h1>
        </div>
    );
}
