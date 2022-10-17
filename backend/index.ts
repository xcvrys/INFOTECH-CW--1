import express from 'express';
import morgan, {format} from 'morgan';
import cors from 'cors';
import {getAllVideosPreview, getSelectedQuestions, getSelectedVideo} from "./db";

const app = express()
app.use(morgan('dev'));
app.use(cors());

app.get('/videos', async(req, res) => {
    const allVideoPreviews = await getAllVideosPreview();
    res.status(200).send(allVideoPreviews);
});

app.get('/video', async (req,res) => {
    if (req.query.slug === undefined) {res.status(404).send({}); return}
    const videoSlug = req.query.slug as string;
    const selectedVideoDetails = await getSelectedVideo(videoSlug);
    res.status(200).send(selectedVideoDetails);
});

app.get('/quiz', async (req,res) => {
    if (req.query.slug === undefined) {res.status(404).send({}); return}
    const videoSlug = req.query.slug as string;
    const video = await getSelectedVideo(videoSlug);
    if (video === undefined) {res.status(404).send({}); return;}
    const quizData = await getSelectedQuestions(videoSlug);
    res.status(200).send({title: video!.title, data: quizData});
});

app.listen(8080,() => {
    console.log("--- App listening on port 8080 ---");
})
