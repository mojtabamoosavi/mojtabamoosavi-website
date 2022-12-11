import { useField } from "formik";
import classnames from "classnames";
import ErrorMessage from "components/formik/ErrorMessage";

function TextArea({ label, className, ...props }) {
    const [field, meta] = useField(props);

    const formControlClassName = classnames(
        "block w-full sm:text-sm",
        "text-black dark:text-white",
        "border-light dark:border-dark-light",
        "bg-white dark:bg-black",
        "focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary",
        { "border-red-700 dark:border-red-700": meta.touched && meta.error },
        className,
    );

    return (
        <>
            {label &&
                <label htmlFor={field.name} className="block mb-[5px] text-[14px] font-medium text-muted">
                    {label}
                </label>
            }

            <textarea
                {...field}
                {...props}
                className={formControlClassName}
                value={field.value || ""}
            />

            <ErrorMessage {...props} />
        </>
    );
};

export default TextArea;
