import axios from "axios";

const CATEGORY_API_URL = "http://localhost:5001/api/category";

export const fetchCategories = async () => {
    try {
        const response = await axios.get(CATEGORY_API_URL);
        return response.data.map((category: any) => ({
            _id: category._id,
            name: category.name,
        }));
    } catch (error) {
        console.error("Error fetching categories", error);
        return [];
    }
};

