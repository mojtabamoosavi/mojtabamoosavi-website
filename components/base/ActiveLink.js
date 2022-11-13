import React, { Children } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const asPath = usePathname();
    const child = Children.only(children);
    const childClassName = child.props.className || "";
    const activeClassNames = classnames(childClassName, activeClassName);

    const className =
        asPath === props.href || asPath === props.as ? activeClassNames : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

export default ActiveLink;
