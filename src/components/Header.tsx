import { BsFillBellFill, BsPersonCircle } from "react-icons/bs";

const Header = () => {
    return (
        <header className="w-full h-[60px] bg-white border-b fixed top-0 right-0 flex justify-between items-center px-6">
            <img src="src/assets/CoffeeShopLogo.png" alt="coffee-cup" className="w-15 h-15 absolute " />
            <h1 className="text-3xl font-bold" style={{ fontFamily: "Bebas Neue,sans-serif "}}>Zero</h1>

            <div className="flex items-center gap-4">
                <BsFillBellFill className="text-xl cursor-pointer hover:text-gray-500" />
                <BsPersonCircle className="text-2xl cursor-pointer hover:text-gray-500" />
            </div>
        </header>
    );
};

export default Header;
