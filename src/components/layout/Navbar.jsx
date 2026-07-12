import { Bell, Search, Menu } from "lucide-react";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth/auth.service";
import Avatar from "../ui/Avatar";
import Dropdown from "../ui/Dropdown";

export default function Navbar({ onToggleSidebar }) {
    const navigate = useNavigate();

    function handleLogout() {
        authService.logout();

        navigate("/login", {
            replace: true,
        });
    }
    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            <button onClick={onToggleSidebar} className="rounded-lg p-2 transition hover:bg-slate-100">
                <Menu size={20} />
            </button>
            <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search..." className="pl-10" />
            </div>
            <div className="flex items-center gap-4">
                <Dropdown trigger={
                    <button className="rounded-lg p-2 hover:bg-slate-100">
                        <Bell size={20} />
                    </button>
                }>
                    <div className="border-b p-4">
                        <h3 className="font-semibold">
                            Notifications
                        </h3>
                    </div>

                    <div className="p-4 text-sm text-slate-500">
                        No new notifications.
                    </div>
                </Dropdown>

                <Dropdown trigger={<Avatar name="Muhammad Faiq"/>}>
                    <button className="block w-full px-4 py-3 text-left hover:bg-slate-100">
                        Profile
                    </button>

                    <button className="block w-full px-4 py-3 text-left hover:bg-slate-100">
                        Settings
                    </button>

                    <button onClick={handleLogout} className="block w-full px-4 py-3 text-left text-red-600 hover:bg-red-50">
                        Logout
                    </button>
                </Dropdown>
            </div>
        </header>
    );
}