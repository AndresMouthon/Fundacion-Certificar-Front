import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Sidebar from "./aside/Sidebar";
import { ContenedorContenido } from "./ContenedorContenido";
import Navbar from "./navbar/Navbar";

export function Maqueta() {

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
