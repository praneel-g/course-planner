import { Course } from "@/.data/types";
import { MarkdownContent } from "@/components/markdown/markdown-content";
import { getCourseNotes } from "@/content/course-notes";
import { ComponentProps } from "react";

export async function CourseNotes({ course, formLink }: ComponentProps<"div"> & { course: Course; formLink: string }) {
  const notes = await getCourseNotes(course);

  if (notes) return <MarkdownContent markdown={notes} />;
  return (
    <a href={formLink} target="_blank" className="block text-sm text-gray-400">
      No course notes. If you have any information related to{" "}
      <b>
        {course.subject} {course.number}
      </b>{" "}
      (syllabus, textbooks, etc.), please <span className="underline">click here to share it</span>!
    </a>
  );
}
