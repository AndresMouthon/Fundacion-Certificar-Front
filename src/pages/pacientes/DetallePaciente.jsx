import React, { useState } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import OpcionesVerPaciente from '../../components/paciente/OpcionesVerPaciente';
import VerDetallePaciente from '../../components/paciente/VerDetallePaciente';
import useEncuesta from '../../hooks/useEncuesta';
import Container from '../../utils/helpers/Container';

export default function DetallePaciente() {

  const location = useLocation();
  const { paciente } = location.state;
  const [activeSection, setActiveSection] = useState('personal');
  const { listadoPreguntas } = useEncuesta();
  const sections = [
    { id: 'personal', title: 'Información Personal', icon: <FaUser className="w-4 h-4 mr-1 hidden lg:flex" /> },
    { id: 'ubication', title: 'Información de ubicación', icon: <FaMapMarkerAlt className="w-4 h-4 mr-1 hidden lg:flex" /> },
    { id: 'academic', title: 'Información académica', icon: <FaGraduationCap className="w-4 h-4 mr-1 hidden lg:flex" /> },
  ];

  return (
    <>
      <OpcionesVerPaciente sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Container>
        {
          paciente !== null && (
            <VerDetallePaciente
              activeSection={activeSection}
              paciente={paciente}
              listadoPreguntas={listadoPreguntas}
            />
          )
        }
      </Container>
    </>
  )
}
