import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "../pages/errors/NotFoundPage";
import ForbiddenPage from "../pages/errors/ForbiddenPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/LoginPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/Admin-Side/AdminDashboard";
import CustomerPage from "../pages/Admin-Side/UserPage";
import Products from "../pages/Admin-Side/Products";

const AppRouter = () => {
    // const { token, user } = useAuth();
    // const role = user?.role ? user.role.toUpperCase() : undefined;

    return (
        <Router>
            <Routes>
            <Route path="/login" element={<LoginPage />} />
                <Route path="/notFoundPage" element={<NotFoundPage />} />
                <Route path="/forbiddenPage" element={<ForbiddenPage />} />
                <Route path="/shopPage" element={<ShopPage />} />
                <Route path="/aboutUsPage" element={<AboutUsPage />} />
                <Route path="/contactUsPage" element={<ContactUsPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>

            <Routes>
            <Route path="/admin" element={<AdminLayout />} >
                    <Route index element={<Navigate to="/admin/dashboard" />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="customers" element={<CustomerPage />} />
                    <Route path="Products" element={<Products />} />
                </Route>
                {/* Admin Layout with Role Protection */}
            {/* {token && (role === "ADMIN" || role === "SUPER_ADMIN" || role === "USER") ? (
                <Route path="/admin" element={<AdminLayout />} >
                    <Route index element={<Navigate to="/admin/dashboard" />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="customers" element={<CustomerPage />} />
                    <Route path="Products" element={<Products />} />
                </Route>
            ):(
                <Route path="/admin/*" element={<Navigate to="/login" />} />
            )} */}
            </Routes>

            {/* <Route path="/admin" element={<AdminLayout />} >
                <Route index element={<Navigate to="/admin/dashboard" />} />
            </Route> */}
        </Router>
    );
}

export default AppRouter;
