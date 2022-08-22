type ButtonType = 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark';

interface IButtonProps {
    children: React.ReactNode;
    type?: ButtonType;
}

const getClassName = (type: ButtonType) => {
    const className = "rounded shadow-md px-8 py-1 transition-colors";

    switch (type) {
        case 'dark':
            return `${className} bg-gray-800 text-white font-bold hover:bg-gray-700`;
        default:
            return `${className} border-[1px] border-black font-bold hover:bg-black hover:text-white`;
    }
}

export const Button: React.FC<IButtonProps> = (props) => {
    const { children, type = 'primary' } = props;
    
    
    return (
        <button className={getClassName(type)}>
            {children}
        </button>
    );
}