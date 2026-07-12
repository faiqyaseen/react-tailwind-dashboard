import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function SidebarNavItem({to, icon: Icon, children, collapsed}) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    "flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                    collapsed ? "justify-center" : "gap-3",
                    isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )
            }
        >
            {Icon && <Icon size={20} />}

            {!collapsed && <span>{children}</span>}
        </NavLink>
    );
}