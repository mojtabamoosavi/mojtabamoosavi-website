import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import avatar from "public/avatar.jpg";

export default function Header() {
    return (
        <header>
            <div className="text-center">
                <Link href="/">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}>
                        <Image
                            src={avatar}
                            alt="avatar"
                            className="inline-flex rounded-full w-[120px] h-[120px]"
                            priority
                        />
                    </motion.div>
                </Link>
            </div>

            <div className="mt-4 text-center">
                <h1 className="text-[22px] font-bold text-black dark:text-white">Mojtaba Moosavi</h1>
                <h2 className="text-[16px] font-semibold text-muted">Front-End Developer</h2>
            </div>
        </header>
    );
}
