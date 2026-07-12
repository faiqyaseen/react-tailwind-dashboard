import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

export default function SortButton({active = false, direction = null, onClick, children}) {
    function renderIcon() {
        if (!active) {
            return <ArrowUpDown size={16} />;
        }

        if (direction === "asc") {
            return <ArrowUp size={16} />;
        }

        return <ArrowDown size={16} />;
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-2 font-medium hover:text-slate-900"
        >
            <span>{children}</span>

            {renderIcon()}
        </button>
    );
}