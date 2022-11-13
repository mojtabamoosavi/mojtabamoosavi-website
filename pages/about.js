import Layout from "../components/layout/Layout";

export default function About() {
    return (
        <Layout title="About">
            <div className="flex flex-1 items-center">
                <div className="container">
                    <div className="max-w-xl">
                        <div className="text-black dark:text-white">
                            <h1 className="text-4xl font-bold mb-5">About</h1>
                            <p>Hello! My name is Mojtaba Moosavi, I&rsquo;m a Front-End developer with over 10 years of professional experience, based in Tehran. I enjoy creating things that live on the internet.</p>
                        </div>

                        <div className="mt-8">
                            <a
                                className="bg-primary text-white py-2 px-4 rounded"
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noreferrer">
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
