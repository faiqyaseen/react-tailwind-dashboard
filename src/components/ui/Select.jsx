import { cn } from "../../utils/cn";

export default function Select({options = [], className, ...props}) {
    return (
        <select
            {...props}
            className={cn(
                "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition-colors",
                "focus:border-slate-900",
                className
            )}
        >
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
}