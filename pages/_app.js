import { Montserrat } from "@next/font/google";
import "../styles/app.scss";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: '--font-montserrat',
});

function MyApp({ Component, pageProps }) {
    return (
        <div className={`bg-white dark:bg-black font-sans ${montserrat.variable}`}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
