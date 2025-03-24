import { useEffect, useState } from "react";
import { Category } from "../models/Category";
import { fetchActiveCategories } from "../services/categoryService";

const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";


const ShopCard: React.FC = () => {
    const [category, setCategories] = useState<Category[]>([]);
    
        useEffect(() => {
            const loadCategories = async () => {
              const data = await fetchActiveCategories();
              setCategories(data);
            };
            loadCategories();
          }, []);
    
        return (
            <div className="relative top-135 w-full p-10">
    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.map((category) => {
    
                    const imageUrl = category.image ? `${baseUrl}/${category.image}` : null;
    
                    return (
                    <div
                        key={category._id}
                        className="bg-gray-200 text-black rounded-md p-6 w-80 h-40 relative overflow-hidden"
                        style={{
                            boxShadow:
                                "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                        }}
                    >
                        <div className="relative rounded-lg">
                            {category.labels && category.labels.length > 0 && (
                                <div className="absolute top-2 left-2 flex space-x-2">
                                {category.labels.map((label, index) => (
                                    <span
                                    key={index}
                                    className="bg-gradient-to-r from-gray-200 to-gray-500 text-black text-xs font-bold px-2 py-1 rounded capitalize"
                                    >
                                    {label}
                                    </span>
                                ))}
                                </div>
                            )}
    
                            {/* Handle image URL logic */}
                            {imageUrl ? (
                                <div className="">
                                <img
                                    src={imageUrl}
                                    alt={category.name}
                                    className="w-full h-40 object-cover rounded-md shadow-md"
                                />
                                </div>
                            ) : (
                                <p className="text-black text-center mt-4"></p>
                            )}
                        </div>
                        <div className="mt-2 text-left">
                            <h2 className="text-lg font-bold text-black">{category.name}</h2>
                            <h2 className="text-sm text-black">{category.description}</h2>
                            
                            
                        </div>
                        
                    </div>
                    );
                })}
                </div>
            </div>
        );
}

export default ShopCard;
