import axios from "axios";
import { PropertyProps } from "../types/generalTypes";

const BASE_URL = "https://golden-fields-backend.onrender.com/properties";
// const BASE_URL = "http://localhost:3000/properties";

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
    const response = await axios.get<PropertyProps>(
      `${BASE_URL}/property/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch property by ID:", error);
    throw new Error("Failed to fetch property by ID. Please try again later.");
  }
}

// Fetches properties belonging to a specific category.
export async function getPropertiesByCategory(
  params: string
): Promise<PropertyProps[]> {
  try {
    const response = await axios.get<PropertyProps[]>(`${BASE_URL}?${params}`);
    if (response.data.length === 0) {
      console.warn("No properties found for the given category.");
      return [];
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch properties by category:", error.message);
    } else {
      console.error("Failed to fetch properties by category:", error);
    }
    return []; // Return empty array instead of throwing
  }
}
