import { products } from "../data/products";

let productList = [...products];

export const productService = {
    getAll() {
        return productList;
    },

    getById(id) {
        return productList.find((product) => product.id === Number(id));
    },

    create(product) {
        const newProduct = {...product, id: Date.now()};

        productList.push(newProduct);

        return newProduct;
    },

    update(id, data) {
        productList = productList.map((product) =>
            product.id === id ? {...product,...data} : product
        );
    },

    delete(id) {
        productList = productList.filter((product) => product.id !== id);
    },
};