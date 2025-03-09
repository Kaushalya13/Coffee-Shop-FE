import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/errors/NotFoundPage";
import ForbiddenPage from "../pages/errors/ForbiddenPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import Login from "../pages/Login";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/Admin-Side/UserPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/notFoundPage" element={<NotFoundPage />} />
                <Route path="/forbiddenPage" element={<ForbiddenPage />} />
                <Route path="/aboutUsPage" element={<AboutUsPage />} />
                <Route path="/contactUsPage" element={<ContactUsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
