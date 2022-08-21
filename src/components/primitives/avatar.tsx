type AvatarSize = 'small' | 'medium' | 'large';

interface IAvatarProps {
    source: string;
    size?: AvatarSize;
}

const getClassName = (size: AvatarSize) => {
    const className = "rounded-full";

    switch (size) {
        case 'small':
            return `${className} w-12 h-12`;
        case 'medium':
            return `${className} w-16 h-16`;
        case 'large':
            return `${className} w-24 h-24`;
    }
}

export const Avatar: React.FC<IAvatarProps> = (props) => {
    const { source, size = "medium" } = props;

    return (
        <img className={getClassName(size)} src={source} alt="user avatar" />
    );
}