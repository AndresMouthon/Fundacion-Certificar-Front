import React from "react";
import { imagenes } from "../../assets/img/imagenes";

export default function BodyLogin() {
    return (
        <div className="flex lg:flex-1 bg-gray-300 dark:bg-gray-950 shadow-lg shadow-black/20 items-center justify-center">
            <img
                src={imagenes.fondoEncuesta}
                alt="Fondo..."
                className="hidden lg:block lg:w-full lg:h-screen"
                style={{ aspectRatio: "1000 / 1000", objectFit: "cover" }}
            />
        </div>
    );
}
