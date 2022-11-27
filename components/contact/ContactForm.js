import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useForm } from "@formspree/react";
import { Input } from "components/formik/Input";
import { TextArea } from "components/formik/TextArea";

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
            {() => {
                return (
                    <Form>
                        {state.succeeded &&
                            <div className="mb-6 bg-emerald-500 text-white rounded px-2 py-2 text-sm text-center">Your message received successfully.</div>
                        }

                        <div className="grid grid-cols-6 gap-y-6 gap-x-5">
                            <div className="col-span-2">
                                <Input
                                    name="name"
                                    label="Name"
                                />
                            </div>

                            <div className="col-span-2">
                                <Input
                                    name="email"
                                    label="Email"
                                />
                            </div>

                            <div className="col-span-2">
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
                                <button
                                    disabled={state.submitting}
                                    type="submit"
                                    className="bg-primary text-white py-2 px-4 w-28 rounded">
                                    {state.submitting ? "Loading" : "Send"}
                                </button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}
