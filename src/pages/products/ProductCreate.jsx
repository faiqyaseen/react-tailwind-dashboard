import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

import Button from "../../components/ui/Button";
import PageHeader from "../../components/layout/PageHeader";

import ProductForm from "../../components/products/ProductForm/ProductForm";
import PageLayout from "../../components/layout/PageLayout";
import PageSection from "../../components/layout/PageSection";

export default function ProductCreate() {
    const navigate = useNavigate();
    const { addProduct } = useProducts();

    return (
        <PageLayout>
            <PageHeader title="Add Product" description="Create a new product">
                <Button variant="secondary" onClick={() => navigate("/products")}>Back</Button>
            </PageHeader>

            <PageSection>
                <ProductForm onSubmit={(data) => {
                    addProduct(data);
                    navigate("/products");
                }}/>
            </PageSection>
        </PageLayout>
    );
}