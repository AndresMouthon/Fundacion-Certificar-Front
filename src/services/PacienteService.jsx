import axios from "axios";
import { ENDPOINTS } from "../models/endpoints.model";

const URL = ENDPOINTS.PACIENTE;

export const getPacientes = async (token) => {
    const response = await axios.get(URL + "todos-los-pacientes",
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return response.data;
};

export const getPacienteByCedula = async (documento = "") => {
    const response = await axios.get(URL + "paciente-por-cedula/" + documento);
    return response.data;
};

export const postCreatePaciente = async (token, paciente) => {
    const response = await axios.post(URL + "crear-paciente", paciente, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const putActualizarPaciente = async (token, id, paciente) => {
    const response = await axios.put(URL + "actualizar-paciente/" + id, paciente, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteEliminarPaciente = async (token, id = "") => {
    const response = await axios.delete(URL + "eliminar-paciente/" + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
}

export const postGuardarPaciente = async (paciente = {}) => {
    const response = await axios.post(URL + "guardar-paciente", paciente);
    return response.data;
}