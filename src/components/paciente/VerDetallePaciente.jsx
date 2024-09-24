import React from "react";
import InformacionAcademicaAndSalud from "./InformacionAcademicaAndSalud";
import InformacionPersonal from "./InformacionPersonal";
import InformacionUbicacion from "./InformacionUbicacion";

function VerDetallePaciente({ activeSection, paciente, listadoPreguntas }) {
    const preguntasPersonales = listadoPreguntas.filter(pregunta => pregunta.seccion_pregunta === 1);
    const preguntasUbicacion = listadoPreguntas.filter(pregunta => pregunta.seccion_pregunta === 2);
    const preguntasAcademicaAndSalud = listadoPreguntas.filter(pregunta => pregunta.seccion_pregunta === 3 || pregunta.seccion_pregunta === 4);
    const renderSection = () => {
        switch (activeSection) {
            case 'personal':
                return (
                    <InformacionPersonal paciente={paciente} respuestaPersonal={paciente.Respuesta} preguntasPersonales={preguntasPersonales} />
                );
            case 'ubication':
                return (
                    <InformacionUbicacion respuestaUbicacion={paciente.Respuesta} preguntasUbicacion={preguntasUbicacion} />
                );
            case 'academic':
                return (
                    <InformacionAcademicaAndSalud respuestaAcademicaAndSalud={paciente.Respuesta} preguntasAcademicaAndSalud={preguntasAcademicaAndSalud} />
                );
            default:
                return null;
        }
    };

    return (
        <main className="flex-1 p-6 overflow-auto">
            {renderSection()}
        </main>
    );
}

export default VerDetallePaciente;
