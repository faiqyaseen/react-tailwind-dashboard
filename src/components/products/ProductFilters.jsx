import Input from "../ui/Input";
import { Search } from "lucide-react";

export default function ProductFilters({search, onSearchChange}) {
    return (
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>

                <Input
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search products..."
                    className="pl-10"
                />
            </div>
        </div>
    );
}