import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../common/Title/Title";
import { useSelector } from "react-redux";
import { selectAuthors, selectCourses } from "../../store/store";

const CourseInfo: React.FC = () => {
  const { id } = useParams();
  const course = useSelector(selectCourses).find((course) => course.id === id);
  const authors = useSelector(selectAuthors);
  const authorDict = new Map(authors.map((author) => [author.id, author.name]));
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
                return <div key={author}>{authorDict.get(author)}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
