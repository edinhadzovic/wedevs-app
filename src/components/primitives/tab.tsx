interface ITabProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    active: boolean;
}

const getClassName = (active: boolean) => {
    const className = "px-2 cursor-pointer rounded-sm"

    return active ? `${className} font-bold text-white bg-gray-800` : `${className} hover:bg-gray-100`;
}

export const Tab: React.FC<ITabProps> = ({children, active, ...rest}) => {

    return (
        <button className={getClassName(active)} {...rest}>
            {children}
        </button>
    )
}