import { Formik, Form } from "formik";
import { useForm } from "@formspree/react";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import * as Yup from "yup";
import Input from "components/formik/Input";
import TextArea from "components/formik/TextArea";
import Button from "components/base/Button";
import toast from "services/toast";

const validation = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    phone: Yup.number().required().label("Phone"),
    message: Yup.string().required().label("Message"),
});

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xdojvwzl");

    const handleFormSubmit = (values, actions) => {
        handleSubmit(values)
            .then(response => {
                if (response.response.status === 200) {
                    actions.resetForm();
                    toast("Your message received successfully.")
                }
            });
    };

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
            }}
            validationSchema={validation}
            onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
            {({ isSubmitting }) => {
                return (
                    <Form>
                        <div className="grid grid-cols-6 gap-y-[20px] gap-x-[20px] lg:gap-x-[30px]">
                            <div className="col-span-6 md:col-span-2">
                                <Input
                                    name="name"
                                    label="Name"
                                />
                            </div>

                            <div className="col-span-6 md:col-span-2">
                                <Input
                                    name="email"
                                    label="Email"
                                />
                            </div>

                            <div className="col-span-6 md:col-span-2">
                                <Input
                                    name="phone"
                                    label="Phone"
                                />
                            </div>

                            <div className="col-span-6">
                                <TextArea
                                    name="message"
                                    label="Message"
                                    rows="4"
                                />
                            </div>

                            <div className="col-span-2">
                                <Button
                                    className="w-[140px]"
                                    disabled={isSubmitting}
                                    type="submit">
                                    {isSubmitting ? <Icon path={mdiLoading} spin={0.5} size="24px" /> : "Send"}
                                </Button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}
