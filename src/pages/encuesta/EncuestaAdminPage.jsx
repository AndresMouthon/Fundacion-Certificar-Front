import React from 'react';
import ButtonEncuesta from '../../components/encuesta/ButtonEncuesta';
import SteperEncuesta from '../../components/encuesta/SteperEncuesta';
import BuscadorHome from '../../components/home/BuscadorHome';
import useEncuesta from '../../hooks/useEncuesta';
import usePaciente from '../../hooks/usePaciente';
import Container from '../../utils/helpers/Container';

export default function EncuestaAdminPage() {

  const { paciente, handleChange, buscarPacienteDocumento, recargar } = usePaciente();
  const { filteredPreguntas, loading, currentStep, respuestas, nextStep, prevStep, handleInputChange, validateStep
  } = useEncuesta(paciente.Respuesta || [], paciente.id);

  if (loading) return <div>Loading...</div>;
  if (!filteredPreguntas.length) return <div>No hay preguntas disponibles para esta sección.</div>;
  const mostrarPregunta16 = respuestas[15] === 'Si';

  return (
    <div className='my-5'>
      <Container>
        <div className="flex flex-row items-center w-full">
          <div className="w-full">
            <span className='pl-2 text-gray-700'>Busque por cédula</span>
            <BuscadorHome paciente={paciente} handleChange={handleChange} buscar={buscarPacienteDocumento} />
          </div>
          {paciente.id && <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3' onClick={recargar}>Cancelar</button>}
        </div>
      </Container>
      {
        paciente.id &&
        <Container>
          <div className='flex flex-col sm:flex-row p-5 gap-0 sm:gap-12'>
            <SteperEncuesta currentStep={currentStep} />
            <div className='w-full'>
              <ul className='space-y-4'>
                {filteredPreguntas.length > 0 ? (
                  filteredPreguntas.map(pregunta => {
                    if (pregunta.id === 16 && !mostrarPregunta16) {
                      return null;
                    }
                    return (
                      <li key={pregunta.id} className="bg-gray-100 p-4 rounded-md shadow">
                        <p className="font-medium">{pregunta.pregunta}</p>
                        {
                          pregunta.tipo_pregunta === "options" ?
                            <div className="flex flex-col mt-2">
                              {
                                pregunta.OpcionPregunta.map((option, index) => (
                                  <label key={index} className="flex items-center space-x-2">
                                    <input
                                      type="radio"
                                      name={`pregunta-${pregunta.id}`}
                                      value={option.opcion}
                                      checked={respuestas[pregunta.id] === option.opcion}
                                      onChange={() => handleInputChange(pregunta.id, option.opcion)}
                                      className="form-radio"
                                    />
                                    <span>{option.opcion}</span>
                                  </label>
                                ))
                              }
                            </div>
                            :
                            <input
                              type="text"
                              value={respuestas[pregunta.id] || ''}
                              onChange={(e) => handleInputChange(pregunta.id, e.target.value)}
                              placeholder={`Ingrese su ${pregunta.pregunta.toLowerCase()}`}
                              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                            />
                        }
                      </li>
                    );
                  })
                ) : (
                  <li className="bg-gray-100 p-4 rounded-md shadow">No hay preguntas para esta sección.</li>
                )}
              </ul>
              <ButtonEncuesta loading={loading} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} validateStep={validateStep} />
            </div>
          </div>
        </Container>
      }
    </div>
  )
}
