import { useNavigate, useParams } from "react-router-dom";

import PageHeader from "../../components/layout/PageHeader";
import ProductForm from "../../components/products/ProductForm/ProductForm";
import Button from "../../components/ui/Button";

import { useProducts } from "../../context/ProductContext";

export default function ProductEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {getProductById, updateProduct} = useProducts();
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="p-6">Product not found.</div>
        );
    }

    return (
        <div className="p-6">
            <PageHeader title="Edit Product" description="Update product details">
                <Button variant="secondary" onClick={() => navigate("/products")}>Back</Button>
            </PageHeader>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
                <ProductForm initialValues={product} onSubmit={(data) => {
                    updateProduct(product.id, data);
                    navigate("/products");
                }}/>
            </div>
        </div>
    );
}