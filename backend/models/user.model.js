import mongoose from 'mongoose'
import { type } from 'os';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    }
    // massage: String,
})

export const User = mongoose.model('User', userSchema);