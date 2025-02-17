// reserved componet for dividing sections
interface DividerProps {
    visible?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ visible = true }) => {
    return (
        <div className={visible ? "border-t border-b border-gray-300 mx-4 my-4" : "hidden"}>
        </div>
    );
};