import React from 'react'
import { FaIdCard, FaSearch } from 'react-icons/fa'
import SpinerUtil from '../../utils/spinner/SpinerUtil'

export default function BuscadorHome({ loading, handleChange, paciente, buscar }) {
    return (
        <div className="flex flex-col max-w-xl sm:w-full">
            <div className="relative flex items-center">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <FaIdCard className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name='documento' value={paciente.documento} onChange={handleChange} placeholder="Número de documento..." />
                </div>
                <button className="absolute flex items-center right-0 top-0 h-full px-4 text-sm font-medium text-white bg-blue-700 rounded-r-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={buscar}>
                    {
                        loading ? <SpinerUtil size={5} /> :
                            <>
                                <FaSearch className='w-4 h-4 mr-2' />
                                <span className='hidden sm:block'>Buscar</span>
                            </>
                    }
                </button>
            </div>
        </div>
    )
}
