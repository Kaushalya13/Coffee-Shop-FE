import React, { useRef } from "react";
import CustomerCard from "./CustomerCard";

const reviews = [
  { name: "Tania", image: "https://randomuser.me/api/portraits/women/11.jpg", review: "The best coffee in town! Always fresh, flavorful, and brewed to perfection. The aroma itself is inviting.", rating: 5 },
  { name: "Daniel", image: "https://randomuser.me/api/portraits/men/4.jpg", review: "A cozy spot with friendly staff. Love their cappuccino! The rich, creamy texture makes it my go-to choice.", rating: 4 },
  { name: "Sophia", image: "https://randomuser.me/api/portraits/women/3.jpg", review: "A true coffee lover’s paradise! The lattes are smooth, and the environment is perfect for relaxing or working.", rating: 3 },
  { name: "James", image: "https://randomuser.me/api/portraits/men/10.jpg", review: "Absolutely love this place! The caramel latte is heavenly, with the perfect balance of sweetness and coffee strength.", rating: 5 },
  { name: "Mia C", image: "https://randomuser.me/api/portraits/women/1.jpg", review: "Their espresso is always on point. The ambiance makes it even better—a great spot for a quiet coffee break.", rating: 4 },
  { name: "Ethan", image: "https://randomuser.me/api/portraits/men/6.jpg", review: "Perfect place to relax and enjoy a cup of coffee. The outdoor seating adds to the charm, making it a great experience.", rating: 3 },
  { name: "Avina", image: "https://randomuser.me/api/portraits/women/12.jpg", review: "I keep coming back for their signature mocha! The balance of chocolate and coffee is just right, never too bitter.", rating: 5 },
  { name: "Oliver", image: "https://randomuser.me/api/portraits/men/8.jpg", review: "Super friendly service and great coffee selection. The staff always greets you with a smile, which is a plus!", rating: 4 },
  { name: "Liam", image: "https://randomuser.me/api/portraits/men/9.jpg", review: "Their cold brew is a game changer. It’s strong yet smooth, with no bitterness—definitely a must-try!", rating: 3 },
  { name: "Eliza", image: "https://randomuser.me/api/portraits/women/10.jpg", review: "The best coffee shop in town! The cozy interior and soft background music create a lovely atmosphere.", rating: 5 },
];

const CustomerReviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Calculate the card width
      const cardWidth = 350; // Adjust this to match your actual card width
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      // Scroll by the calculated amount
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative top-10 w-full flex flex-col items-center">
      {/* Scrollable Reviews Container - Shows only 3 Full Cards */}
      <div className="overflow-hidden w-[1155px]">
        <div 
          ref={scrollRef} 
          className="flex space-x-6 p-6 overflow-x-scroll scroll-smooth hide-scrollbar"
        >
          {reviews.map((review, index) => (
            <CustomerCard key={index} {...review} />
          ))}
        </div>
      </div>

      {/* Scroll Buttons */}
      <div className="flex space-x-4 mt-6">
        <button 
          onClick={() => scroll("left")} 
          className="w-4 h-4 rounded-full bg-black transition duration-300"
        ></button>
        <button 
          onClick={() => scroll("right")} 
          className="w-4 h-4 rounded-full bg-black transition duration-300"
        ></button>
      </div>
    </div>
  );
};

export default CustomerReviews;
