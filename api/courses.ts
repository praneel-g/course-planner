import { Course, SubjectWithCourseCount, TermSubjectCourseMapping } from "@/.data/types";
import { NU_COURSES_API_URL } from "@/api/base-url";

export const getSubjectsForTerm = async (termCode: string) => {
  const response = await fetch(`${NU_COURSES_API_URL}/courses/${termCode}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Error in fetching subjects for term ${termCode}`);

  const receivedData: SubjectWithCourseCount[] = await response.json();
  return receivedData;
};

export const getCoursesForTerm = async (termCode: string, subjectCode: string) => {
  const response = await fetch(`${NU_COURSES_API_URL}/courses/${termCode}/${subjectCode}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Error in fetching courses for term ${termCode}`);

  const receivedData: Course[] = await response.json();
  return receivedData;
};

export const getCourse = async (subjectCode: string, courseNumber: string) => {
  const response = await fetch(`${NU_COURSES_API_URL}/courses/all/${subjectCode}/${courseNumber}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Error in fetching course ${subjectCode} ${courseNumber}`);

  const receivedData: Course = await response.json();
  return receivedData;
};

export async function getCourses(subjectCode: string) {
  const response = await fetch(`${NU_COURSES_API_URL}/courses/all/${subjectCode}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(`Error in fetching ${subjectCode} courses`);

  const receivedData: Course[] = await response.json();
  return receivedData;
}
