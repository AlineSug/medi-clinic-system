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
    email: {
        type: String,
        required: [true, 'Email is Required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required.'],
        validade: {
            validator: function (v) {
                return /\d{3}-\d{4}-\d{4}/.test(v);
            },
            message: props => `${props.value} This is not a valid phone value`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;