import { ThemeProvider } from 'next-themes'
import { Inter } from "@next/font/google";
import "../styles/app.scss";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

function MyApp({ Component, pageProps }) {
    return (
        <div className={`bg-white dark:bg-black font-sans ${inter.variable}`}>
            <ThemeProvider enableSystem={false} attribute="class" enableColorScheme={false}>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
}

export default MyApp;
