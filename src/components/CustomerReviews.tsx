import React from "react";
import Card from "./CustomerCard";

const reviews = [
  {
    name: "James Smith",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "James Smith",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
  },
  {
    name: "James Smith",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3,
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {reviews.map((review, index) => (
        <Card key={index} {...review} />
      ))}
    </div>
  );
};

export default CustomerReviews;