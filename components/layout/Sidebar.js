import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Menu from "components/layout/Menu";

export default function Sidebar() {
    return (
        <div className="flex flex-col w-[300px] p-[40px] border-r border-light dark:border-dark-light fixed h-[100%] top-0">
            <Header />

            <Menu />

            <Footer />
        </div>
    );
}
