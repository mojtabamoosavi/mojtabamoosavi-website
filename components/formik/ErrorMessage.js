import { ErrorMessage } from "formik";

const CustomErrorMessage = ({ name }) => {
    return (
        <ErrorMessage
            component="span"
            className="mt-1 text-[12px] text-red-700"
            name={name}
        />
    );
};

export default CustomErrorMessage;
