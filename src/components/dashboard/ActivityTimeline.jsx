import SectionCard from "./SectionCard";
import { activities } from "../../data/activities";

export default function ActivityTimeline() {
    return (
        <SectionCard title="Recent Activity" description="Latest system activity">
            <div className="space-y-6">
                {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                        <div key={activity.id} className="flex gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                                <Icon size={18} />
                            </div>

                            <div className="flex-1">
                                <p className="font-medium text-slate-900">
                                    {activity.title}
                                </p>

                                <p className="text-sm text-slate-500">
                                    {activity.description}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionCard>
    );
}