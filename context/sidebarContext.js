import React, { createContext, useState } from "react";

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const closeSidebar = () => {
        setIsSidebarCollapsed(true);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarCollapsed, toggleSidebar, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};
