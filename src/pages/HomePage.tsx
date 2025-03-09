import MenuDetails from "../components/MenuDetails";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div>
        {/* Group 1*/}
        <div className="absolute top-10 bg-black left-7 w-365 h-160 rounded-xl ">
            <img src="src/assets/CoffeeShopLogo.png" alt="coffee-cup" className="w-50 h-50 absolute -top-8 -left-5 rounded-full  bg-white" />

            {/* Navigation */} 
            <Link to="/shop" className="absolute top-10 left-[430px] text-white font-bold text-2xl">Shop</Link>
            <Link to="/aboutUsPage" className="absolute top-10 left-[630px] text-white font-bold text-2xl">About Us</Link>
            <Link to="/contactUsPage" className="absolute top-10 left-[850px] text-white font-bold text-2xl">Contact Us</Link>


            <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute bottom-15 -left-5 object-cover" />
            <img src="src/assets/coffee-cup.png" alt="coffee-cup" className="absolute top-30 -left-10 object-cover" />
            <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute -bottom-9 -left-2 object-cover" />
            <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute -bottom-8.5 left-48 object-cover" />

            <h1 className="absolute top-70 left-1/2 transform -translate-x-1/2 object-cover text-white font-bold text-9xl" style={{ fontFamily: "Pacifico,cursive"}}>-Zero-</h1>

            <img src="src/assets/icon01.png" alt="coffee-cup" className="absolute -top-0 -right-6 object-cover" />
            <img src="src/assets/icon02.png" alt="coffee-cup" className="absolute top-15 right-0 object-cover rotate-5 ..." />
            <img src="src/assets/icon03.png" alt="coffee-cup" className="absolute top-15 right-15 object-cover" />
            <img src="src/assets/icon04.png" alt="coffee-cup" className="absolute top-1 right-10 object-cover" />
            <img src="src/assets/icon05.png" alt="coffee-cup" className="absolute top-30 right-20 object-cover -rotate-30 ..." />
            <img src="src/assets/coffee-cup-1.png" alt="coffee-cup" className="absolute -top-3 -right-6 object-cover" />
        </div>

        {/* Group 2*/}
        <div className="h-screen ">
            <h1 className="absolute -bottom-25 left-18 text-8xl text-center font-bold" style={{ fontFamily: "Bebas Neue,sans-serif "}}>
                PUT YOUR ORDER EASILY & COMPLETE YOUR DAY
            </h1>

            <div>
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-220 left-5 object-cover rotate-30 ..." />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-240 left-50 object-cover -rotate-45 ..." />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-260 -left-20 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-280 left-20 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-310 left-50 object-cover" />
                <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-320 -left-10 object-cover rotate-45 ..." />

            </div>

            <img src="src/assets/group2-cup.png" 
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
             <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-7xl font-bold object-cover" style={{ fontFamily: "Bebas Neue,sans-serif"}}>OUR POPULAR PRODUCTS</h1>

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