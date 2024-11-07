import React from 'react';
import SpinerUtil from '../../utils/spinner/SpinerUtil';

export default function ButtonEncuesta({ loading, currentStep, prevStep, nextStep, validateStep }) {

    const isButtonDisabled = !validateStep(currentStep);

    return (
        <div className='flex justify-between mt-20'>
            {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400">
                    Anterior
                </button>
            )}
            {(currentStep > 0 && currentStep < 6) && (
                <button type="button" onClick={nextStep} disabled={isButtonDisabled}
                    className={`ml-auto px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} >
                    {loading ? <SpinerUtil size={5} /> : currentStep === 5 ? 'Terminar' : 'Siguiente'
                    }
                </button>
            )}
        </div>
    )
}
