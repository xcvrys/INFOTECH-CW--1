import React, {useEffect, useState} from "react";
import QuizData from "../types/QuizData";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export const Quiz = () => {
    // hooks
    const {videoSlug} = useParams();
    const navigate = useNavigate();

    // game data
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [quizData, setQuizData] = useState<QuizData|undefined>();
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [finishedPlaying, setFinishedPlaying] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [isScorePosted, setScorePosted] = useState<boolean>(false);

    // get questions from the API
    useEffect(() => {
        axios.get('http://localhost:8080/quiz?slug=' + videoSlug).then(d => setQuizData(d.data)).catch(e => console.log("Connection error "+ e.toString()));
    },[videoSlug]);

    // helper functions to clean up tsx
    const checkQuestion = (questionID:number, answerID: number) => {
        if (quizData!.data.questions[questionID].answers[answerID].correct){
            alert("zajebiscie");
            setCorrectAnswers(correctAnswers+1);
        } else {
            alert("zle lol");
        }
        if (currentQuestion === quizData!.data.questions.length-1){
            setFinishedPlaying(true);
            return;
        }
        setCurrentQuestion(currentQuestion+1);
    }
    const postScore = () => {
        axios.post("http://localhost:8080/save_score",{slug: videoSlug, username: username, correctAnswers: correctAnswers}).then(() => setScorePosted(true));
    }
    return (
        <div>
            {!isPlaying && (
                <>
                    <h1>check your knowledge of {quizData !== undefined ? quizData.title : "Loading..."}</h1>
                    <button onClick={() => setIsPlaying(true)}>go</button>
                </>

            )}
            {(isPlaying && quizData !== undefined && !finishedPlaying) && (
                <>
                    <h1>question number: {currentQuestion+1}</h1>
                    <h1>{quizData!.data.questions[currentQuestion].title}</h1>
                    {quizData.data.questions[currentQuestion].answers.map((v,k) => (
                        <button key={k} onClick={() => checkQuestion(currentQuestion,k)}>{v.title}</button>
                    ))}
                </>
            )}
            {finishedPlaying && (
                <>
                    <h1>game over</h1>
                    <h1>correct answers {correctAnswers}</h1>
                    <h1>incorrect answers {quizData!.data.questions.length - correctAnswers}</h1>
                    <input onInput={e => setUsername(e.currentTarget.value)} placeholder={"your name"}/>
                    {!isScorePosted && (
                        <button onClick={() => postScore()}> Save score</button>
                    )}
                    <button onClick={() => navigate('/')}>go back</button>
                </>
            )}
        </div>
    );
}
