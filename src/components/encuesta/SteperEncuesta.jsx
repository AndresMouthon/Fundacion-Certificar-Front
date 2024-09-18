import React from 'react';
import { FaGraduationCap, FaIdCard } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { GiHealthNormal } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';

const steps = [
    { id: 1, icon: <FaIdCard className="w-4 h-4" />, label: 'Información básica' },
    { id: 2, icon: <FaLocationDot className="w-4 h-4" />, label: 'Información de ubicación' },
    { id: 3, icon: <FaGraduationCap className="w-4 h-4" />, label: 'Información académica' },
    { id: 4, icon: <GiHealthNormal className="w-4 h-4" />, label: 'Información de salud y seguridad' },
    { id: 5, icon: <MdPermContactCalendar className="w-4 h-4" />, label: 'Contacto de emergencia' },
];

export default function SteperEncuesta({ currentStep }) {
    return (
        <ol className="relative flex flex-row sm:flex-col gap-4 sm:gap-0 items-start w-full sm:w-1/3 text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400 overflow-x-auto">
            {steps.map((step) => (
                <li key={step.id} className={`flex items-center mb-6 sm:mb-10 ${currentStep === step.id ? 'text-green-500' : ''}`}>
                    <span className={`flex items-center justify-center w-8 h-8 ${currentStep === step.id ? 'bg-green-200' : 'bg-gray-100'} rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700`}>
                        {step.icon}
                    </span>
                    <h3 className={`font-medium leading-tight hidden sm:block ms-4 ${currentStep === step.id ? 'text-green-500' : ''}`}>{step.label}</h3>
                </li>
            ))}
        </ol>
    );
}
