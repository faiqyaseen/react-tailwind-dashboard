import { createContext, useContext, useState, } from "react";
import ToastContainer from "../components/ui/ToastContainer";

const ToastContext = createContext();

export function ToastProvider({children}) {
    const [toasts, setToasts] = useState([]);

    function show(message, type = "success") {
        const id = Date.now();

        setToasts((prev) => [ ...prev, { id, message, type } ]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    }

    return (
        <ToastContext.Provider
            value={{
                success: (msg) =>
                    show(msg, "success"),

                error: (msg) =>
                    show(msg, "error"),

                warning: (msg) =>
                    show(msg, "warning"),

                info: (msg) =>
                    show(msg, "info"),
            }}
        >
            {children}

            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}