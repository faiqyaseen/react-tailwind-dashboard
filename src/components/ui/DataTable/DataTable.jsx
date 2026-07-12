import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";

export default function DataTable({columns, data, keyField = "id", emptyState = null}) {
    if (!data.length) {
        return emptyState;
    }

    return (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="min-w-full">
                <DataTableHeader columns={columns} />
                <tbody>
                    {data.map((row) => (
                        <DataTableRow key={row[keyField]} row={row} columns={columns} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}