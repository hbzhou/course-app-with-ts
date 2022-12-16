import React, { useEffect, useState } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, selectAuthors, selectCourses } from "../../store/store";
import { fetchCourses } from "../../store/course/course.thunk";
import { fetchAuthors } from "../../store/author/author.thunk";

const Courses: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const courses = useSelector(selectCourses);
  const authors = useSelector(selectAuthors);
  const authorDict = new Map(authors.map((author) => [author.id, author.name]));

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchCourses());
  }, [dispatch]);

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
