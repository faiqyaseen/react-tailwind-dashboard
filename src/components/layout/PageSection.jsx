import { cn } from "../../utils/cn";

export default function PageSection({children, className = ""}) {
    return (
        <section className={ cn("rounded-xl border border-slate-200 bg-white p-6", className) }>
            {children}
        </section>
    );
}