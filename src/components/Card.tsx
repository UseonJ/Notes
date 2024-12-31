import { Text } from "./Text";
import { Divider } from "./Divider";

interface CardProps {
    leftText: string;
    rightText: string;
}

export const Card: React.FC<CardProps> = ({ leftText, rightText }) => {
    return <div className="card_container flex items-center">
        <Text content={leftText} />
        <Divider />
        <Text content={rightText} />
    </div>
}