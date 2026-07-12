import { createBrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

import Products from "../pages/products/Products";
import ProductCreate from "../pages/products/ProductCreate";
import ProductEdit from "../pages/products/ProductEdit";

import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import { ROUTES } from "../constants/routes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={ROUTES.DASHBOARD} replace />,
    },

    {
        element: (
            <GuestGuard>
                <AuthLayout />
            </GuestGuard>
        ),
        children: [
            {
                path: ROUTES.LOGIN,
                element: <Login />,
            },
        ],
    },

    {
        element: (
            <AuthGuard>
                <DashboardLayout />
            </AuthGuard>
        ),
        children: [
            {
                path: ROUTES.DASHBOARD,
                element: <Dashboard />,
            },
            {
                path: ROUTES.PRODUCTS,
                element: <Products />,
            },
            {
                path: ROUTES.PRODUCT_CREATE,
                element: <ProductCreate />,
            },
            {
                path: ROUTES.PRODUCT_EDIT_PATH,
                element: <ProductEdit />,
            }
        ],
    },

    {
        path: "*",
        element: <Navigate to={ROUTES.DASHBOARD} replace />,
    },
]);

export default router;