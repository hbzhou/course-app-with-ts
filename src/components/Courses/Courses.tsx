import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/common/Button";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import { AppDispatch, selectAuthors, selectCourses } from "@/store/store";
import { fetchCourses } from "@/store/course/course.thunk";
import { fetchAuthors } from "@/store/author/author.thunk";
import { Course } from "@/types/course";
import { Author } from "@/types/author";

const Courses: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const courses = useSelector(selectCourses);
  const authors = useSelector(selectAuthors);
  const authorDict = new Map(authors.map((author: Author) => [author.id, author.name]));

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchCourses());
  }, [dispatch]);

  const filteredCourses = courses.filter((course: Course) => course.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <SearchBar handleSearch={handleSearch} />
        <Button onClick={() => navigate("/courses/add")}>
          Add New Course
        </Button>
      </div>
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course: Course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          No courses found
        </div>
      )}
    </main>
  );
};

export default Courses;
