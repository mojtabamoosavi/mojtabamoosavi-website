import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js";
import { motion } from "framer-motion";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[24px] h-[24px]" />;
    }

    return (
        <motion.div
            className="inline-flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <button
                className="w-[24px] h-[24px] text-black dark:text-white hover:text-primary dark:hover:text-primary transition"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <Icon
                    path={theme === "light" ? mdiWeatherNight : mdiWhiteBalanceSunny}
                    size="24px"
                />
            </button>
        </motion.div>
    );
};

export default ThemeSwitch;
