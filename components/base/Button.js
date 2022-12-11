import classNames from "classnames";

export default function Button({ className, children, ...props }) {

    const buttonClassNames = classNames(
        "inline-flex border-primary border-[3px] h-[40px] lg:h-[50px] px-[24px] inline-flex justify-center items-center",
        "transition text-[14px] font-bold text-white hover:text-primary bg-primary hover:bg-white dark:hover:bg-black",
        className,
    );

    return (
        <button className={buttonClassNames} {...props}>
            {children}
        </button>
    );
}
