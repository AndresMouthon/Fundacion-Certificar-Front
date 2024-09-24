import React from "react";
import { FaCalendarAlt, FaCity, FaFileSignature, FaGlobe, FaIdCard, FaMapSigns, FaTransgender, FaUserAlt } from 'react-icons/fa';

function InformacionPersonal({ paciente, preguntasPersonales, respuestaPersonal }) {

    const preguntasConRespuestas = preguntasPersonales.map(pregunta => {
        const respuesta = respuestaPersonal.find(res => res.pregunta_id === pregunta.id);
        return {
            ...pregunta,
            respuesta: respuesta ? respuesta.respuesta : 'No disponible'
        };
    });

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Información Personal</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <FaIdCard className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Tipo de Documento:</strong> {paciente.tipo_documento}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaFileSignature className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Documento:</strong> {paciente.documento}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaUserAlt className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Nombres:</strong> {paciente.nombres}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaUserAlt className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Apellidos:</strong> {paciente.apellidos}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaTransgender className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Género:</strong> {paciente.genero}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaCalendarAlt className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Fecha de Nacimiento:</strong> {paciente.fecha_nacimiento}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaGlobe className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>País:</strong> {paciente.pais}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaMapSigns className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Departamento:</strong> {paciente.departamento}
                    </span>
                </div>
                <div className="flex items-center">
                    <FaCity className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-lg font-medium text-gray-700">
                        <strong>Ciudad:</strong> {paciente.ciudad}
                    </span>
                </div>
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
    )
}

export default InformacionPersonal;
