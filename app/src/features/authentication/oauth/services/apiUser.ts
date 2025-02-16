import { API_URL } from "@constants";

export async function apiUser() {
  const res = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "X-Session-Token": localStorage.getItem("sessionId") || "",
    },
  });

  const data = await res.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}
