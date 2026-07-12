import { createContext, useContext, useState } from "react";
import { products as initialProducts } from "../data/products";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(initialProducts);

    function addProduct(product) {
        const newProduct = {...product, id: Date.now()};
        setProducts((prev) => [...prev, newProduct]);
    }

    function updateProduct(id, updatedProduct) {
        setProducts((prev) => prev.map((product) =>
            product.id === id ? { ...product, ...updatedProduct } : product
        ));
    }

    function deleteProduct(id) {
        setProducts((prev) => prev.filter((product) => product.id !== id));
    }

    function getProductById(id) {
        return products.find((product) => product.id === Number(id));
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                addProduct,
                updateProduct,
                deleteProduct,
                getProductById,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    return useContext(ProductContext);
}