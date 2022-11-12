import Link from "next/link";

export default function Header() {
    return (
        <header className="py-4">
            <div className="container">
                <div className="flex justify-between">
                    <div className="text-lg font-semibold">
                        Mojtaba Moosavi
                    </div>

                    <nav>
                        <ul className="flex">
                            <li className="mr-6">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>

                            <li className="mr-6">
                                <Link href="/">
                                    About
                                </Link>
                            </li>

                            <li className="mr-6">
                                <Link href="/">
                                    Blog
                                </Link>
                            </li>

                            <li className="mr-6">
                                <Link href="/">
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link href="/">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
