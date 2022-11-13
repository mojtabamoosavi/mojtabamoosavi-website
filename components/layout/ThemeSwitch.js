import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="ml-6 w-[24px] h-[24px]" />;
    }

    return (
        <button
            className="ml-6 w-[24px] h-[24px] text-black dark:text-white"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}>
            <Icon
                path={theme === "light" ? mdiWeatherNight : mdiWhiteBalanceSunny}
                size="24px"
            />
        </button>
    );
};

export default ThemeSwitch;
