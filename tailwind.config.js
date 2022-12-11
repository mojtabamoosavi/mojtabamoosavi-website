const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-montserrat)", ...fontFamily.sans],
            },
            colors: {
                primary: "#985aaa",
                muted: "#888",
                light: "#ddd",
                "dark-light": "#222",
            },
        },
        container: {
            center: true,
            padding: "30px",
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1200px",
            },
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1200px',
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
};
