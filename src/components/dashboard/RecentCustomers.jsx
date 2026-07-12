import Avatar from "../ui/Avatar";
import SectionCard from "./SectionCard";
import { recentCustomers } from "../../data/recentCustomers";

export default function RecentCustomers() {
    return (
        <SectionCard title="Recent Customers" description="Newest registered customers">
            <div className="space-y-4">
                {recentCustomers.map((customer) => (
                    <div key={customer.id} className="flex items-center gap-3">
                        <Avatar name={customer.name} size="md" />

                        <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-sm text-slate-500">{customer.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
}