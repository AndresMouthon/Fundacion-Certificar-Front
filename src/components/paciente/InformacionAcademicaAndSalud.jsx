import React from "react";

function InformacionAcademicaAndSalud({ respuestaAcademicaAndSalud, preguntasAcademicaAndSalud }) {
    const preguntasConRespuestas = preguntasAcademicaAndSalud.map(pregunta => {
        const respuesta = respuestaAcademicaAndSalud.find(res => res.pregunta_id === pregunta.id);
        return {
            ...pregunta,
            respuesta: respuesta ? respuesta.respuesta : 'No disponible'
        };
    });
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Información academica y de salud</h2>
            <div className="space-y-4">
                {preguntasConRespuestas.map((pregunta, index) => (
                    <div key={pregunta.id} className="flex items-center">
                        <span className="text-blue-500 font-bold mr-3">{index + 1}</span>
                        <span className="text-lg font-medium text-gray-700">
                            <strong>{pregunta.pregunta}:</strong> {pregunta.respuesta}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InformacionAcademicaAndSalud;
