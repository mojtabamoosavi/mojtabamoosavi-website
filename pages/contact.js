import PageLayout from "components/layout/PageLayout";
import ContactForm from "components/contact/ContactForm";
import Icon from "@mdi/react";
import { contact } from "config/vars";

export default function Contact() {
    return (
        <PageLayout title="Contact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[30px] gap-x-[20px] lg:gap-x-[30px] mb-[50px]">
                {contact.map(item => {
                    return (
                        <div key={item.id} className="flex items-center md:items-start md:flex-col">
                            <div className="text-primary">
                                <Icon
                                    path={item.icon}
                                    size="36px"
                                />
                            </div>

                            <div className="ml-[20px] md:ml-0">
                                <p className="mt-[5px] font-semibold text-[14px] lg:text-[16px] text-black dark:text-white">
                                    {item.title}
                                </p>

                                <p className="mt-[5px] font-medium text-[14px] text-muted">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <ContactForm />
        </PageLayout>
    );
}
