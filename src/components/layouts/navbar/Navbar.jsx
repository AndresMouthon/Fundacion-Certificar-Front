import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { imagenes } from "../../../assets/img/imagenes";
import { RUTASSECRETARIA } from "../../../models/rutas.model";

const Navbar = React.memo(({ openNav, toggleNav, toggleAside, cerrarSesion }) => {

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400"
                            onClick={toggleAside}>
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" ></path>
                            </svg>
                        </button>
                        <Link to={RUTASSECRETARIA.PACIENTES} className="flex ms-2 md:me-24" >
                            <img src={imagenes.logo} className="h-12 me-1 w-28" alt="Logo pendiente..." />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                        <div>
                                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={toggleNav}>
                                    <div className="relative inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">
                                            AM
                                        </span>
                                        <span className="bottom-0 left-6 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                    </div>
                                </button>
                            </div>
                            {
                                openNav &&
                                <div className="z-50 absolute top-14 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <span className="bg-blue-100 text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                            Secretario
                                        </span>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none" >
                                            andresdomingomouthon541@gmail.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        {/* <li className="">
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-blue-700 hover:bg-blue-700 hover:text-white" role="menuitem" >
                                            <CgProfile className="h-5 w-5 mr-2" /> Mi cuenta
                                        </a>
                                    </li> */}
                                        <li>
                                            <button className="w-full flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-700 hover:text-white" role="menuitem" onClick={cerrarSesion} >
                                                <RiLogoutCircleLine className="h-5 w-5 mr-2" /> Salir
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
})

export default React.memo(Navbar);
