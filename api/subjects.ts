import { Subject } from "@/.data/types";
import { NU_COURSES_API_URL } from "@/api/base-url";

export async function getSubjects() {
  const response = await fetch(`${NU_COURSES_API_URL}/subjects`);
  if (!response.ok) throw new Error(`Error in fetching all subjects`);

  const receivedData: Subject[] = await response.json();
  return receivedData;
}

export async function getSubject(subjectCode: string) {
  const response = await fetch(`${NU_COURSES_API_URL}/subjects/${subjectCode}`);
  if (!response.ok) throw new Error(`Error in fetching subject ${subjectCode}`);

  const receivedData: Subject = await response.json();
  return receivedData;
}
