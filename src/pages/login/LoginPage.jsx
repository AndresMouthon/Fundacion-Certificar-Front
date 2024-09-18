import React from 'react';
import BodyLogin from '../../components/login/BodyLogin';
import FormLogin from '../../components/login/FormLogin';
import useAuth from '../../hooks/useAuth';

export default function LoginPage() {


    const { usuario, loading, handleChange, iniciarSesion } = useAuth();

    return (
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
            <BodyLogin />
            <FormLogin usuario={usuario} loading={loading} handleChange={handleChange} iniciarSesion={iniciarSesion} />
        </div>
    )
}
