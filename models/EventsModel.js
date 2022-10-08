import mongoose from 'mongoose';


export const EventsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    start:{
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});