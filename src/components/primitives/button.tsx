type ButtonType = 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    version?: ButtonType;
}

const getClassName = (type: ButtonType) => {
    const className = "rounded shadow-md px-8 py-1 transition-colors";

    switch (type) {
        case 'dark':
            return `${className} bg-gray-800 text-white font-bold hover:bg-gray-700`;
        case 'secondary':
            return `${className} bg-sea-green text-white hover:bg-sea-green-dark font-bold`;
        case "warning":
            return `${className} border-[1px] border-gray-600 font-bold hover:bg-red-100 hover:border-red-200 hover:text-red-600`;
        default:
            return `${className} border-[1px] border-black font-bold hover:bg-black hover:text-white`;
    }
}

export const Button: React.FC<IButtonProps> = (props) => {
    const { children, version = 'primary', ...rest } = props;
    
    
    return (
        <button className={getClassName(version)} {...rest}>
            {children}
        </button>
    );
}