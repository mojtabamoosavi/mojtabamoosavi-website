import Image from "next/image";
import Layout from "components/layout/Layout";
import avatar from 'public/avatar.jpg'

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-1 justify-center items-center">
                <div className="flex flex-col items-center">
                    <Image src={avatar} alt="avatar" className="mb-6 rounded-full border border-4 border-primary" priority />
                    <h1 className="text-4xl font-bold text-black dark:text-white">Mojtaba Moosavi</h1>
                    <h2 className="text-xl text-gray-400 mt-3">Front-End Developer</h2>
                </div>
            </div>
        </Layout>
    );
}
