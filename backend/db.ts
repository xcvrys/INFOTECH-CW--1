import mongoose from "mongoose";
import {Video} from "./models";

mongoose.connect("mongodb://admin:admin@localhost:27017/videosAppData?authSource=admin&authMechanism=DEFAULT").then(r => console.log(r));

export const getAllMovies = async () => {
    return Video.find()
}
