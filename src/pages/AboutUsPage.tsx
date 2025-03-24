import CustomerReviews from "../components/CustomerReviews";
import FooterDetails from "../components/FooterDetails";
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
    return (
        <div>
            <Navbar/>
            {/* about us*/}
            <div className="h-165 relative top-20 bg-black">
                <h1 className="text-white text-6xl font-lily absolute top-10 left-20" style={{ fontFamily: "Pacifico,cursive"}}>Who We Are</h1>
                <h1 className="text-white text-6xl font-lily absolute top-30 left-24">"</h1>
                <p className="text-white text-2xl absolute top-40 left-30">Welcome to Zero Coffee-Shop, where every cup is <br/>brewed with passion and every moment feels like home.
                <br/>Established in 2025, we are a cozy retreat for coffee lovers, <br/> dreamers, and storytellers.From the first sip to the last,<br/>  we craft each drink with rich flavors,
                ethically sourced beans, <br/> and a touch of warmth that lingers in every corner.<br/><br/>

                At Zero Coffee-Shop, we believe in zero compromises on <br/> quality and experience. Whether you're starting your day with <br/>a bold espresso, unwinding with a creamy latte,
                 or sharing <br/>laughter over a cup of handcrafted perfection, we invite you to <br/>savor the moment. Sit back, breathe in the aroma, and let <br/>your perfect cup find you.
                </p>
                <h1 className="text-white text-6xl font-lily absolute bottom-25 left-100">"</h1>
                <img src="src/assets/pngwing.com 5.png" alt="image" className="absolute right-110 top-120" />
                <img src="src/assets/pngwing.com 5.png" alt="image" className="absolute right-18 top-111" />
                <img src="src/assets/aboutUsPic.png" alt="image" className="absolute right-5 top-10" />                
            </div>

            {/* customer comments*/}
            <div className="h-screen bg-white flex items-end justify-center">
                <h2 className="text-black text-4xl absolute -bottom-20" style={{ fontFamily: "Pacifico,cursive"}}>Come and Join</h2>
                <h1 className="text-black text-6xl absolute -bottom-40" style={{ fontFamily: "Rowdies, sans-serif"}}>Our Happy Customers</h1>
                
                <div className="flex justify-center items-center min-h-screen ">
                    <CustomerReviews />
                </div>
                
            </div>

            {/* Footer */}
            <div className="bg-black text-white py-10">
                <FooterDetails/>
            </div>

        </div>
    );
}

export default AboutUsPage;
