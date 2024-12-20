import React from "react";
import UlSidebar from "./UlSidebar";

function Sidebar({ openAside }) {
    return (
        <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${!openAside && '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <UlSidebar />
            </div>
        </aside>
    )
}

export default Sidebar;
