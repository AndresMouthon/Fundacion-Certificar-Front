import axios from "axios";
import { ENDPOINTS } from "../models/endpoints.model";

const URL = ENDPOINTS.RESPUESTA;

export const postGuardarRespuestas = async (respuestas = []) => {
    const response = await axios.post(URL + "guardar-respuesta", respuestas);
    return response.data;
};