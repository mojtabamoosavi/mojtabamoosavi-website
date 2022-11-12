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

                <div className="flex flex-col flex-1">
                    {children}
                </div>

                <Footer />
            </div>

            {/*<p>I&rsquo;m a front end developer with +8 years of professional experience, based in Tehran.<br />*/}
            {/*    I&rsquo;m using the most sophisticated technologies available today for fully interactive<br />*/}
            {/*    and responsive websites and web applications.</p>*/}

            {/*<p>You can contact me through <a href="http://www.mojtabamoosavi.ir/contact">my contact page</a></p>*/}

            {/*<p>Download my Resume: <a href="http://www.mojtabamoosavi.ir/Resume_Mojtaba-Moosavi.pdf" target="_blank">Resume</a></p>*/}

            {/*<p>Thanks for reading!</p>*/}
        </>
    );
}
