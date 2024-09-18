import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RUTASPUBLICAS } from "../../models/rutas.model";


export const AuthGuard = () => {
    const rol = useSelector((state) => state.rol);
    return rol ? <Outlet /> : <Navigate to={RUTASPUBLICAS.LOGIN} />;
};