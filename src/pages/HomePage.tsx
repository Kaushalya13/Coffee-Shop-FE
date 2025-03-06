import MenuDetails from "../components/MenuDetails";

const HomePage = () => {
    return (
      <div>
        {/* Group 1*/}
        <div>
        </div>
        <div className="absolute top-10 bg-black left-7 w-365 h-160 rounded-xl ">
            <img src="src/assets/CoffeeShopLogo.png" alt="coffee-cup" className="absolute -top-5 -left-5 object-cover" />
            <h3 className="absolute top-10 left-130 text-white font-bold text-3xl">Shop</h3>
            <h3 className="absolute top-10 left-180 text-white font-bold text-3xl">About Us</h3>
            <h3 className="absolute top-10 left-250 text-white font-bold text-3xl">Contact Us</h3>

            <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute bottom-15 -left-5 object-cover" />
            <img src="src/assets/coffee-cup.png" alt="coffee-cup" className="absolute top-30 -left-10 object-cover" />
            <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute -bottom-9 -left-2 object-cover" />
            <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute -bottom-8.5 left-48 object-cover" />

            <h1 className="absolute top-70 left-1/2 transform -translate-x-1/2 object-cover text-white font-bold text-8xl" >-Zero-</h1>

            <img src="src/assets/icon.png" alt="coffee-cup" className="absolute -top-0 -right-6 object-cover" />
            <img src="src/assets/icon1.png" alt="coffee-cup" className="absolute top-15 right-35 object-cover" />
            <img src="src/assets/coffee-cup-1.png" alt="coffee-cup" className="absolute -top-3 -right-6 object-cover" />
        </div>

        {/* Group 2*/}
        <div className="h-screen ">
            <h1 className="absolute -bottom-25 left-15 text-6xl text-center font-bold">
                PUT YOUR ORDER EASILY & COMPLETE YOUR DAY
            </h1>

            <div>
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-220 left-15 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-245 left-50 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-260 -left-20 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-280 left-20 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-310 left-50 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-315 -left-10 object-cover" />

            </div>

            <img src="src/assets/icon2.png" 
                alt="coffee-logo" 
                className="absolute -bottom-175 left-1/2 transform -translate-x-1/2 object-cover" 
            />

            <div>
                <h4 className="absolute top-270 right-8 object-cover font-bold">Every cup provides a perfect balance of warmth <br/>and flavor, bringing energy and life to every moment,<br/> completing your day.</h4>
                {/* Explore moreButton */}
                <button 
                    className="absolute right-80 top-295 w-30 h-10 bg-black border border-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
                >
                    Explore More
                </button>
            </div>
        </div>

        {/* Group 3*/}
        <div className="absolute top-370 bg-black w-full h-182.5 flex items-end justify-center" >
             <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-6xl font-bold object-cover">our popular products</h1>

             <div className="flex justify-center items-center min-h-screen">
                <MenuDetails />
            </div>

            {/* Three Small Circles at the Bottom */}
            <div className="absolute bottom-15 flex justify-center items-center space-x-4">
                <div className="w-6 h-6 border-2 bg-white rounded-full"></div>
                <div className="w-6 h-6 border-2 bg-white rounded-full"></div>
                <div className="w-6 h-6 border-2 bg-white rounded-full"></div>
            </div>
        </div>
      </div>
    );

}
export default HomePage;