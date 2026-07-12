import Card from "../ui/Card";

export default function SectionCard({title, description, children, action}) {
    return (
        <Card className="p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
                    {description && (<p className="mt-1 text-sm text-slate-500">{description}</p>)}
                </div>
                {action && action}
            </div>
            {children}
        </Card>
    );
}