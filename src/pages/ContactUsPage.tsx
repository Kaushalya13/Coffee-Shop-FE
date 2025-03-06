const ContactUsPage = () => {
    return (
        <div className="h-screen">
            {/* contact us*/}
            <div className="h-screen bg-black">
                <h1 className="text-white text-6xl font-lily absolute top-10 left-20">Contact Us</h1>
                <p className="text-white text-2xl absolute top-40 left-30">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.et dolore magna aliqua. 
                    Ut enim <br/>ad minim veniam,quis nostrud exercitation ullamco <br/>laboris nisi ut aliquip ex 
                    ea commodo consequat.<br/>Duis aute irure dolor in reprehenderit in voluptate <br/>velit esse cillum dolore fugiat nulla pariatur.
                </p> 
                {/* Input deatils*/}
                <div className="relative p-5">
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        className="absolute right-50 top-40 w-110 h-10 px-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <input 
                        type="text" 
                        placeholder="Enter email" 
                        className="absolute right-50 top-60 w-110 h-10 px-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <textarea 
                        placeholder="Enter your message" 
                        className="absolute right-50 top-80 w-110 h-32 px-2 py-2 border border-gray-400 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    />

                    {/* Send Button */}
                    <button 
                        className="absolute right-120 top-120 w-40 h-10 bg-white text-black font-semibold rounded-md hover:bg-gray-800 transition duration-300"
                    >
                        Send
                    </button>
                </div>


                <div className="absolute left-30 top-100 space-y-4">
                    {/* Call */}
                    <div className="flex items-center space-x-3">
                        <img src="src/assets/call.png" alt="call" className="w-6 h-6 object-cover" />
                        <span className="text-white text-lg font-medium">(+94) 71-125-2789</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-3">
                        <img src="src/assets/location.png" alt="location" className="w-6 h-6 object-cover" />
                        <span className="text-white text-lg font-medium">No.15, Galle Road, Kalutara</span>
                    </div>

                    {/* Website */}
                    <div className="flex items-center space-x-3">
                        <img src="src/assets/Website.png" alt="website" className="w-6 h-6 object-cover" />
                        <a href="https://www.zerocoffeeshop.lk" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-medium hover:underline">
                            WWW.ZeroCoffeeShop.lk
                        </a>
                    </div>
                </div>

                {/* scocial media */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
                    <img src="src/assets/FB.png" alt="Facebook" className="w-15 h-15 object-cover" />
                    <img src="src/assets/Instagram.png" alt="Instagram" className="w-15 h-15 object-cover" />
                    <img src="src/assets/Twitter.png" alt="Twitter" className="w-15 h-15 object-cover" />
                </div>

        
            </div>

            {/* Footer*/}
            <div className="h-screen bg-white flex items-end justify-center">
                <div className="absolute left-55 -bottom-80">
                    <div className="flex items-center space-x-5">
                        <img src="src/assets/Coffee Shop Logo-Footer.png" alt="coffee-shop-logo" className="w-30 h-30 object-cover " />
                        <span className="text-black text-6xl font-medium " >-Zero-</span>
                    </div>
                    <p className="absolute -bottom-15 text-black text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* navigation*/} 
                <div>
                    <h3 className="absolute left-165 -bottom-55 text-3xl font-bold">Navigation</h3>
                    <h3 className="absolute left-165 -bottom-65 text-xl">Home</h3>
                    <h3 className="absolute left-165 -bottom-75 text-xl">Menu</h3>
                    <h3 className="absolute left-165 -bottom-85 text-xl">About Us</h3>
                    <h3 className="absolute left-165 -bottom-95 text-xl">Contact Us</h3>
                </div>
                
                {/* get in touch*/} 
                <div>
                    <h3 className="absolute right-85 -bottom-55 text-3xl font-bold">Get in Touch</h3>
                    <h3 className="absolute right-85 -bottom-75 text-xl">(+94) 71-125-2789</h3>
                    <h3 className="absolute right-85 -bottom-85 text-xl">No.15 , Galle-Road,Kalutara</h3>
                    <h3 className="absolute right-85 -bottom-95 text-xl">WWW.ZeroCoffeeShop.lk</h3>
                </div>

                {/* scocial media */}
                <div className="absolute -bottom-155 bg-black left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
                    <img src="src/assets/FB.png" alt="Facebook" className="w-15 h-15 object-cover" />
                    <img src="src/assets/Instagram.png" alt="Instagram" className="w-15 h-15 object-cover" />
                    <img src="src/assets/Twitter.png" alt="Twitter" className="w-15 h-15 object-cover" />
                </div>


                {/* copyright*/}   
                <div className="bg-black absolute -bottom-183 w-full h-20 flex items-center justify-center">
                    <h3 className="text-white text-center">Copyright @ 2025 -Zero- | Powered by Zero</h3>
                </div>

            </div>

        </div>
    );
}

export default ContactUsPage;
