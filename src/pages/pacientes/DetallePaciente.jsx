import React from 'react'
import { useLocation } from 'react-router-dom';

export default function DetallePaciente() {

    const location = useLocation();
    const { paciente } = location.state;

  return (
    <div>
        {JSON.stringify(paciente)}
    </div>
  )
}
