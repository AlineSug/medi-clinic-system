import Pacient from "../models/Pacient.js";

const getAllPacients = async () => {
    try {
        return await Pacient.find();
    } catch (error) {
        throw new Error(error);
    }
}
const getPacient= async (id) => {
    try {
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePacient = async ({ name, birthDate}) => {
    try {
        const pacient = new Pacient({ name, birthDate});
        return await pacient.save();
        
    } catch (error) {
        throw new Error(error);
    }
}

const updatePacient = async (id, { name, birthDate}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, { name, birthDate}, { new: true});       
    } catch (error) {
        throw new Error(error);
    }
}

const deletePacient= async (id) => {
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}


const pacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient

}

export default pacientRepository;