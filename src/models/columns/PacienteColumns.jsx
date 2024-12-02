import { AiOutlineIdcard } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { FaCity, FaEye, FaRegEdit } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GrDocumentPdf, GrStatusUnknown } from "react-icons/gr";
import { MdCircle, MdDelete, MdKeyboard, MdTransgender } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { RUTASSECRETARIA } from "../rutas.model";

export const PacienteColumns = ({ capturarInformacion, eliminarPaciente, generarPDF }) => {

    const navigate = useNavigate();

    return [
        {
            name: (
                <>
                    <FiSettings className="w-5 h-5 mr-1" /> Acciones
                </>
            ),
            cell: (row) => (
                <div className="flex">
                    <button className="flex items-center justify-center w-10 h-10 text-white cursor-pointer hover:bg-purple-700 rounded-full hover:text-white bg-purple-600"
                        onClick={() => navigate(RUTASSECRETARIA.PACIENTES + "/" + RUTASSECRETARIA.RUTASPACIENTE.VERPACIENTE, { state: { paciente: row } })} >
                        <FaEye className="w-6 h-6" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 text-white cursor-pointer hover:bg-green-700 rounded-full hover:text-white bg-green-600" onClick={() => capturarInformacion(row)} >
                        <FaRegEdit className="w-6 h-6" />
                    </button>
                    {
                        row.Respuesta.length > 0 && (
                            <button className="flex items-center justify-center w-10 h-10 text-white cursor-pointer hover:bg-orange-700 rounded-full hover:text-white bg-orange-600" onClick={() => generarPDF(row.documento)} >
                                <GrDocumentPdf className="w-6 h-6" />
                            </button>
                        )
                    }
                    <button className="flex items-center justify-center w-10 h-10 text-white cursor-pointer hover:bg-red-700 rounded-full hover:text-white bg-red-600" onClick={() => eliminarPaciente(row.id)} >
                        <MdDelete className="w-6 h-6" />
                    </button >
                </div >
            ),
        },
        {
            name: (
                <>
                    <AiOutlineIdcard className="w-5 h-5 mr-1" /> Identificación
                </>
            ),
            selector: (row) => row.documento,
            sortable: true,
            width: "175px",
        },
        {
            name: (
                <>
                    <GrStatusUnknown className="w-5 h-5 mr-1" /> Estado
                </>
            ),
            cell: (row) => (
                <div className="flex items-center py-5">
                    <MdCircle
                        className={`w-4 h-4 mr-1 ${row.Respuesta.length > 0 ? "text-green-600" : "text-red-600"
                            }`}
                    />
                    <span>{row.Respuesta.length > 0 ? "Activo" : "Inactivo"}</span>
                </div>
            ),
            sortable: true,
            width: "120px",
        },
        {
            name: (
                <>
                    <MdKeyboard className="w-5 h-5 mr-1" /> Nombres
                </>
            ),
            selector: (row) => row.nombres,
            sortable: true,
            width: "150px",
        },
        {
            name: (
                <>
                    <MdKeyboard className="w-5 h-5 mr-1" /> Apellidos
                </>
            ),
            selector: (row) => row.apellidos,
            sortable: true,
            width: "150px",
        },
        {
            name: (
                <>
                    <MdTransgender className="w-5 h-5 mr-1" /> Género
                </>
            ),
            selector: (row) => row.genero,
            sortable: true,
            width: "140px",
        },
        {
            name: (
                <>
                    <RiGovernmentLine className="w-5 h-5 mr-1" /> Departamento
                </>
            ),
            selector: (row) => row.departamento,
            sortable: true,
            width: "190px",
        },
        {
            name: (
                <>
                    <FaCity className="w-5 h-5 mr-1" /> Ciudad
                </>
            ),
            selector: (row) => row.ciudad,
            sortable: true,
            width: "140px",
        },
        {
            name: (
                <>
                    <BsCalendar className="w-5 h-5 mr-1" /> Fecha Nacimiento
                </>
            ),
            selector: (row) => row.fecha_nacimiento,
            sortable: true,
            width: "200px",
        },
    ];
    
};