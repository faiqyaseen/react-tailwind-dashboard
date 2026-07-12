import { cn } from "../../utils/cn";

function Card({ children, className = "", ...props }) {
    return (
        <div className={cn(
            "rounded-xl",
            "border",
            "border-slate-200",
            "bg-white",
            "shadow-sm",
            className
        )} {...props}>
            {children}
        </div>
    );
}

function CardHeader({ children, className = "", }) {
    return (
        <div className={`px-6 pt-6 ${className}`}>
            {children}
        </div>
    );
}

function CardContent({ children, className = "" }) {
    return (
        <div className={`px-6 py-4 ${className}`}>
            {children}
        </div>
    );
}

function CardFooter({ children, className = "" }) {
    return (
        <div className={`border-t border-slate-200 px-6 py-4 ${className}`}>
            {children}
        </div>
    );
}

export default Card;

export { CardHeader, CardContent, CardFooter };