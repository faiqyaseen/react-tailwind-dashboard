import { useEffect, useRef, useState } from "react";

export default function Dropdown({trigger, children, align = "right"}) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
                {trigger}
            </div>

            {open && (
                <div className={`
                        absolute z-50 mt-2 w-64 rounded-xl border border-slate-200
                        bg-white shadow-lg
                        ${
                            align === "right"
                                ? "right-0"
                                : "left-0"
                        }
                    `}
                >
                    {children}
                </div>
            )}
        </div>
    );
}