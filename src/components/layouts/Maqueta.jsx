import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AxiosInterceptor } from "../../interceptors/AxiosInterceptors";
import Sidebar from "./aside/Sidebar";
import { ContenedorContenido } from "./ContenedorContenido";
import Navbar from "./navbar/Navbar";

export function Maqueta() {

    AxiosInterceptor();

    const { openAside, openNav, toggleAside, toggleNav, cerrarSesion } = useAuth();

    return (
        <>
            <Navbar openNav={openNav} toggleNav={toggleNav} toggleAside={toggleAside} cerrarSesion={cerrarSesion} />
            <Sidebar openAside={openAside} />
            <ContenedorContenido>
                <Outlet />
            </ContenedorContenido>
        </>
    );
}
