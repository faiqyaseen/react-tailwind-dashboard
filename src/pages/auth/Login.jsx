import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import FormField from "../../components/ui/FormField";
import { useLocation, useNavigate } from "react-router-dom";
import { authService } from "../../services/auth/auth.service";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    function handleSubmit(e) {
        e.preventDefault();

        authService.login();

        navigate(from, {replace: true});
    }

    return (
        <Card className="p-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-slate-900"> Welcome Back </h1>
                <p className="mt-2 text-slate-500"> Sign in to continue </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <FormField label="Email Address" required>
                    <Input type="email" placeholder="Enter your email" />
                </FormField>

                <FormField label="Password" required>
                    <Input type="password" placeholder="Enter your password" />
                </FormField>

                <Button type="submit" fullWidth> Sign In </Button>
            </form>
        </Card>
    );
}