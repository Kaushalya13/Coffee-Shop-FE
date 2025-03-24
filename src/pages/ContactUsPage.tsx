import Navbar from "../components/Navbar";

const ContactUsPage = () => {
    return (
        <div >
            <Navbar/>
            {/* contact us*/}
            <div className="h-screen relative top-20 bg-black">
                <h1 className="text-white text-6xl absolute top-10 left-20" style={{ fontFamily: "Pacifico,cursive"}}>Contact Us</h1>
                <p className="text-white text-2xl absolute top-40 left-30">Have a question or just want to say hello?  <br/>
                We'd love to hear from you!   <br/>
                Reach out via phone, email, or drop us a message, <br/>
                and we'll get back to you soon.
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
                        className="absolute right-130 top-120 w-30 h-10 bg-white text-black font-semibold rounded-md hover:bg-gray-800 transition duration-300"
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
                {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
                    <img src="src/assets/FB.png" alt="Facebook" className="w-15 h-15 object-cover" />
                    <img src="src/assets/Instagram.png" alt="Instagram" className="w-15 h-15 object-cover" />
                    <img src="src/assets/Twitter.png" alt="Twitter" className="w-15 h-15 object-cover" />
                </div> */}

        
            </div>

            {/* Footer */}
            <div className="bg-white text-black py-10 mt-18">
                {/* Container */}
                <div className="max-w-screen-xl mx-auto flex justify-between items-start space-x-16">
                    
                    {/* Left Side: Logo, Shop Name, Description */}
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex items-center space-x-3 relative left-30">
                            <img src="src/assets/Coffee Shop Logo-Footer.png" alt="coffee-shop-logo" className="w-20 h-20 object-cover" />
                            <span className="text-4xl font-medium" style={{ fontFamily: "Pacifico, cursive" }}>-Zero-</span>
                        </div>
                        <p className="text-sm text-black max-w-sm relative left-30">
                            Your one-stop destination for the finest coffee, <br/>served with love. Visit us and experience the <br/>taste of perfection.
                        </p>
                    </div>
                    
                    {/* Center: Navigation */}
                    <div className="flex justify-center flex-col space-x-10">
                        <h3 className="text-xl font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-lg transition">Home</a></li>
                            <li><a href="/shopPage" className="text-lg ">Shop</a></li>
                            <li><a href="/aboutUsPage" className="text-lg">About Us</a></li>
                            <li><a href="/contactUsPage" className="text-lg">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Right Side: Get in Touch */}
                    <div className="flex flex-col items-end space-y-4">
                        <h3 className="text-xl font-bold mb-4 relative right-40">Get in Touch</h3>
                        <ul className="space-y-2 relative right-15">
                            <li><a href="tel:+94711252789" className="text-lg">(+94) 71-125-2789</a></li>
                            <li><a href="https://goo.gl/maps/qZT3" className="text-lg">No.15, Galle Road, Kalutara</a></li>
                            <li><a href="https://www.zerocoffeeshop.lk" className="text-lg" target="_blank" rel="noopener noreferrer">WWW.ZeroCoffeeShop.lk</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/FB.png" alt="Facebook" className="bg-black rounded-full w-10 h-10 object-cover" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/Instagram.png" alt="Instagram" className="bg-black rounded-full w-10 h-10 object-cover" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/Twitter.png" alt="Twitter" className="bg-black rounded-full w-10 h-10 object-cover" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="bg-black py-2 mt-5">
                    <p className="text-center text-sm text-white">Copyright @ 2025 -Zero- | Powered by Zero</p>
                </div>
            </div>


        </div>
    );
}

export default ContactUsPage;
