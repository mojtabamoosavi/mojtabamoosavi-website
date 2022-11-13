import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? `Mojtaba Moosavi - ${title}` : "Mojtaba Moosavi"}</title>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <Header />

                <div className="flex flex-col flex-1 my-10">
                    {children}
                </div>

                <Footer />
            </div>
        </>
    );
}
