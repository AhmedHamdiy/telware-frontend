import { API_URL } from "@constants";
import { Session } from "../types/sessions";

async function GetAllSessions(): Promise<Session[]> {
  const res = await fetch(`${API_URL}/auth/sessions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Session-Token": localStorage.getItem("sessionId") || "",
    },
    credentials: "include",
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  const sessions = data.data?.sessions;

  return sessions;
}

export { GetAllSessions };
