import { cn } from "../../utils/cn";
import Spinner from "./Spinner";

const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100",
    ghost: "text-slate-700 hover:bg-slate-100",
};

const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    type = "button",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    loading = false,
    fullWidth = false,
    disabled = false,
    className,
    ...props
}) {

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={cn(
                "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            <>
                {loading ? (
                    <Spinner size="sm" className="mr-2" />
                ) : (
                    LeftIcon && (
                        <LeftIcon size={16} className="mr-2" />
                    )
                )}

                <span>{children}</span>

                {!loading && RightIcon && (<RightIcon size={16} className="ml-2" />)}
            </>
        </button>
    );
}