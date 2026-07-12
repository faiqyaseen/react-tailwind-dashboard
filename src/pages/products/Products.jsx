import PageHeader from "../../components/layout/PageHeader";
import Button from "../../components/ui/Button";
import { useProducts } from "../../context/ProductContext";
// import ProductTable from "../../components/products/ProductTable";
import { useEffect, useMemo, useState } from "react";
import ProductFilters from "../../components/products/ProductFilters";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "../../components/ui/ConfirmDialog";
import { useToast } from "../../context/ToastContext";
import { PackageSearch } from "lucide-react";
import EmptyState from "../../components/ui/EmptyState";
import Pagination from "../../components/ui/Pagination";
import DataTable from "../../components/ui/DataTable";
import Badge from "../../components/ui/Badge";
import { Pencil, Trash2 } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";
import { ROUTES } from "../../constants/routes";
import PageActions from "../../components/layout/PageActions";


export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const { products: _products, deleteProduct } = useProducts();
    const products = [..._products].reverse();

    const toast = useToast();

    const navigate = useNavigate();

    const filteredProducts = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        if (!keyword) {
            return products;
        }

        return products.filter((product) => {
            return (
                product.name.toLowerCase().includes(keyword) ||
                product.sku.toLowerCase().includes(keyword) ||
                product.category.toLowerCase().includes(keyword)
            );
        });
    }, [products, search]);

    const pageSize = 9;

    const paginatedProducts = filteredProducts.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    useEffect(() => {
        setPage(1);
    }, [search]);

    function handleDelete() {
        if (!selectedProduct) return;

        deleteProduct(selectedProduct.id);

        const remainingProducts = filteredProducts.length - 1;
        const totalPages = Math.ceil(remainingProducts / pageSize);

        if (page > totalPages && page > 1) {
            setPage(page - 1);
        }

        toast.success("Product deleted successfully.");

        setSelectedProduct(null);
    }

    const tableColumns = columns(navigate, setSelectedProduct)

    return (
        <div className="p-6">
            <PageHeader title="Products" description="Manage your products">
                <PageActions>
                    <Button variant="secondary">Export</Button>
                    <Button onClick={() => navigate(ROUTES.PRODUCT_CREATE)}>Add Product</Button>
                </PageActions>
            </PageHeader>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
                <>
                    <ProductFilters search={search} onSearchChange={setSearch} />

                    {/* {filteredProducts.length > 0 ? ( */}
                    {/* <ProductTable products={paginatedProducts} onDelete={setSelectedProduct} /> */}
                    <DataTable
                        columns={tableColumns}
                        data={paginatedProducts}
                        emptyState={
                            <EmptyState
                                icon={PackageSearch}
                                title="No products found"
                                description="Try changing your search or create a new product."
                                action={
                                    <Button onClick={() => navigate(ROUTES.PRODUCT_CREATE)}>
                                        Add Product
                                    </Button>
                                }
                            />
                        }
                    />
                    {/* ) : (
                        <EmptyState
                            icon={PackageSearch}
                            title="No products found"
                            description="Try changing your search or create a new product."
                            action={
                                <Button onClick={() => navigate("/products/create")}>
                                    Add Product
                                </Button>
                            }
                        />
                    )} */}
                </>
            </div>
            <Pagination
                currentPage={page}
                totalPages={Math.ceil(filteredProducts.length / pageSize)}
                onPageChange={setPage}
            />

            <ConfirmDialog
                open={selectedProduct !== null}
                title="Delete Product"
                message={
                    selectedProduct
                        ? `Are you sure you want to delete "${selectedProduct.name}"?`
                        : ""
                }
                confirmText="Delete"
                onCancel={() => setSelectedProduct(null)}
                onConfirm={handleDelete}
            />
        </div>
    );
}

function columns(navigate, setSelectedProduct) {
    return [
        {
            key: "name",
            label: "Product",
            sortable: true,
        },
        {
            key: "sku",
            label: "SKU",
        },
        {
            key: "category",
            label: "Category",
        },
        {
            key: "price",
            label: "Price",
            render: (row) => formatCurrency(row.price),
            sortable: true
        },
        {
            key: "stock",
            label: "Stock",
        },
        {
            key: "status",
            label: "Status",
            render: (row) => (
                <Badge
                    variant={
                        row.status === "Active"
                            ? "success"
                            : row.status === "Low Stock"
                                ? "warning"
                                : "danger"
                    }
                >
                    {row.status}
                </Badge>
            ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (row) => (
                <div className="flex gap-2">

                    <Button
                        variant="secondary"
                        leftIcon={Pencil}
                        onClick={() =>
                            navigate(ROUTES.productEdit(row.id))
                        }
                    >
                        Edit
                    </Button>

                    <Button
                        variant="danger"
                        leftIcon={Trash2}
                        onClick={() =>
                            setSelectedProduct(row)
                        }
                    >
                        Delete
                    </Button>

                </div>
            ),
        },
    ];
}