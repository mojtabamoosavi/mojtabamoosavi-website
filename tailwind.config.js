const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-lato)', ...fontFamily.sans],
            },
            spacing: {},
            colors: {},
        },
        lineHeight: {},
        fontSize: {},
        container: {
            center: true,
            padding: "15px",
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
        },
    },
    plugins: [],
};
