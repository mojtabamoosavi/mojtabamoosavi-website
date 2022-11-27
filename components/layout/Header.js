import Link from "next/link";
import ThemeSwitch from "components/layout/ThemeSwitch";
import ActiveLink from "components/base/ActiveLink";

const nav = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "About",
        href: "/about",
    },
    {
        id: 3,
        title: "Contact",
        href: "/contact",
    },
];

export default function Header() {
    return (
        <header className="py-6">
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
                                        <ActiveLink href={navItem.href} className="font-medium text-gray-500" activeClassName="text-black dark:text-white">
                                            <span>{navItem.title}</span>
                                        </ActiveLink>
                                    </li>
                                );
                            })}
                        </ul>

                        <ThemeSwitch />
                    </nav>
                </div>
            </div>
        </header>
    );
}
