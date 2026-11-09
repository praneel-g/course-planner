import { Course } from "@/.data/types";
import { getCourseNotesEditUrl } from "@/content/course-notes";
import { getCourseGoogleFormHref } from "@/course/functions";
import { CourseContributeDialog } from "./course-contribute-dialog";

export async function CourseContributeButton({ course }: { course: Course }) {
  const googleFormUrl = getCourseGoogleFormHref(course);
  const githubUrl = await getCourseNotesEditUrl(course);
  return (
    <CourseContributeDialog googleFormUrl={googleFormUrl} githubUrl={githubUrl}>
      <button className="underline text-sm">contribute</button>
    </CourseContributeDialog>
  );
}
