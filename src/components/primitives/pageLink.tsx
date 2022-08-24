import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface IPageLinkProps {
    children: React.ReactNode;
    to: string;
}

const getClassName = (active: boolean) => {
    const className = "rounded transition-colors cursor-pointer px-2 py-1 w-full";

    if (active) {
        return `${className} bg-sea-green font-bold`;
    }

    return `${className} hover:bg-gray-50 hover:font-bold`;
}

export const PageLink: React.FC<IPageLinkProps> = (props) => {
    const { children, to } = props;
    const resolved = useResolvedPath(to);
    const match = useMatch({path: resolved.pathname, end: true});

    return (
        <Link to={to} className={getClassName(match ? true : false)}>{children}</Link>
    );
}