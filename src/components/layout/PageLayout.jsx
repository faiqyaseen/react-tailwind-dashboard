export default function PageLayout({children, className = ""}) {
    return (
        <main className={`p-6 ${className}`}>
            {children}
        </main>
    );
}