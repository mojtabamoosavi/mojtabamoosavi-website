import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "components/layout/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="ml-[300px] flex flex-col flex-1">
                <div className="container flex-1 flex flex-col py-[100px]">
                    {children}
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}
