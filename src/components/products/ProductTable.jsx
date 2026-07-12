import Badge from "../ui/Badge";
import { useNavigate } from "react-router-dom";

const statusVariants = {
    "Active": "success",
    "Low Stock": "warning",
    "Out of Stock": "danger",
};

export default function ProductTable({ products, onDelete, }) {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
                        <th className="pb-4">Product</th>
                        <th className="pb-4">SKU</th>
                        <th className="pb-4">Category</th>
                        <th className="pb-4">Price</th>
                        <th className="pb-4">Stock</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-b border-slate-100">
                            <td className="py-4 font-medium">{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Badge variant={ statusVariants[product.status] }>{product.status}</Badge>
                            </td>
                            <td>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate(`/products/${product.id}/edit`)}
                                        className="rounded-lg border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => onDelete(product)}
                                        className="rounded-lg border border-red-200 px-3 py-1 text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}