import { useField } from "formik";
import classNames from "classnames";
import ErrorMessage from "components/formik/ErrorMessage";

function Input({ label, className, type, ...props }) {
    const [field, meta] = useField(props);

    const formControlClassName = classNames(
        "block w-full h-[50px] sm:text-sm",
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

            <input
                {...field}
                {...props}
                type="text"
                className={formControlClassName}
                value={field.value || ""}
            />

            <ErrorMessage {...props} />
        </>
    );
}

export default Input;
