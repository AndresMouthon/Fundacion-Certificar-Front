import React from "react";

function OpcionesVerPaciente({ sections, activeSection, setActiveSection }) {
    return (
        <>
            {/* Mobile Menu */}
            <div className="sm:hidden w-full">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg p-2 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white">
                    <div className="flex flex-col">
                        {sections.map((seccion) => (
                            <button
                                onClick={() => setActiveSection(seccion.id)}
                                className={`flex items-center p-3 text-left text-xs ${activeSection === seccion.id ? "bg-purple-500 text-white" : "bg-white"} border-b border-gray-200 hover:bg-purple-200 dark:hover:bg-purple-600 dark:bg-gray-800 dark:text-white`}
                                key={seccion.id}
                            >
                                {seccion.icon}
                                {seccion.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <ul className="hidden sm:flex text-sm font-semibold text-center text-gray-500 rounded-lg shadow w-full mb-2">
                {sections.map((seccion) => (
                    <li className="flex-1" key={seccion.id}>
                        <button
                            onClick={() => setActiveSection(seccion.id)}
                            className={`inline-flex items-center justify-center text-sm w-full h-full p-3 border-r border-gray-200 hover:bg-blue-300 transition-all duration-200 ${activeSection === seccion.id ? "bg-blue-500 text-white" : ""}`}
                        >
                            {seccion.icon}
                            {seccion.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default OpcionesVerPaciente;
