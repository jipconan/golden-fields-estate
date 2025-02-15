import axios from "axios";
import { AgentProps } from "../types/generalTypes";

const BASE_URL = "https://golden-fields-backend.onrender.com/agents";
// const BASE_URL = "http://localhost:3000/agents";

// Fetches all agents from the backend.
export async function getAllAgents(): Promise<AgentProps[]> {
  try {
    const response = await axios.get<AgentProps[]>(BASE_URL);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch agents:", error);
    throw new Error("Failed to fetch agents. Please try again later.");
  }
}

// Retrieves a agent by its ID.
export async function getAgentById(id: string): Promise<AgentProps> {
  try {
    const response = await axios.get<AgentProps>(`${BASE_URL}/agent/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch agent by ID:", error);
    throw new Error("Failed to fetch agent by ID. Please try again later.");
  }
}

// Fetches agents belonging to a specific category.
export async function getAgentsByCategory(
  params: string
): Promise<AgentProps[]> {
  try {
    const response = await axios.get<AgentProps[]>(`${BASE_URL}?${params}`);
    if (response.data.length === 0) {
      console.warn("No agents found for the given category.");
      return [];
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch agents by category:", error.message);
    } else {
      console.error("Failed to fetch agents by category:", error);
    }
    return []; // Return empty array instead of throwing
  }
}
