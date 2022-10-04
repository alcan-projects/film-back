import { Schema, model } from "mongoose";
import { FilmTypes } from "../interfaces/films"

const FilmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},{
    timestamps:  true
})

export default model<FilmTypes>('film', FilmSchema)