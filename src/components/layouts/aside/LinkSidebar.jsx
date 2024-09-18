import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function LinkSidebar({ item, activeSubroutes }) {
    const location = useLocation();

    const isActive = () => {
        if (location.pathname === item.link) {
            return true;
        }
        if (activeSubroutes) {
            return activeSubroutes.some((subroute) => location.pathname.startsWith(subroute));
        }
        return false;
    };

    const activeClass = isActive() ? 'bg-green-300 text-white' : '';
    const iconClass = isActive() ? 'text-white' : '';

    return (
        <li>
            <NavLink
                to={item.link}
                replace={true}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-300 dark:hover:bg-green-400 hover:text-white group ${activeClass}`}
            >
                <i
                    className={`fa fa-${item.icono} ${item.text} flex-shrink-0 w-5 text-xl mr-4 transition duration-75 dark:group-hover:text-white ${iconClass}`}
                ></i>
                <span className="flex-1 ms-3 mt-1 whitespace-nowrap">{item.texto}</span>
            </NavLink>
        </li>
    );
}

export default LinkSidebar;
