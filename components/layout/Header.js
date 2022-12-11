import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useContext } from "react";
import { name } from "config/vars";
import Avatar from "components/layout/Avatar";
import { SidebarContext } from "context/sidebarContext";

export default function Header() {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <header className="sticky top-0 left-0 right-0 bg-white dark:bg-black z-30 top-0 lg:hidden border-b border-light dark:border-dark-light">
            <div className="container">
                <div className="flex items-center h-[80px]">
                    <div className="cursor-pointer mr-[20px] text-black dark:text-white" onClick={() => toggleSidebar()}>
                        <Icon path={mdiMenu} size="30px" />
                    </div>

                    <div className="w-[50px] h-[50px] min-w-[50px]">
                        <Avatar />
                    </div>

                    <h1 className="ml-[20px] text-[18px] font-bold text-black dark:text-white">{name}</h1>
                </div>
            </div>
        </header>
    );
}
