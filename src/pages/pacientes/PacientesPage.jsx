import React from "react";
import FormPaciente from "../../components/paciente/FormPaciente";
import MenuPacientes from "../../components/paciente/MenuPacientes";
import usePaciente from "../../hooks/usePaciente";
import { PacienteColumns } from "../../models/columns/PacienteColumns";
import DataTableComponent from "../../utils/dataTable/DataTableComponent";
import VentanaModal from "../../utils/modals/VentanaModal";

export default function PacientesPage() {

  const { listadoPacientes, openModal, paciente, tituloModal, loading, generarPDF,
    capturarInformacion, toggleModal, handleChange, registrarPaciente, actualizarPaciente, eliminarPaciente,
  } = usePaciente();
  const columns = PacienteColumns({ capturarInformacion, eliminarPaciente, generarPDF });
  const hanleSubmit = paciente.id ? actualizarPaciente : registrarPaciente;

  return (
    <div className="mt-5">
      <MenuPacientes toggleModal={toggleModal} data={listadoPacientes} />
      <DataTableComponent data={listadoPacientes} columns={columns} />
      <VentanaModal size={"full"} titulo={tituloModal} loading={loading} openModal={openModal}
        cerrarModal={toggleModal} hanleSubmit={hanleSubmit} >
        <FormPaciente paciente={paciente} handleChange={handleChange} />
      </VentanaModal>
    </div>
  );
}
