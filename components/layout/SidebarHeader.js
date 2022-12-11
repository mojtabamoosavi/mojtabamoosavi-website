import Avatar from "components/layout/Avatar";
import { name, position } from "config/vars";

export default function SidebarHeader() {
    return (
        <header className="hidden lg:block mb-[40px]">
            <div className="text-center">
                <div className="inline-flex w-[120px] h-[120px] justify-center">
                    <Avatar />
                </div>
            </div>

            <div className="mt-4 text-center">
                <h1 className="text-[22px] font-bold text-black dark:text-white">{name}</h1>
                <h2 className="text-[16px] font-semibold text-muted">{position}</h2>
            </div>
        </header>
    );
}
