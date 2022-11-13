import { ThemeProvider } from 'next-themes'
import { Montserrat } from "@next/font/google";
import "../styles/app.scss";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: '--font-montserrat',
});

function MyApp({ Component, pageProps }) {
    return (
        <div className={`bg-white dark:bg-black font-sans ${montserrat.variable}`}>
            <ThemeProvider enableSystem={false} attribute="class" enableColorScheme={false}>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
}

export default MyApp;
