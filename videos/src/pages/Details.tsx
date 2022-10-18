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
    const [connectionError, setConnectionError] = useState<Error|null>(null);

    if (connectionError !== null){
        // terrible hack to get ErrorBoundary to catch errors from promises
        throw connectionError;
    }

    useEffect(() => {
        axios.get('http://localhost:8080/video?slug='+videoSlug).then(r => setSelectedVideo(r.data)).catch(e => setConnectionError(e));
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
                        {selectedVideo.mainActors.map((a,k) => (<li key={k}>{a}</li>))}
                    </ul>
                    <h1>rating: {selectedVideo.rating}&#47;5</h1>
                    <button onClick={() => {navigate('/quiz/' + selectedVideo.slug!)}}>Play quiz</button>
                    <br/>
                    <button onClick={() => {navigate('/leaderboard/' + selectedVideo.slug!)}}>View leaderboard</button>
                </div>
            )}
        </div>
    )
}

