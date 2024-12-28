import axios from "axios";
import { PropertyProps } from "../types/generalTypes";

// const BASE_URL = "https://golden-fields-backend.onrender.com/properties";
const BASE_URL = "http://localhost:3000/properties";

// Fetches all properties from the backend.
export async function getAllProperties(): Promise<PropertyProps[]> {
  try {
    const response = await axios.get<PropertyProps[]>(BASE_URL);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    throw new Error("Failed to fetch properties. Please try again later.");
  }
}

// Retrieves a property by its ID.
export async function getPropertyById(id: string): Promise<PropertyProps> {
  try {
    const response = await axios.get<PropertyProps>(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch property by ID:", error);
    throw new Error("Failed to fetch property by ID. Please try again later.");
  }
}

// Fetches properties belonging to a specific category.
export async function getPropertiesByCategory(
  param: string
): Promise<PropertyProps[]> {
  try {
    const response = await axios.get<PropertyProps[]>(
      `${BASE_URL}/type/${param}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch properties by category:", error);
    throw new Error(
      "Failed to fetch properties by category. Please try again later."
    );
  }
}
