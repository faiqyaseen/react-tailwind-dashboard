export default function FormField({ label, required = false, helperText, error, children }) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-medium text-slate-700">
                    {label}
                    {required && ( <span className="ml-1 text-red-500">*</span>)}
                </label>
            )}

            {children}

            {helperText && !error && ( <p className="text-sm text-slate-500">{helperText}</p> )}

            {error && ( <p className="text-sm text-red-600">{error}</p> )}
        </div>
    );
}