interface TextProps {
    content: string;
    color?: string;
}

export const Text: React.FC<TextProps> = ({ content, color = "black" }) => {
    return <div className={`text-${color}`}>{content}</div>
}