import { useContext, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import SidebarHeader from "components/layout/SidebarHeader";
import SidebarFooter from "components/layout/SidebarFooter";
import SidebarMenu from "components/layout/SidebarMenu";
import { SidebarContext } from "context/sidebarContext";

export default function Sidebar() {
    const router = useRouter();
    const { isSidebarCollapsed, closeSidebar } = useContext(SidebarContext);

    const sidebarClassNames = classNames(
        "z-20 flex flex-col border-r border-light dark:border-dark-light transition-transform",
        "bg-white dark:bg-black",
        "p-[40px]",
        "w-[300px] max-w-[100%]",
        "fixed top-[80px] bottom-0 left-0 lg:top-0",
        { "translate-x-[-300px] lg:translate-x-0": isSidebarCollapsed },
    );

    useEffect(() => {
        const handleRouteChange = () => {
            closeSidebar();
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.keyCode === 27) {
                closeSidebar();
            }
        };

        document.addEventListener("keydown", handleKeyDown, false);

        return () => {
            document.removeEventListener("keydown", handleKeyDown, false);
        };
    }, []);

    return (
        <>
            <div className={sidebarClassNames}>
                <SidebarHeader />

                <SidebarMenu />

                <SidebarFooter />
            </div>

            {!isSidebarCollapsed &&
                <div
                    className="block lg:hidden fixed inset-0 z-10 bg-black/50"
                    onClick={() => closeSidebar()}
                />
            }
        </>
    );
}
