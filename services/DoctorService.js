 import DoctorRepository from "../repositories/DoctorRepository.js";


const getAllDoctors = async () =>{
    return DoctorRepository.getAllDoctors();
}
const getDoctor = async (id) =>{
    return DoctorRepository.getDoctor(id);
}
const saveDoctor = async ({name, login, password, medicalRegistration}) =>{
    return DoctorRepository.saveDoctor({name, login, password, medicalRegistration});
}
const updateDoctor = async (id, {name, login, password, medicalRegistration}) =>{
    return DoctorRepository.updateDoctor(id, { name, login, password, medicalRegistration});
}

const deleteDoctor= async (id) =>{
    return DoctorRepository.deleteDoctor(id);
}

const getDoctorByLogin = async(login) => {
    return await DoctorRepository.getDoctorByLogin(login);
}

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}
export default doctorService;