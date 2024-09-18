import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { imagenes } from "../../../assets/img/imagenes";
import { RUTASPUBLICAS } from "../../../models/rutas.model";

function NavbarPublic() {
    return (
        <>
            <header className="bg-white shadow-md z-30 relative">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={imagenes.logo} className="h-12 w-auto" alt="Logo pendiente..." />
                    </div>
                    <div className="flex items-center space-x-4">
                        <NavLink
                            className="relative bg-blue-800 p-2 rounded-xl text-white font-semibold hover:bg-white hover:border hover:text-blue-800 hover:border-blue-800 transition duration-300 flex items-center"
                            to={RUTASPUBLICAS.LOGIN}
                        >
                            <FaSignInAlt className="mr-2" />
                            Iniciar sesión
                        </NavLink>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default NavbarPublic;
