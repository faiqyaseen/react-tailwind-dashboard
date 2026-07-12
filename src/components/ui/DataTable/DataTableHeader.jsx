import SortButton from "../SortButton";

export default function DataTableHeader({columns}) {
    return (
        <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
                {columns.map((column) => (
                    <th key={column.key} className="px-6 py-4 text-left text-sm font-semibold">
                        {column.sortable ? (<SortButton>{column.label}</SortButton>) : (column.label)}
                    </th>
                ))}
            </tr>
        </thead>
    );
}