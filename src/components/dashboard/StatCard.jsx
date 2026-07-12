import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";

export default function StatCard({title, value, change, positive, description, icon: Icon}) {
    return (
        <Card className="p-6">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-slate-500">
                        {title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                        {value}
                    </h3>
                </div>
                <div className="rounded-lg bg-slate-100 p-3">
                    <Icon size={22} />
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className={`flex items-center gap-1 text-sm font-medium ${
                        positive
                            ? "text-green-600"
                            : "text-red-600"
                    }`}
                >
                    {positive ? (
                        <ArrowUpRight size={16} />
                    ) : (
                        <ArrowDownRight size={16} />
                    )}

                    {change}
                </div>

                <p className="text-xs text-slate-500">
                    {description}
                </p>

            </div>

        </Card>
    );
}