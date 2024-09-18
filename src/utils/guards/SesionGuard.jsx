import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RUTASSECRETARIA } from "../../models/rutas.model";

export const SesionGuard = () => {
    const rol = useSelector((state) => state.rol);
    return rol ? <Navigate replace to={RUTASSECRETARIA.PACIENTES} /> : <Outlet />;
};