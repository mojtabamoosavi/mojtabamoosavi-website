import ActiveLink from "components/base/ActiveLink";
import { menu } from "config/vars";

export default function Menu() {
    return (
        <nav className="flex-1 mt-[40px] text-center">
            <ul>
                {menu.map(navItem => (
                    <li key={navItem.id} className="mb-[20px] last:mb-0">
                        <ActiveLink
                            href={navItem.href}
                            className="text-[16px] font-bold transition text-black dark:text-white"
                            activeClassName="text-primary dark:text-primary">
                            <span>{navItem.title}</span>
                        </ActiveLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
