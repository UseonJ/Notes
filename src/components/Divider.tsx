interface DividerProps {
    visible?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ visible = false }) => {
    return (
        <div className={visible ? "border-t border-b border-gray-300 my-4" : "hidden"}>
        </div>
    );
};