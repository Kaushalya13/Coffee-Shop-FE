const FooterDetails = () => {
    return (
        <div>
          {/* Container */}
          <div className="max-w-screen-xl mx-auto flex justify-between items-start space-x-16">
            {/* Left Side: Logo, Shop Name, Description */}
            <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-3 relative left-30">
                    <img src="src/assets/Coffee Shop Logo-Footer.png" alt="coffee-shop-logo" className="bg-white rounded-md w-20 h-20 object-cover" />
                        <span className="text-4xl font-medium" style={{ fontFamily: "Pacifico, cursive" }}>-Zero-</span>
                    </div>
                    <p className="text-sm text-white max-w-sm relative left-30">
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
                    <div className="flex flex-col items-end space-y-20">
                        <h3 className="text-xl font-bold mb-4 relative right-40">Get in Touch</h3>
                        <ul className="space-y-2 relative right-15">
                            <li><a href="tel:+94711252789" className="text-lg">(+94) 71-125-2789</a></li>
                            <li><a href="https://goo.gl/maps/qZT3" className="text-lg">No.15, Galle Road, Kalutara</a></li>
                            <li><a href="https://www.zerocoffeeshop.lk" className="text-lg" target="_blank" rel="noopener noreferrer">WWW.ZeroCoffeeShop.lk</a></li>
                        </ul>
                    </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 flex justify-center space-x-6">
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
            <div className="bg-white py-4 mt-10">
                <p className="text-center text-sm text-black">Copyright @ 2025 -Zero- | Powered by Zero</p>
            </div>
        </div>
      );
};

export default FooterDetails;