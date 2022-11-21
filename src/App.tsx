import React from "react";
import CourseCard from "./components/Courses/CourseCard";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <CourseCard />
    </React.Fragment>
  );
};

export default App;
