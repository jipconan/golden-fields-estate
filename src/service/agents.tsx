import * as agentsAPI from "../api/agents";
import { AgentProps } from "../types/generalTypes";

// Fetches all agents from the API and handles potential errors
export async function getAllAgents(): Promise<AgentProps[]> {
  try {
    const agents = await agentsAPI.getAllAgents();
    return agents;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
}

// Fetches a agent by its ID and handles potential errors
export async function getAgentById(id: string): Promise<AgentProps> {
  try {
    const agent = await agentsAPI.getAgentById(id);
    return agent;
  } catch (error) {
    console.error("Error fetching agent by ID:", error);
    throw error;
  }
}

// Fetches agents by params and handles potential errors
export async function getAgentsByCategory(
  param: string
): Promise<AgentProps[]> {
  try {
    const agents = await agentsAPI.getAgentsByCategory(param);
    if (agents.length === 0) {
      console.warn("No agents found for the given category.");
      return [];
    }
    return agents;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching agents by category:", error.message);
    } else {
      console.error("Error fetching agents by category:", error);
    }
    return []; // Return empty array instead of throwing
  }
}
