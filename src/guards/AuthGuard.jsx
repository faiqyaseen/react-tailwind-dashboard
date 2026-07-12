import { Navigate, useLocation } from "react-router-dom";
import { authService } from "../services/auth/auth.service";
import { ROUTES } from "../constants/routes";

export default function AuthGuard({ children }) {
    const location = useLocation();

    if (!authService.isAuthenticated()) {
        return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />;
    }

    return children;
}