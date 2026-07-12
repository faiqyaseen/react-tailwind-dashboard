import Badge from "../ui/Badge";
import SectionCard from "./SectionCard";
import { recentOrders } from "../../data/recentOrders";

const statusVariant = {Completed: "success", Pending: "warning", Cancelled: "danger"};

export default function RecentOrders() {
    return (
        <SectionCard title="Recent Orders" description="Latest customer orders">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
                            <th className="pb-3">Order</th>
                            <th className="pb-3">Customer</th>
                            <th className="pb-3">Amount</th>
                            <th className="pb-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id} className="border-b border-slate-100">
                                <td className="py-4 font-medium">{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.amount}</td>
                                <td>
                                    <Badge variant={statusVariant[order.status]}>{order.status}</Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SectionCard>
    );
}