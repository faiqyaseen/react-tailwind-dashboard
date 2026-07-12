export default function EmptyState({icon: Icon, title, description, action}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            {Icon && (
                <div className="mb-4 rounded-full bg-slate-100 p-4">
                    <Icon size={36} className="text-slate-500" />
                </div>
            )}

            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

            {description && (
                <p className="mt-2 max-w-md text-slate-500">{description}</p>
            )}

            {action && (<div className="mt-6">{action}</div>)}
        </div>
    );
}