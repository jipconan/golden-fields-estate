import { AgentProps, PropertyProps } from "./generalTypes";

export function isAgentProps(
  data: AgentProps | PropertyProps
): data is AgentProps {
  return (data as AgentProps).availability !== undefined;
}

export function isPropertyProps(
  data: AgentProps | PropertyProps
): data is PropertyProps {
  return (data as PropertyProps).address !== undefined;
}
