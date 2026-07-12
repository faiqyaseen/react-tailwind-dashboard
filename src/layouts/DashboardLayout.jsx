import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import useLocalStorage from "../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../constants/storage";

export default function DashboardLayout() {
    const [collapsed, setCollapsed] = useLocalStorage(
        STORAGE_KEYS.SIDEBAR_COLLAPSED,
        false
    );

    function toggleSidebar() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar collapsed={collapsed} />

            <div className="flex min-w-0 flex-1 flex-col">
                <Navbar collapsed={collapsed} onToggleSidebar={toggleSidebar}/>

                <main className="flex-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}