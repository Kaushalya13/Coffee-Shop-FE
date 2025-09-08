import React, { useState, useEffect } from "react";
import Card from "./MenuCard";
import menu01 from "../assets/menu01.png";
import menu02 from "../assets/menu02.png";
import menu03 from "../assets/menu03.png";
import menu04 from "../assets/menu04.png";
import menu05 from "../assets/menu05.png";
import menu06 from "../assets/menu06.png";
import menu07 from "../assets/menu07.png";
import menu08 from "../assets/menu08.png";
import menu09 from "../assets/menu09.png";
import menu10 from "../assets/menu10.png";
import menu11 from "../assets/menu11.png";
import menu12 from "../assets/menu12.png";

const reviews = [
  { main: "NEW", name: "Cappuccino", image: menu01, review: "Category: Coffee", rating: "LKR 3,500" },
  { main: "NEW", name: "Caramel Mocha", image: menu02, review: "Category: Coffee", rating: "LKR 2,500" },
  { main: "NEW", name: "Cafe Latte", image: menu03, review: "Category: Coffee", rating: "LKR 2,100" },
  { main: "NEW", name: "Bubble Tea", image: menu04, review: "Category: Tea", rating: "LKR 2,350" },
  { main: "NEW", name: "Espresso", image: menu05, review: "Category: Coffee", rating: "LKR 3,000" },
  { main: "NEW", name: "Matcha Latte", image: menu06, review: "Category: Tea", rating: "LKR 3,800" },
  { main: "NEW", name: "Iced Americano", image: menu07, review: "Category: Coffee", rating: "LKR 3,200" },
  { main: "NEW", name: "Vanilla Frappe", image: menu08, review: "Category: Beverage", rating: "LKR 3,900" },
  { main: "NEW", name: "Hot Chocolate", image: menu09, review: "Category: Beverage", rating: "LKR 3,600" },
  { main: "NEW", name: "Chai Latte", image: menu10, review: "Category: Tea", rating: "LKR 3,700" },
  { main: "NEW", name: "Mocha", image: menu11, review: "Category: Coffee", rating: "LKR 3,450" },
  { main: "NEW", name: "Hazelnut Cappuccino", image: menu12, review: "Category: Coffee", rating: "LKR 3,550" },
];

const MenuDetails: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const handleScroll = (direction: "next" | "prev") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex + 1 < totalPages ? prevIndex + 1 : 0;
      } else {
        return prevIndex - 1 >= 0 ? prevIndex - 1 : totalPages - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("next");
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full p-6">
      {/* Cards Container */}
      <div className="flex gap-10 overflow-hidden">
        {reviews.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((review, index) => (
          <div key={index} className="flex-none w-64">
            <Card {...review} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-15 space-x-4">
        <button onClick={() => handleScroll("prev")} className="w-5 h-5 border-2 bg-white rounded-full"></button>
        <button onClick={() => handleScroll("next")} className="w-5 h-5 border-2 bg-white rounded-full"></button>
      </div>
    </div>
  );
};

export default MenuDetails;