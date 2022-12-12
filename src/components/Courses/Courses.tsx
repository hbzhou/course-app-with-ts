import React, { useEffect, useState } from "react";
import Button from "../../common/Button/Button";
import { Author } from "../Authors/AuthorItem";
import CourseCard, { Course } from "./CourseCard";
import SearchBar from "./SearchBar";

interface QueryAllCoursesResponse {
  successful: boolean;
  result: Course[];
}

interface QueryAllAuthorsResp {
  successful: boolean;
  result: Author[];
}

const Courses: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const authorDict = new Map(authors.map((author) => [author.id, author.name]));

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };
  const getCourses = async () => {
    const token = localStorage.getItem("token") ?? "";
    const response = await fetch("/courses/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const queryAllCoursesResponse: QueryAllCoursesResponse = await response.json();
    if (queryAllCoursesResponse.successful) {
      setCourses(queryAllCoursesResponse.result);
    }
  };

  const getAuthors = async () => {
    const token = localStorage.getItem("token") ?? "";
    const response = await fetch("/authors/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const queryAllAuthorsResp: QueryAllAuthorsResp = await response.json();
    if (queryAllAuthorsResp.successful) {
      setAuthors(queryAllAuthorsResp.result);
    }
  };

  useEffect(() => {
    getAuthors();
    getCourses();
  }, []);

  return (
    <main className="border-solid border-2 border-green-300 m-4">
      <div className="flex justify-between m-4 ">
        <SearchBar handleSearch={handleSearch} />
        <Button className=" border-purple-500 w-56 max-h-10 min-w-fit">Add new course</Button>
      </div>
      {courses
        .filter((course) => course.title.indexOf(keyword) > -1)
        .map((course: Course) => {
          const courseCard = { ...course, authors: course.authors.map((key) => authorDict.get(key) ?? "") };
          return <CourseCard key={course.id} {...courseCard} />;
        })}
    </main>
  );
};

export default Courses;
