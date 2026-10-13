import { Term } from "@/.data/types";
import { NU_COURSES_API_URL } from "@/api/base-url";

export async function getTerms() {
  const response = await fetch(`${NU_COURSES_API_URL}/terms`);

  if (!response.ok) throw new Error(`Error in fetching terms }`);

  const data: Term[] = await response.json();
  return data;
}

export async function getTerm(termCode: string) {
  const response = await fetch(`${NU_COURSES_API_URL}/terms/${termCode}`);

  if (!response.ok) throw new Error(`Error in fetching term ${termCode}`);

  const data: Term = await response.json();
  return data;
}
