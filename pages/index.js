import Layout from "../components/layout/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-1 justify-center items-center text-center">
                <div>
                    <h1 className="text-4xl font-bold">Mojtaba Moosavi</h1>
                    <h2 className="text-2xl text-gray-400 mt-2">Front-End Developer</h2>
                </div>
            </div>
        </Layout>
    );
}
