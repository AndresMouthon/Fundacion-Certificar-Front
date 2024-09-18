import axios from "axios";
import { ENDPOINTS } from "../models/endpoints.model";

const URL = ENDPOINTS.PREGUNTA;
export const getPreguntas = async () => {
    const response = await axios.get(URL + "todas-las-preguntas");
    return response.data;
};
