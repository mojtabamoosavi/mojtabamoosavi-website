import { ThemeProvider } from "next-themes";
import { Montserrat } from "@next/font/google";
import MainLayout from "components/layout/MainLayout";
import { SidebarProvider } from "context/sidebarContext";
import "styles/app.scss";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem={false} attribute="class" enableColorScheme={false}>
            <SidebarProvider>
                <div className={`bg-white dark:bg-black font-sans ${montserrat.variable}`}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default MyApp;
