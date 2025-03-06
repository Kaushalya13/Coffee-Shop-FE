import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const SignUpPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="h-screen relative">
            {/* Close Icon */}
            <button 
                className="absolute top-5 right-5 text-black text-3xl hover:text-gray-500 transition duration-300"
                onClick={() => console.log("Close button clicked")} // Replace with actual close logic
            >
                <FaTimes />
            </button>

            <div>
                <img 
                    src="src/assets/mainPage.png" 
                    alt="mainPage" 
                    className="w-140 h-140 object-cover absolute top-23 left-30 rounded-3xl" 
                    style={{
                        boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                    }}
                />

                <h1 className="text-black text-6xl absolute top-20 right-60">Welcome Back</h1>
                <h3 className="text-black text-2xl absolute top-40 right-80">Create your account</h3>

                {/* Input Details */}
                <div className="relative p-5">
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        className="absolute right-50 top-65 w-110 h-10 px-2 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        placeholder="Last Name"
                        className="absolute right-50 top-80 w-110 h-10 px-2 pr-10 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        placeholder="Enter your email"
                        className="absolute right-50 top-95 w-110 h-10 px-2 pr-10 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter your correct password"
                        className="absolute right-50 top-110 w-110 h-10 px-2 pr-10 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <button
                        type="button"
                        className="absolute right-52 top-115 transform -translate-y-1/2 text-black-500 hover:text-gray-500"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
    
                    {/* SignUp Button */}
                    <button 
                        className="absolute right-90 top-130 w-30 h-10 bg-black border border-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
