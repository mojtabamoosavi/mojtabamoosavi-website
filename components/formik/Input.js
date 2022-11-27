import { useField } from "formik";
import classNames from "classnames";
import ErrorMessage from "components/formik/ErrorMessage";

export function Input({ label, className, type, ...props }) {
    const [field, meta] = useField(props);

    const formControlClassName = classNames(
        "mt-1 block w-full rounded-md border-gray-300 dark:border-neutral-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-black",
        { "border-red-700 dark:border-red-700": meta.touched && meta.error },
        className,
    );

    return (
        <>
            {label && <label htmlFor={field.name} className="block text-sm font-medium text-gray-500">{label}</label>}

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
