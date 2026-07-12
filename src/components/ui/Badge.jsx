import { cn } from "../../utils/cn";

const variants = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
};

export default function Badge({children, variant = "default", className, }) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}