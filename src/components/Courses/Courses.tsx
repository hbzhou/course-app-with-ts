import React, { useState } from "react";
import Button from "../../common/Button/Button";
import CourseCard, { Course } from "./CourseCard";
import SearchBar from "./SearchBar";
import { mockedCoursesList as courseList } from "../../constants";

const Courses: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const handleSearch = (keyword:string) => { setKeyword(keyword) }
  return (
    <main className="border-solid border-2 border-green-300 m-4">
      <div className="flex justify-between m-4 ">
        <SearchBar handleSearch={handleSearch} />
        <Button className=" border-solid border-2  border-purple-500 p-1 w-56 max-h-10 min-w-fit">
          Add new course
        </Button>
      </div>
      {courseList
        .filter((course) => course.title.indexOf(keyword) > -1)
        .map((course: Course) => (
          <CourseCard key={course.id} {...course} />
        ))}
    </main>
  );
};

export default Courses;
