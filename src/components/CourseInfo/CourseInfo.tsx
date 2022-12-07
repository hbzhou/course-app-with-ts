import React from "react";
import Title from "../../common/Title/Title";
import { Course } from "../Courses/CourseCard";

const CourseInfo: React.FC<Course> = (course: Course) => {
  return (
    <div className=" border-solid border-2 border-blue-300 m-4">
      <Title>{course.title}</Title>
      <div className="flex">
        <div className=" w-1/2 m-4">{course.description}</div>
        <div className="m-4">
          <div>
            <span className="font-bold mr-3">ID:</span>
            <span>{course.id}</span>
          </div>
          <div>
            <span className="font-bold mr-3">Duration:</span>
            <span>{course.duration} hours</span>
          </div>
          <div>
            <span className="font-bold mr-3">Created:</span>
            <span>{course.creationDate}</span>
          </div>
          <div className="flex">
            <div className="font-bold mr-3">Authors:</div>
            <div>
              {course.authors.map((author) => {
                return <div key={author}>author</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
