import { RUTASPUBLICAS } from "../../models/rutas.model";

export const TokenGuard = () => {
    localStorage.clear(); 
    window.location.assign(RUTASPUBLICAS.LOGIN); 
}