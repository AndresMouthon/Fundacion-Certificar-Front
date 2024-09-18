import React from 'react';
import { imagenes } from '../../assets/img/imagenes';
import BuscadorHome from '../../components/home/BuscadorHome';
import EncabezadoHome from '../../components/home/EncabezadoHome';
import NavbarPublic from '../../components/layouts/navbar/NavbarPublic';
import usePaciente from '../../hooks/usePaciente';

export default function HomePage() {

  const { paciente, loading, handleChange, obtenerPacientePorCedula } = usePaciente();

  return (
    <div className='relative h-screen bg-cover bg-center overflow-hidden'
      style={{ backgroundImage: `url(${imagenes.fondoEncuesta})` }}
    >
      <NavbarPublic />
      <div className='absolute inset-0 bg-black bg-opacity-50 z-10'></div>
      <div className='relative z-20 flex flex-col justify-center items-center text-white h-full px-4 md:px-8'>
        <div className='flex flex-col justify-center items-center'>
          <EncabezadoHome />
          <BuscadorHome paciente={paciente} handleChange={handleChange} buscar={obtenerPacientePorCedula} />
        </div>
      </div>
    </div>
  );
}
