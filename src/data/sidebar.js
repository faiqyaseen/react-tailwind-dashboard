import { LayoutDashboard, Package, ShoppingCart, Users, Settings } from "lucide-react";

export const sidebarItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        title: "Products",
        icon: Package,
        path: "/products",
    },
    {
        title: "Orders",
        icon: ShoppingCart,
        path: "/orders",
    },
    {
        title: "Customers",
        icon: Users,
        path: "/customers",
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/settings",
    },
];