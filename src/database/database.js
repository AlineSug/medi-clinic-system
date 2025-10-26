import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once(
    'open', function(){
        console.log('Database connected successfuly');
    }
);

export default db;