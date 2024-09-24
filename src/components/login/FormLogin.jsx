import { Label, TextInput } from "flowbite-react";
import React from "react";
import { FaChevronLeft, FaIdCard, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { imagenes } from "../../assets/img/imagenes";
import { RUTASPUBLICAS } from "../../models/rutas.model";
import SpinerUtil from "../../utils/spinner/SpinerUtil";

export default function FormLogin({ usuario, loading, handleChange, iniciarSesion }) {

    return (
        <div className="flex items-center justify-center w-full lg:w-[40%] bg-blue-100 dark:bg-gray-950 shadow-lg shadow-black/20 min-h-screen relative">
            <NavLink
                className="absolute top-4 left-4 p-2 bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-x rounded-full shadow-lg transition-colors"
                to={RUTASPUBLICAS.INICIO}>
                <FaChevronLeft className="w-6 h-6" />
            </NavLink>
            <div className="mx-auto flex flex-col items-center justify-center bg-white p-10 shadow-lg dark:bg-gray-900 w-full h-full sm:shadow-none min-h-screen">
                <img src={imagenes.logo} alt="Fondo..." className="w-36" />
                <h1 className="text-3xl my-5">Inicio de sesión</h1>
                <section className="flex w-full flex-col items-start justify-center gap-4 h-full sm:h-auto">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="user" value="Usuario" />
                        </div>
                        <TextInput id="user" icon={FaIdCard} type="number" placeholder="000000000" required
                            value={usuario.cedula} onChange={handleChange} name="cedula" />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="pass" value="Contraseña" />
                        </div>
                        <TextInput id="pass" type="password" icon={FaLock} placeholder="••••••••••••••••" required
                            value={usuario.password} onChange={handleChange} name="password" />
                    </div>
                    <button onClick={iniciarSesion}
                        className="inline-flex items-center bg-blue-500 hover:bg-blue-600 transition-all text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-5 mb-10">
                        {loading ? <SpinerUtil size={5} /> : "Ingresar"}
                    </button>
                </section>
            </div>
        </div>
    );
}
