import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const LoginPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
    // const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser(email, password);
            console.log("Login Response:", data); // Debugging

            const token = data.token;
            const role = data.user?.role;

            if (!token || !role) {
                throw new Error("Invalid response from server");
            }

            // login(token, role);

            if (["ADMIN", "SUPER_ADMIN", "USER"].includes(role?.toUpperCase())) {
                console.log("navigate to dashboard");  // Debugging
                navigate("/admin/dashboard");
            } else {
                console.log("navigate for forbidden");  // Debugging
                navigate("/");
            }

        } catch (err) {
            console.error("Login Error:", err); // Better debugging
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="h-screen">
            <div>
                <img src="src/assets/mainPage.png" alt="mainPage" className="w-140 h-140 object-cover absolute top-23 left-30 rounded-3xl" 
                style={{
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                  }}/>

                  <h1 className="text-black text-6xl absolute top-20 right-60">Welcome Back</h1>
                  <h3 className="text-black text-2xl  absolute top-40 right-70">Enter your account details </h3>

                  <form onSubmit={handleSubmit} >
                    {/* Input deatils*/}
                    <div className="relative p-5">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            className="absolute right-50 top-70 w-110 h-10 px-2 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            className="absolute right-50 top-90 w-110 h-10  px-2 pr-10 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-52 top-95 transform -translate-y-1/2 text-black-500 hover:text-gray-500"
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>

                        <h3 className="text-black font-bold text-xl absolute top-105 right-50">Forget Password</h3>

                        {/* SignIn Button */}
                        <button 
                            type="submit"
                            className="absolute right-90 top-120 w-30 h-10 bg-black border border-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                  </form>
                  

                <div>
                    <div className="flex items-center absolute bottom-30 right-50 w-110">
                        <div className="flex-grow border-t border-black"></div>
                        <h3 className="text-black text-2xl mx-4">OR</h3>
                        <div className="flex-grow border-t border-black"></div>
                    </div>
                    <h3 className="text-black text-xl  absolute bottom-10 right-65">Don't you have account ? Sign Up </h3>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;


