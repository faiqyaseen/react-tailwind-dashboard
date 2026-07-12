import { sidebarItems } from "../../data/sidebar";
import SidebarNavItem from "./SidebarNavItem";
import { APP } from "../../config/app";

export default function Sidebar({ collapsed }) {
    return (
        <aside
            className={
                `flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ${collapsed ? "w-20" : "w-72"}`
            }
        >
            <div className="flex h-16 items-center border-b border-slate-200 px-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white">
                    LOGO
                </div>
                {!collapsed && (
                    <div className="ml-3">
                        <h2 className="font-semibold text-slate-900">
                            {APP.NAME}
                        </h2>

                        <p className="text-xs text-slate-500">
                            Admin Dashboard
                        </p>
                    </div>
                )}
            </div>
            <nav className="flex-1 p-3">
                <ul className="space-y-1">
                    {sidebarItems.map((item) => (
                        <li key={item.path}>
                            <SidebarNavItem to={item.path} icon={item.icon} collapsed={collapsed}>
                                {item.title}
                            </SidebarNavItem>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}