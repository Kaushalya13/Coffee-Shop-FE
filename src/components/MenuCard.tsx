import React from "react";

interface CardProps {
  main: string;
  name: string;
  image: string;
  review: string;
  rating: string;
}

const MenuCard: React.FC<CardProps> = ({ main, name, image, review, rating }) => {
  return (
    <div
      className="bg-white rounded-md p-4 w-64 h-100 relative overflow-hidden"
      style={{
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <div className="bg-gray-200 -left-4 -top-4 w-64 h-75 relative">
        {/* "NEW" Badge */}
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
          {main}
        </span>

        {/* Product Image */}
        <div className="flex justify-center items-center py-6">
          <img src={image} className="absolute top-5 w-40 h-65 object-cover flex justify-center items-center" />
        </div>
        
      </div>
    

      {/* Product Details */}
      <div className=" relative space-y-1">
        <h3 className="text-md font-bold">{name}</h3>
        <p className="text-black text-sm">{review}</p>
        <p className="text-black text-sm font-semibold">{rating}</p>
      </div>
    </div>
  );
};

export default MenuCard;
