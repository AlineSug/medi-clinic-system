import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Pacient Name is required.']
    },
    birthDate: {
        type: Date,
        required: [true, 'Birthdate is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const pacient = mongoose.model('Pacient', pacientSchema);

export default pacient;