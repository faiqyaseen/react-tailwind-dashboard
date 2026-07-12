import PageHeader from "../../components/layout/PageHeader";
import Button from "../../components/ui/Button";
import StatCard from "../../components/dashboard/StatCard";
import { dashboardStats } from "../../data/dashboardStats";
import RecentOrders from "../../components/dashboard/RecentOrders";
import RecentCustomers from "../../components/dashboard/RecentCustomers";
import SalesChart from "../../components/dashboard/SalesChart";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";

export default function Dashboard() {
    return (
        <div className="p-6">
            <PageHeader title="Dashboard" description="Welcome back! Here's what's happening today.">
                <Button>Create Report</Button>
            </PageHeader>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map((stat) => (
                    <StatCard key={stat.title}{...stat} />
                ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <SalesChart />
                </div>

                <ActivityTimeline />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <RecentOrders />
                <RecentCustomers />
            </div>
        </div>
    );
}