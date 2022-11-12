import Head from "next/head";

export default function Layout({title, children}) {
    return (
        <>
            <Head>
                <title>{title ? title : 'Mojtaba Moosavi'}</title>
                <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>

            <div>
                {children}
            </div>

            {/*<p>I&rsquo;m a front end developer with +8 years of professional experience, based in Tehran.<br />*/}
            {/*    I&rsquo;m using the most sophisticated technologies available today for fully interactive<br />*/}
            {/*    and responsive websites and web applications.</p>*/}

            {/*<p>You can contact me through <a href="http://www.mojtabamoosavi.ir/contact">my contact page</a></p>*/}

            {/*<p>Download my Resume: <a href="http://www.mojtabamoosavi.ir/Resume_Mojtaba-Moosavi.pdf" target="_blank">Resume</a></p>*/}

            {/*<p>Thanks for reading!</p>*/}

            <footer className="footer">
                <section className="container">
                    © 2019 · Powered by <a href="https://nextjs.org">NextJS</a> & <a href="https://github.com">Github Pages</a>.
                </section>
            </footer>
        </>
    );
}
