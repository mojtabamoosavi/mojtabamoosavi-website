import { ErrorMessage } from "formik";

const CustomErrorMessage = ({ name }) => {
    return <ErrorMessage component="span" className="mt-1 text-xs text-red-700" name={name} />;
};

export default CustomErrorMessage;
