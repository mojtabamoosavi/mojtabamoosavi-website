import React, { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            closeSidebar();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
