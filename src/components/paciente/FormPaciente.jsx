import React from 'react';
import { AiOutlineIdcard } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { FaCity, FaClipboardList } from "react-icons/fa";
import { GrDocumentPdf } from 'react-icons/gr';
import { MdCancelPresentation, MdKeyboard, MdOutlineAssignment, MdTransgender } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

export default function FormPaciente({ handleChange, paciente, cancel, generar, handleSubmit, noAdmin }) {

    if (!paciente) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-6'>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <div className="w-full">
                    <label htmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                        Nombres
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <MdKeyboard className="w-6 h-6 text-sky-950" />
                        </div>
                        <input onChange={handleChange} type="text" id="nombres" name="nombres" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Nombres..." value={paciente.nombres} />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                        Apellidos
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <MdKeyboard className="w-6 h-6 text-sky-950" />
                        </div>
                        <input onChange={handleChange} type="text" id="apellidos" name="apellidos" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Apellidos..." value={paciente.apellidos} />
                    </div>
                </div>
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <div className="w-full">
                    <label htmlFor="select-tipo_documento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                        Tipo de documento
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <MdOutlineAssignment className="w-6 h-6 text-sky-950" />
                        </div>
                        <select onChange={handleChange} name="tipo_documento" id="select-tipo_documento" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-pointer"
                            value={paciente.tipo_documento ? paciente.tipo_documento : "Seleccione una opcion..."}>
                            <option disabled>Seleccione una opcion...</option>
                            <option value="Cedula de ciudadania">Cedula de Ciudadania</option>
                            <option value="Cedula de extranjeria">Cedula de Extranjeria</option>
                            <option value="Tarjeta de identidad">Tarjeta de Identidad</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="documento" className={`block mb-2 text-sm font-medium dark:text-white ${paciente.update_at ? 'text-gray-500' : 'text-gray-900'}`} >
                        Documento
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <AiOutlineIdcard className={`w-5 h-5 ${paciente.update_at ? 'text-gray-500' : 'text-gray-900'}`} />
                        </div>
                        <input onChange={handleChange} type="text" id="documento" name="documento" className={`bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5`} placeholder="Documento..." value={paciente.documento} />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="fecha_nacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                        Fecha nacimiento
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <BsCalendar className="w-5 h-5 text-sky-950" />
                        </div>
                        <input onChange={handleChange} type="date" id="fecha_nacimiento" name="fecha_nacimiento" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Select date" value={paciente.fecha_nacimiento} />
                    </div>
                </div>
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <div className="w-full">
                    <label htmlFor="select-genero" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                        Género
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <MdTransgender className="w-6 h-6 text-sky-950" />
                        </div>
                        <select onChange={handleChange} name="genero" id="select-genero" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-pointer"
                            value={paciente.genero ? paciente.genero : "Seleccione una opcion..."} >
                            <option disabled>Seleccione una opcion...</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="departamento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                        Departamento
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <RiGovernmentLine className="w-6 h-6 text-sky-950" />
                        </div>
                        <input onChange={handleChange} type="text" id="departamento" name="departamento" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Departamento..." value={paciente.departamento} />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="ciudad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                        Ciudad
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <FaCity className="w-6 h-6 text-sky-950" />
                        </div>
                        <input onChange={handleChange} type="text" id="ciudad" name="ciudad" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Ciudad..." value={paciente.ciudad} />
                    </div>
                </div>
            </div>
            {
                noAdmin === false &&
                <div className="flex justify-end items-center mt-10">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-transparent border border-red-600 rounded-s-lg hover:bg-red-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-red-600 focus:bg-red-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:bg-red-600"
                            onClick={cancel}>
                            <MdCancelPresentation className="w-5 h-5 mr-2" />
                            Cancelar
                        </button>
                        {(paciente.Respuesta && paciente.Respuesta.length > 0) && (
                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-orange-500 bg-transparent border-t border-b border-orange-500 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-orange-500 dark:focus:bg-orange-500"
                                onClick={() => generar(paciente.documento)}>
                                <GrDocumentPdf className="w-5 h-5 mr-2" />
                                Generar PDF
                            </button>
                        )}
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-500 bg-transparent border border-green-500 rounded-e-lg hover:bg-green-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-500 focus:bg-green-500 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-green-500 dark:focus:bg-green-500"
                            onClick={handleSubmit}>
                            <FaClipboardList className="w-5 h-5 mr-2" />
                            <span>Continuar</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}
