import { MinimizedCourse } from "@/.data/types";
import { readContentFile } from "./read";

const UPSTREAM = "https://github.com/ninest/course-planner";

const fileName = (course: MinimizedCourse) => `${course.subject}${course.number}`;

/** A course's notes from content/courses/<SUBJECT><NUMBER>.md, or null if it has none. */
export async function getCourseNotes(course: MinimizedCourse) {
  const markdown = await readContentFile("courses", fileName(course));
  return markdown?.trim() ? markdown : null;
}

/** Where to edit a course's notes on GitHub (creating the file if it doesn't exist yet). */
export async function getCourseNotesEditUrl(course: MinimizedCourse) {
  const name = fileName(course);
  if (await getCourseNotes(course)) return `${UPSTREAM}/edit/main/content/courses/${name}.md`;
  return `${UPSTREAM}/new/main/content/courses?filename=${name}.md`;
}
