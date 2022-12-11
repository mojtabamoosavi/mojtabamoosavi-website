import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "public/avatar.jpg";

export default function Avatar() {
    return (
        <Link href="/">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}>
                <Image
                    src={avatar}
                    alt="avatar"
                    className="inline-flex rounded-full w-fit h-fit select-none"
                    priority
                />
            </motion.div>
        </Link>
    );
}
