import { useEffect, useState } from "react";
import { Product } from "../models/Products";
import { fetchActiveProducts } from "../services/productService";
import { FaTrash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

const ShopDetails: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showPaymentForm, setShowPaymentForm] = useState(false); // New state
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const [totalPrice, setTotalPrice] = useState(0); 

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchActiveProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    useEffect(() => {
        const total = selectedProducts.reduce((sum, product) => {
            const quantity = quantities[product._id] || 1;
            const price = product.discountPrice || product.price;
            return sum + price * quantity;
        }, 0);
        setTotalPrice(total);
    }, [selectedProducts, quantities]);

    const handleAddToCart = (product: Product) => {
        setShowPopup(true);

        setSelectedProducts((prev) => {
            if (prev.find((p) => p._id === product._id)) return prev;
            return [...prev, product];
        });

        setQuantities((prev) => ({
            ...prev,
            [product._id]: 1,
        }));
    };

    const increaseQuantity = (productId: string) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 1) + 1,
        }));
    };

    const decreaseQuantity = (productId: string) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: prev[productId] > 1 ? prev[productId] - 1 : 1,
        }));
    };

    const removeFromCart = (productId: string) => {
        setSelectedProducts((prev) => prev.filter((p) => p._id !== productId));

        setQuantities((prev) => {
            const newQuantities = { ...prev };
            delete newQuantities[productId];
            return newQuantities;
        });
    };

    return (
        <div className="relative top-170 w-full p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => {
                    const imageUrl = product.image ? `${baseUrl}/${product.image}` : null;

                    return (
                        <div
                            key={product._id}
                            className="bg-gray-200 text-black rounded-md p-6 w-80 h-90 relative overflow-hidden"
                            style={{
                                boxShadow:
                                    "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                            }}
                        >
                            <div className="relative rounded-lg">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt={product.name}
                                        className="w-full h-40 object-cover rounded-md shadow-md"
                                    />
                                ) : (
                                    <p className="text-black text-center mt-4">No image available</p>
                                )}
                            </div>
                            <div className="mt-2 text-left">
                                <h2 className="text-lg font-bold text-black">{product.name}</h2>
                                <p className="text-black text-sm">Category: {product.category.name}</p>
                                <p className="text-black mt-1 text-sm truncate">{product.description}</p>
                                <div className="mt-2">
                                    {product.discountPrice ? (
                                        <p className="text-lg font-bold text-red-500">
                                            LKR {product.discountPrice}{" "}
                                            <span className="text-black line-through text-sm ml-2">
                                                LKR {product.price}
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="text-lg font-bold">LKR {product.price}</p>
                                    )}
                                </div>
                            </div>

                            <button
                                className="relative w-30 h-8 bg-black text-white font-semibold rounded-md transition duration-300"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to cart
                            </button>
                        </div>
                    );
                })}
            </div>

            {showPopup && (
                <div className="fixed top-20 right-10 w-96 h-auto bg-white shadow-lg rounded-lg p-5 border border-gray-200">
                    {showPaymentForm ? (
                        <div>
                            <button className="text-black mb-4" onClick={() => setShowPaymentForm(false)}>
                                <FaArrowLeft className="inline mr-2" /> 
                            </button>
                            <h1 className="font-bold text-3xl mb-4">Order Confirmation</h1>

                            <form>
                                <label className="block mb-2">Card Number</label>
                                <input type="text" className="w-full border p-2 rounded mb-4" placeholder="1234 5678 9012 3456" />

                                <label className="block mb-2">Card Holder Name</label>
                                <input type="text" className="w-full border p-2 rounded mb-4" placeholder="John Doe" />

                                <label className="block mb-2">Expiration Date</label>
                                <input type="text" className="w-full border p-2 rounded mb-4" placeholder="MM/YY" />

                                <label className="block mb-2">CVV</label>
                                <input type="text" className="w-full border p-2 rounded mb-4" placeholder="123" />

                                {/* <div className="mt-5 text-lg font-semibold text-black">Total Price: LKR {totalPrice}</div> */}

                                <button
                                    type="submit"
                                    className="w-full text-white py-2 rounded-md mt-5 flex justify-between items-center px-4"
                                    onClick={() => {
                                        // Trigger payment success alert
                                        alert("Payment Successfully");

                                        // Optionally reset or update states after the payment is successful
                                        setShowPopup(false); // Close the popup
                                        setSelectedProducts([]); // Clear selected products
                                        setQuantities({}); // Reset quantities
                                    }}
                                >
                                    <span className="text-black font-bold">Total Price: LKR {totalPrice}</span>
                                    <span className="bg-green-700 text-white py-1 px-4 rounded-md">Place Order</span>
                                </button>

                            </form>
                        </div>
                    ) : (
                        <div>
                            <h1 className="font-bold text-3xl">My Order</h1>

                            {selectedProducts.map((product) => (
                                <div key={product._id} className="flex items-center gap-4 mt-5">
                                    <img
                                        src={product.image ? `${baseUrl}/${product.image}` : "https://via.placeholder.com/80"}
                                        alt={product.name}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-gray-600">
                                            LKR {product.discountPrice || product.price} per unit
                                        </p>

                                        <div className="flex items-center gap-3 mt-2">
                                            <button className="px-2 py-1 bg-gray-300 rounded-md text-black" onClick={() => decreaseQuantity(product._id)}>
                                                -
                                            </button>
                                            <span className="text-lg font-semibold">{quantities[product._id]}</span>
                                            <button className="px-2 py-1 bg-gray-300 rounded-md text-black" onClick={() => increaseQuantity(product._id)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(product._id)}>
                                        <FaTrash className="text-red-500 text-lg hover:text-red-700" />
                                    </button>
                                </div>
                            ))}

                            <div className="mt-5 text-lg font-semibold text-black">Total Price: LKR {totalPrice}</div>

                            <button className="w-full bg-green-600 text-white py-2 rounded-md mt-5" onClick={() => setShowPaymentForm(true)}>
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShopDetails;
