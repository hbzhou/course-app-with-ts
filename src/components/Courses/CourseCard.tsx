import React, { useMemo } from "react";
import Button from "../../common/Button/Button";
import { mockedAuthorsList } from "../../constants";
import "./Course.module.scss";

export interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

const authorDict = new Map(mockedAuthorsList.map((author) => [author.id, author.name]));

const CourseCard: React.FC<Course> = ({ title, description, duration, creationDate, authors }) => {
  const authorList = useMemo(() => {
    return authors.map((id) => authorDict.get(id)).join(",");
  }, [authors]);

  return (
    <div className="flex justify-between items-center m-4 border-solid border-2 border-green-500">
      <div className="flex flex-col max-w-6xl m-4 min-h-fit">
        <h1>{title}</h1>
        <div>{description}</div>
      </div>
      <div className="flex flex-col justify-evenly flex-grow m-4 min-w-fit">
        <div className="m-2">
          <label>Authors:</label>
          <span>{authorList}</span>
        </div>
        <div className="m-2">
          <label>Duration:</label>
          <span>{duration} hours</span>
        </div>
        <div className="m-2">
          <label>Created:</label>
          <span>{creationDate}</span>
        </div>
        <div className="m-2 text-center">
          <Button className=" border-purple-500 min-w-max w-52">Show course</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
