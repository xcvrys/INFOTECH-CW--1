import React, {FC, useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import Video from "../types/Video";
import axios from "axios";
import style from '../styles/css/Details.module.css';

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
            <div className={style.main}>
                {selectedVideo !== undefined && (
                    <>
                <div className={style.content}>
                    <img src={selectedVideo.thumb} alt={selectedVideo.slug + "_preview"}/>
                    <h1><a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer" >{selectedVideo.title}</a></h1>
                    <div className={style.cast}>
                        {selectedVideo.mainActors.map((a,k) => (<span key={k}>{a}</span>))}
                    </div>
                    <p>{selectedVideo.description}</p>
                </div>
                <div className={style.btn}>
                    <button onClick={() => {navigate('/quiz/' + selectedVideo.slug!)}}>Play quiz</button>
                </div>
                <div className={style.btn}>
                     <button onClick={() => navigate('/leaderboard/' + selectedVideo.slug!)}>View leaderboard</button>
                </div>
                </>
                )}
            </div>
        );
}

