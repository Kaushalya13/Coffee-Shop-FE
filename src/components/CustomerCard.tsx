import React from "react";

interface CardProps {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const CustomerCard: React.FC<CardProps> = ({ name, image, review, rating }) => {
  return (
    <div className="rounded-2xl p-6 w-90 min-w-[280px] h-50 flex-shrink-0" style={{ backgroundColor: "#f7f1e3",boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px" }}>
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < rating ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="relative top-5 text-gray-600 mt-4 text-sm">{review}</p>
    </div>
  );
};

export default CustomerCard;
