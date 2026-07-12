import { X } from "lucide-react";

export default function Modal({open, title, children, onClose, footer}) {
    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 p-5">
                    <h2 className="text-lg font-semibold">{title}</h2>

                    <button onClick={onClose} className="rounded-lg p-2 hover:bg-slate-100">
                        <X size={18} />
                    </button>
                </div>

                <div className="p-5">{children}</div>

                {footer && (
                    <div className="flex justify-end gap-3 border-t border-slate-200 p-5">{footer}</div>
                )}
            </div>
        </div>
    );
}