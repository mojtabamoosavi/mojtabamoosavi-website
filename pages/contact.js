import Layout from "components/layout/Layout";
import ContactForm from "components/contact/ContactForm";
import { mdiEmailOutline, mdiPhoneOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function Contact() {
    return (
        <Layout title="Contact">
            <div className="container">
                <div className="mx-auto max-w-3xl">
                    <div className="text-black dark:text-white">
                        <h1 className="text-center text-4xl font-bold mb-16">Contact</h1>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-10">
                            <div className="relative flex gap-4 bg-gray-100 dark:bg-neutral-800 rounded overflow-hidden">
                                <div className="flex h-12 w-12 items-center justify-center bg-primary text-white h-auto">
                                    <Icon
                                        path={mdiEmailOutline}
                                        size="24px"
                                    />
                                </div>

                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="font-semibold text-gray-900 dark:text-white mt-1">Email</p>
                                    <p className="text-sm leading-7 text-gray-600 mb-1 dark:text-white">info [at] mojtabamoosavi@gmail.com</p>
                                </div>
                            </div>

                            <div className="relative flex gap-4 bg-gray-100 dark:bg-neutral-800 rounded overflow-hidden">
                                <div className="flex h-12 w-12 items-center justify-center bg-primary text-white h-auto">
                                    <Icon
                                        path={mdiPhoneOutline}
                                        size="24px"
                                    />
                                </div>

                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="font-semibold text-gray-900 dark:text-white mt-1">Phone</p>
                                    <p className="text-sm leading-7 text-gray-600 dark:text-white mb-1">+98 935 767 7182</p>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
