import { cn } from "../../utils/cn";

export default function PageActions({children, className = ""}) {
    return (
        <div className={ cn("flex flex-wrap items-center gap-3", className) }>
            {children}
        </div>
    );
}