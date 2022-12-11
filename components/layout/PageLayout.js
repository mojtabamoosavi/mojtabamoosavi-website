import Head from "next/head";
import { motion } from "framer-motion";

export default function MainLayout({ title, children }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <title>{title ? `Mojtaba Moosavi - ${title}` : "Mojtaba Moosavi"}</title>
            </Head>

            <motion.div
                key={title}
                className="flex-1 flex flex-col"
                transition={{ type: 'linear' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}>

                {title &&
                    <h1 className="text-[36px] font-bold mb-[50px] lg:mb-[50px] xl:mb-[100px] text-black dark:text-white">{title}</h1>
                }

                {children}
            </motion.div>
        </>
    );
}
