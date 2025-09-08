import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg text-black py-4 px-10 flex justify-between items-center shadow-lg z-50">
            {/* Logo */}
            <div className="flex items-center">
                <img src="src/assets/CoffeeShopLogo.png" alt="Logo" className="w-12 h-12 rounded-full" />
                <h1 className="text-3xl font-bold ml-3 tracking-wide" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                    Zero Coffee
                </h1>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-10 text-lg font-semibold">
                <Link to="/" className="flex items-center gap-2 transition">
                    <FaHome /> Home
                </Link>
                <Link to="/shopPage" className="flex items-center gap-2 transition">
                    <FaShoppingCart /> Shop
                </Link>
                <Link to="/aboutUsPage" className="flex items-center gap-2 transition">
                    <FaInfoCircle /> About Us
                </Link>
                <Link to="/contactUsPage" className="flex items-center gap-2 transition">
                    <FaPhoneAlt /> Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
