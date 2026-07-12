import { cn } from "../../utils/cn";

export default function Input({
    type = "text",
    className,
    ...props
}) {
    return (
        <input
            type={type}
            className={cn(
                "flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400",
                "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    );
}