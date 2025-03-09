import CustomerReviews from "../components/CustomerReviews";

const AboutUsPage = () => {
    return (
        <div className="h-screen">
            {/* about us*/}
            <div className="h-screen bg-black">
                <h1 className="text-white text-6xl font-lily absolute top-20 left-20" style={{ fontFamily: "Pacifico,cursive"}}>Who We Are</h1>
                <p className="text-white text-2xl absolute top-50 left-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.et dolore magna aliqua.<br/> 
                    Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi <br/>ut aliquip ex 
                    ea commodo consequat.Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore fugiat nulla pariatur.
                </p>
                <img src="src/assets/pngwing.com 5.png" alt="Not Found" className="absolute right-110 top-130" />
                <img src="src/assets/pngwing.com 5.png" alt="Not Found" className="absolute right-15 top-122" />
                <img src="src/assets/aboutUsPic.png" alt="Not Found" className="absolute right-5 top-30" />                
            </div>

            {/* customer comments*/}
            <div className="h-screen bg-white flex items-end justify-center">
                <h2 className="text-black text-4xl absolute -bottom-20" style={{ fontFamily: "Pacifico,cursive"}}>Come and Join</h2>
                <h1 className="text-black text-6xl absolute -bottom-40" style={{ fontFamily: "Rowdies, sans-serif"}}>Our Happy Customers</h1>
                
                <div className="flex justify-center items-center min-h-screen">
                    <CustomerReviews />
                </div>
                
                {/* Three Small Circles at the Bottom */}
                <div className="absolute -bottom-150 flex justify-center items-center space-x-4">
                    <div className="w-6 h-6 border-2 bg-black rounded-full"></div>
                    <div className="w-6 h-6 border-2 bg-black rounded-full"></div>
                    <div className="w-6 h-6 border-2 bg-black rounded-full"></div>
                </div>

            </div>

        </div>
    );
}

export default AboutUsPage;
