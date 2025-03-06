import Card from "./MenuCard";
import menu01 from "../assets/menu01.png";
import menu02 from "../assets/menu02.png";
import menu03 from "../assets/menu03.png";
import menu04 from "../assets/menu04.png";


const reviews = [
  {
    main: "NEW",
    name: "Cappuccino",
    image: menu01, 
    review: "Category: Coffee",
    rating: "LKR 3,500",
  },
  {
    main: "NEW",
    name: "Caramel Mocha",
    image: menu02,
    review: "Category: Coffee",
    rating: "LKR 3,500",
  },
  {
    main: "NEW",
    name: "Cafe Latte",
    image: menu03,
    review: "Category: Coffee",
    rating: "LKR 3,500",
  },
  {
    main: "NEW",
    name: "Bubble Tea",
    image: menu04,
    review: "Category: Coffee",
    rating: "LKR 3,500",
  },
];

const MenuDetails: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-6">
      {reviews.map((review, index) => (
        <Card key={index} {...review} />
      ))}
    </div>
  );
};

export default MenuDetails;