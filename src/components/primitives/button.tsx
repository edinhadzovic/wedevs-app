type ButtonType = 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark';

interface IButtonProps {
    children: React.ReactNode;
    type?: ButtonType;
}

const getClassName = (type: ButtonType) => {
    const className = "rounded px-8 py-1 transition-colors";

    switch (type) {
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