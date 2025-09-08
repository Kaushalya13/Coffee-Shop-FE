interface CardProps {
  name: string;
  image: string;
  review: string;
  rating: string;
  main: string;
}

const ShopCard: React.FC<CardProps> = ({ main, name, image, review, rating }) => {
  return (
      <div
          className="bg-black text-white rounded-md p-6 w-80 h-90 relative overflow-hidden"
          style={{
              boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
          }}
      >
          <div className="bg-gray-200 text-white relative w-40 h-45 rounded-md overflow-hidden">
              {/* Product Image */}
              <div className="flex justify-center items-center pt-6">
                  <img src={image} className="w-30 h-30 object-cover" />
              </div>

          </div>

          {/* Product Details */}
          <div className="relative space-y-2 mt-4">
              <h3 className="text-md font-bold">{name}</h3>
              <p className="text-white text-sm">{review}</p>
              <p className="text-white text-sm font-semibold">{rating}</p>
              {/* "NEW" Badge */}
              <span className="absolute -bottom-5 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
                  {main}
              </span>
          </div>
      </div>
  );
}

export default ShopCard;
