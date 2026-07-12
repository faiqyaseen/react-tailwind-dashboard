import { Navigate } from "react-router-dom";
import { authService } from "../services/auth/auth.service";

export default function GuestGuard({ children }) {
    if (authService.isAuthenticated()) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}