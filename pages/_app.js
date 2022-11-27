import { ThemeProvider } from 'next-themes'
import { Inter } from "@next/font/google";
import "../styles/app.scss";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem={false} attribute="class" enableColorScheme={false}>
            <div className={`bg-white dark:bg-black font-sans ${inter.variable}`}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
