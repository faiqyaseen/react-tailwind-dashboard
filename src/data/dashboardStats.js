import {DollarSign, ShoppingCart, Users, Package} from "lucide-react";

export const dashboardStats = [
    {
        title: "Revenue",
        value: "$24,560",
        change: "+12.5%",
        positive: true,
        description: "Compared to last month",
        icon: DollarSign,
    },
    {
        title: "Orders",
        value: "1,248",
        change: "+8.2%",
        positive: true,
        description: "Compared to last month",
        icon: ShoppingCart,
    },
    {
        title: "Customers",
        value: "842",
        change: "+5.7%",
        positive: true,
        description: "New customers",
        icon: Users,
    },
    {
        title: "Products",
        value: "327",
        change: "-2.1%",
        positive: false,
        description: "Active products",
        icon: Package,
    },
];