import React from "react";
import { IoPersonAdd } from "react-icons/io5";
import ExportExcel from "./ExportExcel";

export default function MenuPacientes({ toggleModal, data }) {
    return (
        <div className="flex items-center justify-between flex-col sm:flex-row w-full mb-4">
            <h1 className="text-1xl font-semibold">Nuestros pacientes</h1>
            <div className="inline-flex rounded-md shadow-sm">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-s-lg hover:bg-white hover:text-blue-600"
                    onClick={toggleModal}
                >
                    <IoPersonAdd className="w-6 h-6 mr-1" /> Registrar Paciente
                </button>
                <ExportExcel data={data} fileName={"Pacientes"} />
            </div>
        </div>
    );
}
