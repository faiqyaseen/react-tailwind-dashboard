export const ROUTES = {
    LOGIN: "/login",
    DASHBOARD: "/dashbaord",
    PRODUCTS: "/products",
    PRODUCT_CREATE: "/products/create",
    PRODUCT_EDIT_PATH: "/products/:id/edit",

    productEdit: (id) => `/products/${id}/edit`,
};