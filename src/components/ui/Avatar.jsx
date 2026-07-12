import { cn } from "../../utils/cn";

const sizes = {sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-14 w-14 text-lg"};

export default function Avatar({name, src, size = "md", className }) {
    const initials = name?.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    return (
        <div
            className={cn(
                "flex items-center justify-center overflow-hidden rounded-full bg-slate-900 font-semibold text-white",
                sizes[size],
                className
            )}
        >
            {src ? (<img src={src} alt={name} className="h-full w-full object-cover" />) : (initials)}
        </div>
    );
}