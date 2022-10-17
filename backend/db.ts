import mongoose from "mongoose";
import {Quiz, Video} from "./models";

mongoose.connect("mongodb://admin:admin@localhost:27017/videosAppData?authSource=admin&authMechanism=DEFAULT").then(() => {});

export const getAllVideosPreview = async () => {
    return Video.find({},{slug:1, title:1, thumb:1, director:1, rating: 1});
}

export const getSelectedVideo = async (slug:string) => {
    return Video.findOne({slug:slug},{_id:0});
}

export const getSelectedQuestions = async (slug:string) => {
    return Quiz.findOne({slug:slug},{_id:0,"questions._id":0,"questions.answers._id":0});
}
