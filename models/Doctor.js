import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
 
    name: {
        type: String,
        required: [true, 'Doctor Name is Required.']
    },
    login: {
        type: String,
        required: [true, 'Login is Required.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required.']
    },
    medicalRegistration: {
        type: String,
        required: [true, 'Medical Registration is Required.'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;