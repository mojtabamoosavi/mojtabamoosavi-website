import Link from "next/link";
import { useTheme } from "next-themes";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone } from "@mdi/js";

const nav = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "About",
        href: "/",
    },
    {
        id: 3,
        title: "Blog",
        href: "/",
    },
    {
        id: 4,
        title: "Projects",
        href: "/",
    },
    {
        id: 5,
        title: "Contact",
        href: "/",
    },
];

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="py-4">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-black dark:text-white">
                        <Link href="/">Mojtaba Moosavi</Link>
                    </div>

                    <nav className="flex items-center">
                        <ul className="flex">
                            {nav.map(navItem => {
                                return (
                                    <li key={navItem.id} className="mr-6 last:mr-0">
                                        <Link href={navItem.href} className="text-black dark:text-white">
                                            {navItem.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <button
                            className="ml-6 px-4 py-2 text-sm text-white dark:text-black bg-black dark:bg-white rounded-md"
                            onClick={() => {
                                setTheme(theme === "light" ? "dark" : "light");
                            }}>
                            Change Theme
                        </button>

                        <Icon path={mdiPhone} size="14px" className="ml-10" />
                    </nav>
                </div>
            </div>
        </header>
    );
}
