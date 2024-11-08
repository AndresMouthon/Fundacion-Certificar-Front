import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { usarStorage } from "../utils/localStorage/localStorage.util";
import { TokenGuard } from "../utils/guards/TokenGuard";

export const AxiosInterceptor = () => {
    axios.interceptors.request.use(request => {
        const token = usarStorage("token");
        if (token) {
            if (isTokenExpired(token)) {
                alert("Token expirado. Por favor, inicie sesión de nuevo.");
                TokenGuard();
                return Promise.reject(new axios.Cancel("Token de autenticación expirado"));
            }
            request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
    }, error => Promise.reject(error));

    const isTokenExpired = (token) => {
        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decoded.exp < currentTime;
        } catch (error) {
            console.error("Error decodificando token:", error);
            return true;
        }
    };
}
