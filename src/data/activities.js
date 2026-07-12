import { ShoppingCart, UserPlus, Package, CreditCard } from "lucide-react";

export const activities = [
  {
    id: 1,
    title: "New order received",
    description: "#ORD-1028 from John Doe",
    time: "2 min ago",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "New customer registered",
    description: "Sarah Smith joined",
    time: "18 min ago",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Product updated",
    description: "MacBook Air M4 stock updated",
    time: "1 hour ago",
    icon: Package,
  },
  {
    id: 4,
    title: "Payment received",
    description: "$240 payment confirmed",
    time: "2 hours ago",
    icon: CreditCard,
  },
];
