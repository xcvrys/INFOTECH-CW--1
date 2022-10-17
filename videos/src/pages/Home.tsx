import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import VideoPreview from "../types/VideoPreview";

export const Home:FC = () => {
    const navigate = useNavigate();

    const [videos,setVideos] = useState<VideoPreview[]>([]);
    const [connectionError, setConnectionError] = useState<Error|null>(null);

    if (connectionError !== null){
        // terrible hack to get ErrorBoundary to catch errors from promises
        throw connectionError;
    }

    useEffect(() => {
        axios.get("http://localhost:8080/videos").then(res => setVideos(res.data)).catch(e => {
           setConnectionError(e);
        });
    },[]);

    return (
        <div style={{textAlign:'center'}}>
            {videos.map((v:VideoPreview) => (
                <div key={v.slug}>
                    <h1>tytuł {v.title}</h1>
                    <h1>director {v.director}</h1>
                    <img src={v.thumb} alt={v.slug + "_preview"} width={100} height={100}/>
                    <h1>rating {v.rating}&#47;5</h1>
                    <button onClick={() => {navigate('/details/' + v.slug)}} type={"button"}>zobacz</button>
                </div>
            ))}
        </div>
    );
}
