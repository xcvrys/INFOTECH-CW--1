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
                            <button>
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 11V3H8v6H2v12h20V11h-6Zm-6-6h4v14h-4V5Zm-6 6h4v8H4v-8Zm16 8h-4v-6h4v6Z"></path>
                                </svg>
                                <p onClick={() => navigate('/leaderboard/' + selectedVideo.slug!)}>leaderboard</p>

                            </button>

                            <button>
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m16.315 13.316-7.635 4.43c-.648.376-1.48-.079-1.48-.836V8.05c0-.757.83-1.213 1.48-.836l7.635 4.43a.963.963 0 0 1 0 1.672Z"></path>
                                </svg>
                                <p onClick={() => {navigate('/quiz/' + selectedVideo.slug!)}}>
                                    start quizz
                                </p>
                            </button>
                        </div>
                </>
                )}
            </div>
        );
}

