import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import LeaderboardData from "../types/LeaderboardData";
import axios from "axios";

export const Leaderboard = () => {
    const navigate = useNavigate();
    const {videoSlug} = useParams();

    const [leaderboardData, setLeaderboardData] = useState<LeaderboardData|undefined>();
    const [connectionError, setConnectionError] = useState<Error|null>(null);

    if (connectionError !== null){
        // terrible hack to get ErrorBoundary to catch errors from promises
        throw connectionError;
    }

    useEffect(() => {
        axios.get('http://localhost:8080/scores?slug='+videoSlug).then(d => setLeaderboardData(d.data)).catch(e => setConnectionError(e));
    });

    return (
        <>
            <h1>{leaderboardData?.title} quiz leaderboard</h1>
            <table>
                <th>#</th>
                <th>username</th>
                <th>score</th>
                {leaderboardData !== undefined && leaderboardData.scores.map((s,k) => (
                    <tr>
                        <td>{k+1}</td>
                        <td>{s.username}</td>
                        <td>{s.score}</td>
                    </tr>
                ))}
            </table>
            <button onClick={() => navigate('/')}>go back</button>
        </>

    )
}
