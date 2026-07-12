export default function Toast({message, type = "success"}) {
    const variants = {
        success: "bg-green-600",
        error: "bg-red-600",
        warning: "bg-yellow-500",
        info: "bg-slate-800",
    };

    return (
        <div className={`rounded-lg px-4 py-3 text-white shadow-lg ${variants[type]}`}>
            {message}
        </div>
    );
}