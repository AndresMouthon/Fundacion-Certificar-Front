import axios from "axios";
import { ENDPOINTS } from "../models/endpoints.model";

const URL = ENDPOINTS.LOGIN;

export const login = async (usuario = {}) => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(URL, usuario, options);
    return response.data
};