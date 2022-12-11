import Icon from "@mdi/react";
import { social } from "config/vars";
import ThemeSwitch from "components/layout/ThemeSwitch";

export default function SidebarFooter() {
    return (
        <footer>
            <div className="flex mb-[20px] justify-center">
                {social.map(item => {
                    return (
                        <a key={item.id} href={item.href} className="mr-[15px] text-black dark:text-white hover:text-primary dark:hover:text-primary transition">
                            <Icon path={item.icon} size="24px" />
                        </a>
                    );
                })}

                <ThemeSwitch />
            </div>

            <div className="text-muted text-[12px] text-center">
                <span>Powered by </span>
                <a href="https://nextjs.org" className="hover:text-primary" target="_blank" rel="noreferrer">Next.js</a>
                <span> & </span>
                <a href="https://github.com" className="hover:text-primary" target="_blank" rel="noreferrer">Github Pages</a>.
            </div>
        </footer>
    );
}
