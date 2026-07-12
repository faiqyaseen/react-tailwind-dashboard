import Toast from "./Toast";

export default function ToastContainer({ toasts }) {
    return (
        <div className="fixed right-5 top-5 z-[100] space-y-3">
            {toasts.map((toast) => (
                <Toast key={toast.id} message={toast.message} type={toast.type} />
            ))}
        </div>
    );
}