import Card from "./ShopCard";
import menu01 from "../assets/menu01.png";
import menu02 from "../assets/menu02.png";
import menu03 from "../assets/menu03.png";
import menu04 from "../assets/menu04.png";
import menu05 from "../assets/menu05.png";
import menu06 from "../assets/menu06.png";

const reviews = [
    { main: "Add to cart", name: "Caramel Cappuccino", image: menu01, review: "Caramel syrup with coffee,milk and whipped cream", rating: "LKR 1,500" },
    { main: "Add to cart", name: "Caramel Mocha", image: menu02, review: "Caramel syrup with coffee,milk and whipped cream", rating: "LKR 1,500" },
    { main: "Add to cart", name: "Cafe Latte", image: menu03, review: "Caramel syrup with coffee,milk and whipped cream", rating: "LKR 1,500" },
    { main: "Add to cart", name: "Bubble Tea", image: menu04, review: "Caramel syrup with coffee,milk and whipped cream", rating: "LKR 1,500" },
    { main: "Add to cart", name: "Caramel Cappuccino", image: menu05, review: "Caramel syrup with coffee,milk and whipped cream", rating: "LKR 1,500" },
    { main: "Add to cart", name: "Caramel Cappuccino", image: menu06, review: "Caramel syrup with coffee,milk and whipped cream", rating: "LKR 1,500" },
];

const ShopDetails: React.FC = () => {
    // Split reviews into two groups of 3 items each
    const rowOne = reviews.slice(0, 3);  // First 3 items
    const rowTwo = reviews.slice(3, 6);  // Next 3 items (if available)

    return (
        <div className="relative top-170 w-full p-10">
            {/* First Row - Display 3 items */}
            <div className="flex gap-8 justify-center mb-10">
                {rowOne.map((review, index) => (
                    <div key={index} className="flex-none w-80">
                        <Card {...review} />
                    </div>
                ))}
            </div>

            {/* Second Row - Display 3 items with a gap */}
            <div className="flex gap-8 justify-center">
                {rowTwo.map((review, index) => (
                    <div key={index} className="flex-none w-80">
                        <Card {...review} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopDetails;
