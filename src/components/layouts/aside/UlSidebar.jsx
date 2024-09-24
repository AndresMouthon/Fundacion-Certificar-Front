import React from "react";
import { RUTASSECRETARIA } from "../../../models/rutas.model";
import LinkSidebar from "./LinkSidebar";

function UlSidebar() {

    const menuSecretaria = [
        { icono: "users", texto: "Pacientes", text: "text-blue-500", link: RUTASSECRETARIA.PACIENTES, activeSubroutes: [RUTASSECRETARIA.PACIENTES], bg: "bg-blue-500", hover: "hover:bg-blue-500" },
        { icono: "clipboard-check", texto: "Encuestas", text: "text-green-400", link: RUTASSECRETARIA.ENCUESTAS, path: RUTASSECRETARIA.ENCUESTAS, bg: "bg-green-400", hover: "hover:bg-green-400" },
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
