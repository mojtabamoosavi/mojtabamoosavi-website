import Head from "next/head";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? `Mojtaba Moosavi - ${title}` : "Mojtaba Moosavi"}</title>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <Header />

                <div className="flex flex-col flex-1 mb-10 mt-20">
                    {children}
                </div>

                <Footer />
            </div>
        </>
    );
}
