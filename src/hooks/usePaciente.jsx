import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { imagenes } from "../assets/img/imagenes";
import PDFComponent from "../components/paciente/PDFComponent";
import { RUTASPUBLICAS, RUTASSECRETARIA } from "../models/rutas.model";
import { deleteEliminarPaciente, getPacienteByCedula, getPacientes, postCreatePaciente, postGuardarPaciente, putActualizarPaciente } from "../services/PacienteService";
import { getPreguntas } from "../services/PreguntaService";
import { usarStorage } from "../utils/localStorage/localStorage.util";
import { pdf } from "@react-pdf/renderer";

export default function usePaciente() {

    const location = useLocation();
    const navigate = useNavigate();
    const token = usarStorage("token");
    const rol = useSelector((state) => state.rol);
    const [listadoPacientes, setListadoPacientes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [paciente, setPaciente] = useState({
        tipo_documento: "",
        documento: "",
        nombres: "",
        apellidos: "",
        genero: "",
        fecha_nacimiento: "",
        pais: "",
        departamento: "",
        ciudad: "",
    });
    const tituloModal = paciente.id ? "Actualizar Paciente" : "Registrar Paciente";

    /*========== RECARGAR =========================== */

    const recargar = () => {
        setPaciente({
            tipo_documento: "",
            documento: "",
            nombres: "",
            apellidos: "",
            genero: "",
            fecha_nacimiento: "",
            pais: "",
            departamento: "",
            ciudad: "",
        });
        setLoading(false);
    };

    /*========== GUARDAR PACIENTE =========================== */

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPaciente({ ...paciente, [name]: value });
    };

    const guardarPaciente = async () => {
        try {
            setLoading(true);
            const response = await postGuardarPaciente(paciente);
            console.log(response);
            setLoading(false);
            if (response.status === true) {
                toast.success("Paciente guardado con exito");
                navigate(RUTASPUBLICAS.ENCUESTA, { state: { paciente: response.mensaje } });
            } else if (response.errores) {
                toast.error(response.errores[0].msg);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    /*========== GUARDAR PACIENTE ADMIN =========================== */

    const toggleModal = () => {
        recargar();
        setOpenModal(!openModal);
    };

    const registrarPaciente = async (e) => {
        e.preventDefault();
        if (paciente.tipo_documento === "" || paciente.documento === "" || paciente.nombres === "" || paciente.apellidos === "" || paciente.genero === "0" || paciente.fecha_nacimiento === "" || paciente.departamento === "" || paciente.ciudad === "") {
            toast.warning("Por favor complete todos los campos");
        } else {
            try {
                setLoading(true);
                const response = await postCreatePaciente(token, paciente);
                setLoading(false);
                if (response.status === true) {
                    toast.success("Paciente creado con exito");
                    obtenerListadoPacientes();
                    toggleModal();
                } else if (response.errores) {
                    toast.error(response.errores[0].msg);
                }
                else {
                    toast.error(response.mensaje);
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
    };

    /*========== OBTENER PACIENTE POR CEDULA =========================== */

    const obtenerPacientePorCedula = async (e) => {
        e.preventDefault();
        try {
            if (paciente.documento === "") {
                toast.warning("Por favor ingrese el documento");
            } else {
                setLoading(true);
                const response = await getPacienteByCedula(paciente.documento);
                setLoading(false);
                if (response.length === 0) {
                    toast.warning("Paciente no registrado, complete todos los campos");
                    navigate(RUTASPUBLICAS.PACIENTE, { state: { paciente } });
                } else {
                    setPaciente(response[0]);
                    toast.success("Datos cargados con exito");
                    navigate(RUTASPUBLICAS.PACIENTE, { state: { paciente: response[0] } });
                }
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const buscarPacienteDocumento = async (e) => {
        e.preventDefault();
        try {
            if (paciente.documento === "") {
                toast.warning("Por favor ingrese el documento");
            } else {
                setLoading(true);
                const response = await getPacienteByCedula(paciente.documento);
                setLoading(false);
                if (response.length === 0) {
                    toast.warning("Paciente no registrado, registrelo para continuar");
                } else {
                    setPaciente(response[0]);
                    toast.success("Datos cargados con exito");
                    setPaciente(response[0]);
                }
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const handleCancel = () => {
        recargar();
        navigate(RUTASPUBLICAS.INICIO);
    };

    /*========== OBTENER PACIENTES =========================== */

    const obtenerListadoPacientes = async () => {
        setLoading(true);
        try {
            const response = await getPacientes(token);
            setListadoPacientes(response);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (location.pathname === RUTASSECRETARIA.PACIENTES) {
            obtenerListadoPacientes();
        }
    }, []);

    /*========== ACTUALIZAR PACIENTE ADMIN =========================== */

    const capturarInformacion = (paciente = {}) => {
        toggleModal();
        setPaciente(paciente);
    };

    const actualizarPaciente = async (e) => {
        e.preventDefault();
        if (paciente.tipo_documento === "" || paciente.documento === "" || paciente.nombres === "" || paciente.apellidos === "" || paciente.genero === "0" || paciente.fecha_nacimiento === "" || paciente.departamento === "" || paciente.ciudad === "") {
            toast.warning("Por favor complete todos los campos");
        } else {
            setLoading(true);
            try {
                const response = await putActualizarPaciente(token, paciente.id, paciente);
                if (response.mensaje === "Paciente actualizado") {
                    toast.success("Paciente actualizado con exito");
                    obtenerListadoPacientes();
                    toggleModal();
                } else if (response.errores) {
                    toast.error(response.errores[0].msg);
                } else {
                    toast.error(response.mensaje);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    /*========== ELIMINAR PACIENTE ADMIN =========================== */

    const eliminarPaciente = async (id = "") => {
        try {
            Swal.fire({
                title: '¿Seguro que quiere eliminar este paciente?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'No, cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const resultado = await deleteEliminarPaciente(token, id);
                    if (resultado.mensaje === "Paciente eliminado") {
                        toast.success("Paciente eliminado con exito");
                        obtenerListadoPacientes();
                    } else {
                        toast.warn(resultado.mensaje);
                    };
                };
            });
        } catch (error) {
            setLoading(false);
            alertError(error.message);
        }
    };

    /*========== GENERAR REPORTE =========================== */

    const generarPDF = async (documento = "") => {
        try {
            const response = await getPacienteByCedula(documento);
            const preguntas = await getPreguntas();
            if (response.length === 0) {
                Swal.fire({
                    icon: "info",
                    title: "¡Paciente no encontrado!",
                    text: "No se pudo encontrar información para el paciente.",
                    showConfirmButton: false,
                    timer: 2000,
                });
                return;
            }
            const logo = imagenes.logo;
            const blob = await pdf(<PDFComponent datos={response} logoUrl={logo} preguntas={preguntas} />).toBlob();

            const url = URL.createObjectURL(blob);

            window.open(url, '_blank');
        } catch (error) {
            console.error("Error generando el PDF: ", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un error generando el PDF. Por favor, revisa la consola para más detalles.",
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };

    return {
        tituloModal,
        paciente,
        loading,
        listadoPacientes,
        openModal,
        setPaciente,
        handleChange,
        obtenerPacientePorCedula,
        handleCancel,
        guardarPaciente,
        capturarInformacion,
        toggleModal,
        registrarPaciente,
        actualizarPaciente,
        eliminarPaciente,
        buscarPacienteDocumento,
        recargar,
        generarPDF
    }
}
