import { Montserrat } from "@next/font/google";
import "../styles/app.scss";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

function MyApp({ Component, pageProps }) {
    return (
        <div className={montserrat.className}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
