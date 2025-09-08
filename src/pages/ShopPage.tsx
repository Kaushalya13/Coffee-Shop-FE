import FooterDetails from "../components/FooterDetails";
import Navbar from "../components/Navbar";
import ShopDetails from "../components/ShopDetails";

const ShopPage = () => {
    return (
        <div>
            <Navbar />
            <div className="h-screen relative top-20 bg-black">
                <h1 className="text-white text-6xl absolute top-10 left-20" style={{ fontFamily: "Pacifico,cursive" }}>
                    Choose Category
                </h1>

                <div>
                    <h4 className="text-white text-3xl absolute mt-140 left-20">Coffee Menu</h4>
                    <h4 className="text-white text-3xl absolute mt-140 right-20">10 Coffee Results</h4>
                </div>

                {/* Center the ShopDetails */}
                <div className="flex justify-center items-center min-h-screen absolute top-10 w-full">
                    <ShopDetails />
                </div>

                {/* Footer */}
                <div className="bg-black text-white relative top-400 py-10">
                    <FooterDetails/>
                </div>
            </div>
        </div>
    );
}

export default ShopPage;
