import { type Email } from "../types/email";

const API_URL = "http://localhost:3000/api/v1";

export async function getEmails(): Promise<Email[]> {
  const response = await fetch(
    `${API_URL}/emails`
  );

  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
}

export async function clearEmails() {
  await fetch(
    `${API_URL}/emails`,
    {
      method: "DELETE",
    }
  );
}