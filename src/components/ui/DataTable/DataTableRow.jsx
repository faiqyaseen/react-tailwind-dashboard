export default function DataTableRow({row, columns}) {
    return (
        <tr className="border-b border-slate-100 hover:bg-slate-50">
            {columns.map((column) => (
                <td
                    key={column.key}
                    className="px-6 py-4"
                >
                    {column.render ? column.render(row) : row[column.key]}
                </td>
            ))}

        </tr>
    );
}