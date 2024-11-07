import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RUTASPUBLICAS, RUTASSECRETARIA } from '../models/rutas.model';
import { postGuardarRespuestas } from '../services/EncuestaService';
import { getPreguntas } from '../services/PreguntaService';

function useEncuesta(pacienteRespuestas = [], pacienteId) {

    console.log(pacienteId);
    

    const navigate = useNavigate();
    const rol = useSelector((state) => state.rol);
    const [listadoPreguntas, setListadoPreguntas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [respuestas, setRespuestas] = useState({});

    const fetchPreguntas = async () => {
        setLoading(true);
        try {
            const response = await getPreguntas();
            setListadoPreguntas(response);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPreguntas();
    }, []);

    useEffect(() => {
        if (pacienteRespuestas && pacienteRespuestas.length > 0) {
            const respuestasMap = pacienteRespuestas.reduce((acc, { pregunta_id, respuesta }) => {
                acc[pregunta_id] = respuesta;
                return acc;
            }, {});
            setRespuestas(respuestasMap);
        }
    }, [pacienteRespuestas]);

    const filteredPreguntas = listadoPreguntas.filter(pregunta => pregunta.seccion_pregunta === currentStep);

    const validateStep = (step) => {
        switch (step) {
            case 1:
                return respuestas[1] && respuestas[2] && respuestas[3] && respuestas[4] && respuestas[5];
            case 2:
                return respuestas[6] && respuestas[7] && respuestas[8] && respuestas[9] && respuestas[11];
            case 3:
                return respuestas[12] && respuestas[13] && respuestas[14];
            case 4:
                return respuestas[15] && respuestas[17] && respuestas[18] && respuestas[19] && respuestas[20];
            case 5:
                return respuestas[21] && respuestas[22] && respuestas[23];
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            if (currentStep < 5) {
                setCurrentStep(currentStep + 1);
            } else {
                saveEncuesta();
            }
        } else {
            toast.warn('Por favor responda todas las preguntas');
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleInputChange = (questionId, value) => {
        setRespuestas(prevRespuestas => {
            const updatedRespuestas = {
                ...prevRespuestas,
                [questionId]: value
            };
            if (questionId === 15) {
                if (value === 'Sí') {
                    if (!updatedRespuestas[16]) {
                        updatedRespuestas[16] = '';
                    }
                } else if (value === 'No') {
                    updatedRespuestas[16] = '';
                }
            }
            return updatedRespuestas;
        });
    };

    const saveEncuesta = async () => {
        try {
            const respuestasToSave = Object.entries(respuestas).map(([preguntaId, respuesta]) => ({
                pregunta_id: parseInt(preguntaId, 10),
                respuesta,
                paciente_id: pacienteId
            }));
            const resultado = await postGuardarRespuestas(respuestasToSave);
            if (resultado.mensaje === "Respuestas guardadas") {
                toast.success('Respuestas guardadas correctamente');
                if (!rol) {
                    navigate(RUTASPUBLICAS.INICIO);
                } else {
                    navigate(RUTASSECRETARIA.PACIENTES);
                }
            } else {
                toast.warn('Error al guardar las respuestas');
            }
        } catch (error) {
            console.error('Error al guardar las respuestas:', error);
        }
    };

    return {
        listadoPreguntas,
        loading,
        currentStep,
        filteredPreguntas,
        respuestas,
        nextStep,
        prevStep,
        handleInputChange,
        saveEncuesta,
        validateStep
    };
}

export default useEncuesta;
