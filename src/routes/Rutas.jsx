import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Maqueta } from '../components/layouts/Maqueta'
import { RUTASPUBLICAS, RUTASSECRETARIA } from '../models/rutas.model'
import BusquedaPacientePage from '../pages/busquedaPaciente/BusquedaPacientePage'
import EncuestaAdminPage from '../pages/encuesta/EncuestaAdminPage'
import EncuestaPage from '../pages/encuesta/EncuestaPage'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login/LoginPage'
import DetallePaciente from '../pages/pacientes/DetallePaciente'
import PacientesPage from '../pages/pacientes/PacientesPage'
import { AuthGuard } from '../utils/guards/AuthGuard'
import { SesionGuard } from '../utils/guards/SesionGuard'

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RUTASPUBLICAS.INICIO} element={<HomePage />} />
                <Route path={RUTASPUBLICAS.PACIENTE} element={<BusquedaPacientePage />} />
                <Route path={RUTASPUBLICAS.ENCUESTA} element={<EncuestaPage />} />
                <Route element={<SesionGuard />}>
                    <Route path={RUTASPUBLICAS.LOGIN} element={<LoginPage />} />
                </Route>
                <Route element={<AuthGuard />}>
                    <Route element={<Maqueta />}>
                        <Route path={RUTASSECRETARIA.PACIENTES} element={<PacientesPage />} />
                        <Route path={RUTASSECRETARIA.PACIENTES}>
                            <Route path={RUTASSECRETARIA.RUTASPACIENTE.VERPACIENTE} element={<DetallePaciente />} />
                        </Route>
                        <Route path={RUTASSECRETARIA.ENCUESTAS} element={<EncuestaAdminPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Rutas
