import * as propertiesAPI from "../api/properties";
import { PropertyProps } from "../types/generalTypes";

// Fetches all properties from the API and handles potential errors
export async function getAllProperties(): Promise<PropertyProps[]> {
  try {
    const properties = await propertiesAPI.getAllProperties();
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

// Fetches a property by its ID and handles potential errors
export async function getPropertyById(id: string): Promise<PropertyProps> {
  try {
    const property = await propertiesAPI.getPropertyById(id);
    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
}

// Fetches properties by category ID and handles potential errors
export async function getPropertiesByCategory(
  param: string
): Promise<PropertyProps[]> {
  try {
    const properties = await propertiesAPI.getPropertiesByCategory(param);
    return properties;
  } catch (error) {
    console.error("Error fetching properties by category:", error);
    throw error;
  }
}
