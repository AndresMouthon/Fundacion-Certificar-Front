import React from 'react'

export default function EncabezadoHome() {
    return (
        <div className="flex flex-col justify-center items-center mb-6 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
                BIENVENIDO A NUESTRO SISTEMA
            </h1>
            <p className="text-lg md:text-xl lg:w-1/2 font-semibold text-white text-center mb-4">
                ¡Bienvenido! 🙌 Por favor, ingresa tu número de documento para iniciar. Verificaremos tu información y,
                si es necesario, podrás actualizarla o completarla. Una vez todo esté listo,
                podrás continuar con las preguntas. ¡Gracias por participar!
            </p>
        </div>
    )
}
