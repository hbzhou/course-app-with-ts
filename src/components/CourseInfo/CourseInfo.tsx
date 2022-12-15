import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../common/Title/Title";

interface QueryCourseResponse {
  successful: boolean;
  result: Course;
}

const CourseInfo: React.FC = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course>();
  const getCourse = async () => {
    const token = localStorage.getItem("token") ?? "";
    const response = await fetch(`/courses/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const queryCourseResp: QueryCourseResponse = await response.json();
    if (queryCourseResp.successful) {
      setCourse(queryCourseResp.result);
    }
  };

  useEffect(() => {
    getCourse();
  });
  if (!course) {
    return <div>Loading</div>;
  }
  return (
    <div className=" border-solid border-2 border-blue-300 m-4">
      <Title>{course.title}</Title>
      <div className="flex">
        <div className=" w-1/2 m-4">{course!.description}</div>
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
