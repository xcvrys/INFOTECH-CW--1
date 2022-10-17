import React, {FC, useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import Video from "../types/Video";
import axios from "axios";

export const Details:FC = () => {
    // hooks
    const {videoSlug} = useParams();
    const navigate = useNavigate();

    // page data
    const [selectedVideo, setSelectedVideo] = useState<Video|undefined>(undefined);

    useEffect(() => {
        axios.get('http://localhost:8080/video?slug='+videoSlug).then(r => setSelectedVideo(r.data)).catch(e => console.log("Connection error "+e.toString()));
    },[videoSlug]);

    return (
        <div>
            <button onClick={() => {navigate('/')}}>go back</button>
            {selectedVideo !== undefined && (
                <div key={selectedVideo.slug} style={{borderWidth:5, textAlign:"center"}}>
                    <h1>opis filmu zajebistego</h1>
                    <h1>title: {selectedVideo.title}</h1>
                    <h1>description: {selectedVideo.description}</h1>
                    <h1>director: {selectedVideo.director}</h1>
                    <h1>main actors:</h1>
                    <ul>
                        {selectedVideo.mainActors.map(a => (<li>{a}</li>))}
                    </ul>
                    <h1>rating: {selectedVideo.rating}&#47;5</h1>
                    <button onClick={() => {navigate('/quiz/' + selectedVideo.slug!)}}>Play quiz</button>
                </div>
            )}
        </div>
    )
}

