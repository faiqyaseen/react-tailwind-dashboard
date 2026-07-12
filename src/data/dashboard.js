import {
    DollarSign,
    ShoppingCart,
    Users,
    Wallet,
} from "lucide-react";

export const stats = [
    {
        title: "Total Sales",
        value: "$24,580",
        growth: "+12%",
        icon: DollarSign,
        trend: "up",
        period: "this month",
    },
    {
        title: "Orders",
        value: "1,248",
        growth: "-8%",
        icon: ShoppingCart,
        trend: "down",
        period: "this month",
    },
    {
        title: "Customers",
        value: "854",
        growth: "+15%",
        icon: Users,
        trend: "up",
        period: "this month",
    },
    {
        title: "Revenue",
        value: "$12,420",
        growth: "-5%",
        icon: Wallet,
        trend: "down",
        period: "this month",
    },
];

export const recentOrders = [
    {
        id: "#1023",
        customer: "Muhammad",
        total: "$220",
    },
    {
        id: "#1024",
        customer: "Ahmed",
        total: "$120",
    },
    {
        id: "#1025",
        customer: "Ali",
        total: "$410",
    },
    {
        id: "#1026",
        customer: "Hamza",
        total: "$180",
    },
];