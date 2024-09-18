import React from "react";
import { RUTASSECRETARIA } from "../../../models/rutas.model";
import LinkSidebar from "./LinkSidebar";

function UlSidebar() {

    const menuSecretaria = [
        { icono: "users", texto: "Pacientes", text: "text-blue-500", link: RUTASSECRETARIA.PACIENTES, activeSubroutes: [RUTASSECRETARIA.PACIENTES], bg: "bg-blue-500", hover: "hover:bg-blue-500" },
        { icono: "clipboard-check", texto: "Encuestas", text: "text-purple-500", link: RUTASSECRETARIA.ENCUESTAS, path: RUTASSECRETARIA.ENCUESTAS, bg: "bg-purple-500", hover: "hover:bg-purple-500" },
    ];

    return (
        <ul className="space-y-2 font-medium">
            {menuSecretaria.map((item, index) => (
                <LinkSidebar
                    key={index}
                    item={item}
                    activeSubroutes={item.activeSubroutes}
                />
            ))}
        </ul>
    )
}

export default UlSidebar;
