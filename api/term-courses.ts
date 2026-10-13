import { TermSubjectCourseMapping } from "@/.data/types";
import { NU_COURSES_API_URL } from "@/api/base-url";

export const getTermCourses = async (
  termCode: string
): Promise<TermSubjectCourseMapping> => {
  const response = await fetch(
    `${NU_COURSES_API_URL}/mapping/term-courses/${termCode}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok)
    throw new Error(`Error in fetching term course mapping ${termCode}`);

  const receivedData = await response.json();
  return receivedData.data;
};
