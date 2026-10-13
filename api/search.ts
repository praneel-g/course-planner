import { Course, SearchGroup } from "@/.data/types";
import { NU_COURSES_API_URL } from "@/api/base-url";

export async function searchCourses(searchGroups: SearchGroup[]) {
  const response = await fetch(`${NU_COURSES_API_URL}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(searchGroups),
  });

  if (!response.ok) throw new Error(`Unable to search courses with query ${searchGroups}`);

  const receivedData: Course[] = await response.json();
  return receivedData;
}
