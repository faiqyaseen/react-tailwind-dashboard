import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import SectionCard from "./SectionCard";
import { salesChartData } from "../../data/salesChart";

export default function SalesChart() {
    return (
        <SectionCard title="Sales Overview" description="Revenue for the last 7 months">
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="#0f172a" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </SectionCard>
    );
}