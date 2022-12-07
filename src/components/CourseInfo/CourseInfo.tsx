import React from "react";
import Title from "../../common/Title/Title";
import { Course } from "../Courses/CourseCard";

const CourseInfo: React.FC<Course> = (course: Course) => {
  return (
    <div>
      <Title>{course.title}</Title>
      <div>
        <div>{course.description}</div>
        <div>
          <div>
            <span>ID:</span>
            <span>{course.id}</span>
          </div>
          <div>
            <span>Duration:</span>
            <span>{course.duration} hours</span>
          </div>
          <div>
            <span>Created:</span>
            <span>{course.creationDate}</span>
          </div>
          <div>
            <div>Authors:</div>
            {course.authors.map((author) => {
              return <div key={author}>author</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
