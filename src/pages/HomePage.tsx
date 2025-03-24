import FooterDetails from "../components/FooterDetails";
import MenuDetails from "../components/MenuDetails";
import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar/>
        {/* Main Content Wrapper */}
        <main className="flex-grow">
            {/* Group 1*/}
            <div className="relative top-23 bg-black left-5 w-372 h-155 rounded-md">
            <div className="w-50 h-50 flex items-center justify-center bg-white rounded-full relative -left-8 -top-6">
                <img 
                    src="src/assets/CoffeeShopLogo.png" 
                    alt="coffee-cup" 
                    className="w-50 h-50 object-contain relative left-4 top-4" 
                />
            </div>

                <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute bottom-15 left-4 object-cover" />
                <img src="src/assets/coffee-cup.png" alt="coffee-cup" className="absolute top-22 -left-10 object-cover" />
                <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute -bottom-6 left-5 object-cover" />
                <img src="src/assets/pngwing.com 5.png" alt="coffee-cup" className="absolute -bottom-6 left-42 object-cover" />

                <h1 className="absolute top-60 left-1/2 transform -translate-x-1/2 object-cover text-white font-bold text-9xl animate-opacity" style={{ fontFamily: "Bebas Neue,sans-serif"}}>-Zero-</h1>

                <img src="src/assets/icon01.png" alt="coffee-cup" className="absolute -top-8 right-2 object-cover" />
                <img src="src/assets/icon02.png" alt="coffee-cup" className="absolute top-5 right-5 object-cover rotate-5 ..." />
                <img src="src/assets/icon03.png" alt="coffee-cup" className="absolute top-5 right-15 object-cover -rotate-15 ..." />
                <img src="src/assets/icon04.png" alt="coffee-cup" className="absolute -top-5 right-15 object-cover" />
                <img src="src/assets/icon05.png" alt="coffee-cup" className="absolute top-25 right-15 object-cover -rotate-30 ..." />
                <img src="src/assets/coffee-cup-1.png" alt="coffee-cup" className="absolute -top-13 -right-2 object-cover" />
            </div>

            {/* Group 2*/}
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="absolute -bottom-30 left-18 text-8xl text-center font-bold" style={{ fontFamily: "Bebas Neue,sans-serif "}}>
                    PUT YOUR ORDER EASILY & COMPLETE YOUR DAY
                </h1>

                <div>
                    <img src="src/assets/CoffeeShopLogo.png" alt="coffee-logo" className="absolute top-222 left-5 object-cover rotate-30 ..." />
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
            <div className="absolute top-375 bg-black w-full h-182.5 flex items-end justify-center" >
                <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-7xl font-bold object-cover" style={{ fontFamily: "Bebas Neue,sans-serif"}}>OUR POPULAR PRODUCTS</h1>

                <div className="flex justify-center items-center min-h-screen absolute top-10">
                    <MenuDetails />
                </div>
            </div>

            {/* Group 4*/}
            <div className="absolute top-558  w-full h-182.5 flex items-end justify-center" >
                <h1 className="text-black text-4xl absolute top-10 left-165">We care about the quality of <br/> our</h1>
                <h1 className="text-black text-4xl font-bold absolute top-20 left-183">products</h1>
                <h4 className="text-black text-md absolute top-40 left-165">Drinking coffee is one of the most global things you do each days here i can <br/>
                spend a long and comfortable time  with this workspace tacilities.</h4>

                <div>
                    <img src="src/assets/Group 01.png" 
                        alt="coffee-logo" 
                        className="absolute top-70 left-165" 
                    />
                    <h1 className="text-black text-2xl font-bold absolute top-70 left-190">Active Community</h1>
                    <h4 className="text-black text-md absolute top-80 left-190">You can mach out wherever<br/>
                    you want! </h4>
                </div>
                
                <div>
                    <img src="src/assets/Group 03.png" 
                        alt="coffee-logo" 
                        className="absolute top-70 right-90" 
                    />
                    <h1 className="text-black text-2xl font-bold absolute top-70 right-30">Best product design</h1>
                    <h4 className="text-black text-md absolute top-80 right-39">We worked a lot to make a <br/>
                    great experience</h4>
                </div>

                <div>
                    <img src="src/assets/Group 02.png" 
                        alt="coffee-logo" 
                        className="absolute bottom-45 left-165" 
                    />
                    <h1 className="text-black text-2xl font-bold absolute bottom-55 left-190">Premium quality</h1>
                    <h4 className="text-black text-md absolute bottom-40 left-190">A premium quality coffee a what<br/>
                    our customers deserve</h4>
                </div>

                <div>
                    <img src="src/assets/Group 04.png" 
                        alt="coffee-logo" 
                        className="absolute bottom-45 right-90" 
                    />
                    <h1 className="text-black text-2xl font-bold absolute bottom-55 right-38">The best material</h1>
                    <h4 className="text-black text-md absolute bottom-40 right-28">Our product is made by premium<br/>
                    materials</h4>
                </div>

                <div>
                    <img src="src/assets/Group 06.png" 
                        alt="coffee-logo" 
                        className="absolute -top-10 left-0" 
                    />
                    <div className="absolute top-80 bg-white left-45 w-100 h-20 rounded-full opacity-80">
                        <img src="src/assets/Group 05.png" 
                            alt="coffee-logo" 
                            className="absolute w-18 h-18 bottom-1 left-1 " 
                        />
                        <h3 className="text-black text-xl relative left-25 font-semibold">James Smith</h3>
                        <h5 className="text-sm relative left-25">Coffee is one of most successful company..<br/>
                        customer relationship is very good.</h5>
                    </div>
                </div>

            </div>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-10 absolute top-750 w-full">
          <FooterDetails/>
        </footer>

      </div>
    );

}
export default HomePage;