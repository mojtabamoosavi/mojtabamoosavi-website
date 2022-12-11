import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "components/layout/Sidebar";
import Header from "components/layout/Header";

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <Header />

            <Sidebar />

            <div className="lg:ml-[300px] flex flex-col flex-1">
                <div className="container flex-1 flex flex-col py-[30px] lg:py-[50px] xl:py-[100px]">
                    {children}
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}
