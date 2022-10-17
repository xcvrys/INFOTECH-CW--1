import mongoose, {mongo, Schema} from "mongoose";

const videoSchema = new Schema({
    slug: String,
    title: String,
    director: String,
    mainActors: [String],
    rating: Number,
    description: String,
});

const answerSchema = new Schema({
    id:Number,
    title: String,
    correct: Boolean,
});

const questionSchema = new Schema({
    id:Number,
    title: String,
    answers:[answerSchema]
});

const quizSchema = new Schema({
    for:String,
    questions: [questionSchema]
});

export const Video = mongoose.model("video",videoSchema);
export const Quiz = mongoose.model("quiz",quizSchema);
