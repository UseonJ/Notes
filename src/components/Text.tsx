interface TextProps {
    content: string;
}

export const Text: React.FC<TextProps> = ({ content }) => {
    return <div>{content}</div>
}