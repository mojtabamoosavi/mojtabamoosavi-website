import PageLayout from "components/layout/PageLayout";
import Button from "components/base/Button";

export default function Home() {

    const downloadCV = () => {
        window.open('/Resume.pdf', '_blank')
    }

    return (
        <PageLayout>
            <div className="flex flex-1 justify-center items-center">
                <div className="max-w-[500px]">
                    <h1 className="text-[50px] lg:text-[70px] uppercase font-black leading-none text-black dark:text-white">Hello,</h1>

                    <p className="mt-[30px] lg:mt-[40px] text-[18px] text-muted">
                        I am Mojtaba Moosavi, Front-End developer with
                        over 10 years of professional experience, based in Tehran. I enjoy creating things that live on
                        the internet.
                    </p>

                    <div className="mt-[30px] lg:mt-[40px]">
                        <Button className="w-auto" onClick={() => downloadCV()}>
                            Download my CV
                        </Button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
