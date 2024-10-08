import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarPublic from '../../components/layouts/navbar/NavbarPublic';
import FormPaciente from '../../components/paciente/FormPaciente';
import usePaciente from '../../hooks/usePaciente';
import Container from '../../utils/helpers/Container';

export default function BusquedaPacientePage() {

    const location = useLocation();
    const { paciente: user } = location.state;
    const { paciente, handleChange, setPaciente, handleCancel, guardarPaciente, generarPDF } = usePaciente();

    useEffect(() => {
        setPaciente(user);
    }, [user]);

    return (
        <div className='bg-gray-50 h-screen'>
            <NavbarPublic />
            <div className='flex justify-center items-center mx-2 sm:mx-20 mt-1 sm:mt-10'>
                <Container>
                    <FormPaciente paciente={paciente} handleChange={handleChange} cancel={handleCancel}
                        handleSubmit={guardarPaciente} noAdmin={false} generar={generarPDF} />
                </Container>
            </div>
        </div>
    )
}
