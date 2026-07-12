import { useState } from "react";

import Button from "../../ui/Button";
import FormField from "../../ui/FormField";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const initialForm = {
    name: "",
    sku: "",
    category: "",
    price: "",
    stock: "",
    status: "Active",
};

export default function ProductForm({initialValues = initialForm, onSubmit}) {
    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        onSubmit(form);
    }

    function validate() {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Product name is required.";
        }

        if (!form.sku.trim()) {
            newErrors.sku = "SKU is required.";
        }

        if (!form.category.trim()) {
            newErrors.category = "Category is required.";
        }

        if (!form.price || Number(form.price) <= 0) {
            newErrors.price = "Price must be greater than 0.";
        }

        if (form.stock === "" || Number(form.stock) < 0) {
            newErrors.stock = "Stock cannot be negative.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Product Name" required helperText="Enter your product name" error={errors.name}>
                    <Input name="name" value={form.name} onChange={handleChange} placeholder="MacBook Air M4" />
                </FormField>

                <FormField label="SKU" error={errors.sku}>
                    <Input
                        name="sku"
                        value={form.sku}
                        onChange={handleChange}
                        placeholder="MBA-M4-001"
                    />
                </FormField>

                <FormField label="Category" error={errors.category}>
                    <Input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="Laptops"
                    />
                </FormField>

                <FormField label="Price" error={errors.price}>
                    <Input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                    />
                </FormField>

                <FormField label="Stock" error={errors.stock}>
                    <Input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                    />
                </FormField>

                <FormField label="Status" error={errors.status}>
                    <Select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Active",
                                value: "Active",
                            },
                            {
                                label: "Low Stock",
                                value: "Low Stock",
                            },
                            {
                                label: "Out of Stock",
                                value: "Out of Stock",
                            },
                        ]}
                    />
                </FormField>
            </div>

            <div className="flex justify-end gap-3">
                <Button type="submit">Save Product</Button>
            </div>
        </form>
    );
}

